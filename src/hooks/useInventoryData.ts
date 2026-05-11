'use client';

import { useState, useEffect } from 'react';
import { inventoryApi } from '@/lib/api';
import {
  ProjectSummary,
  InventoryDetail,
  ApiResponse,
  ProjectData,
} from '@/types/inventory';

export const useInventoryData = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [summaryResponse, detailsResponse] = await Promise.all([
          inventoryApi.getProjectSummary(),
          inventoryApi.getInventoryDetails(),
        ]);

        const summaryData: ApiResponse<ProjectSummary[]> = summaryResponse;
        const detailsData: ApiResponse<InventoryDetail[]> = detailsResponse;

        if (!summaryData.IsSuccess || !detailsData.IsSuccess) {
          throw new Error('Failed to fetch data');
        }

        // Group details by project and building
        const projectsMap = new Map<number, ProjectData>();

        summaryData.Data.forEach((project) => {
          projectsMap.set(project.ProjectId, {
            project,
            buildings: [],
          });
        });

        detailsData.Data.forEach((detail) => {
          const projectData = projectsMap.get(detail.ProjectId);
          if (!projectData) return;

          // Find or create building
          let building = projectData.buildings.find(
            (b) => b.buildingNumber === detail.BuildingNumber
          );

          if (!building) {
            building = {
              buildingNumber: detail.BuildingNumber,
              wings: [],
              total: detail, // Will be updated when we find the Total wing
            };
            projectData.buildings.push(building);
          }

          // Separate Total row from regular wings
          if (detail.Wing === 'Total') {
            building.total = detail;
          } else {
            building.wings.push(detail);
          }
        });

        const projectsArray = Array.from(projectsMap.values());
        setProjects(projectsArray);

        // Set first project as selected by default
        if (projectsArray.length > 0) {
          setSelectedProjectId(projectsArray[0].project.ProjectId);
        }

        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectedProject = projects.find(
    (p) => p.project.ProjectId === selectedProjectId
  );

  return {
    projects,
    selectedProject,
    selectedProjectId,
    setSelectedProjectId,
    loading,
    error,
  };
};
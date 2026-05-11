'use client';

import React, { useState } from 'react';
import { WrapperLayout } from '@/Components/WrapperLayout/WrapperLayout';
import { Searchbar } from '@/Components/Searchbar/Searchbar';
import { ProjectAccordion } from '@/Components/ProjectAccordion/ProjectAccordion';
import { useInventoryData } from '@/hooks/useInventoryData';

export default function Home() {
  const {
    projects,
    selectedProject,
    selectedProjectId,
    setSelectedProjectId,
    loading,
    error,
  } = useInventoryData();

  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading inventory data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Error Loading Data
          </h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const filteredProjects = projects.filter((p) =>
    p.project.ProjectName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WrapperLayout
      selectedProject={selectedProject?.project}
      allProjects={projects.map((p) => p.project)}
      onProjectChange={setSelectedProjectId}
    >
      <div className='bg-gray-200 m-4 border-gray-100 rounded-md'>
      <div className="p-4 lg:p-6 ">
        <Searchbar onSearch={setSearchQuery} />

        {/* Project Accordions */}
        <div className="space-y-3">
          {filteredProjects.map((projectData) => (
            <ProjectAccordion
              key={projectData.project.ProjectId}
              projectData={projectData}
              isExpanded={projectData.project.ProjectId === selectedProjectId}
              onToggle={() => {
                setSelectedProjectId(
                  projectData.project.ProjectId === selectedProjectId
                    ? null
                    : projectData.project.ProjectId
                );
              }}
            />
          ))}
        </div>
        </div>
      </div>
    </WrapperLayout>
  );
}
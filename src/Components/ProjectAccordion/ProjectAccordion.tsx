'use client';

import React from 'react';
import { ProjectData } from '@/types/inventory';
import { BuildingAccordion } from '../BuildingAccordion/BuildingAccordion';

interface ProjectAccordionProps {
  projectData: ProjectData;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  projectData,
  isExpanded,
  onToggle,
}) => {
  const { project, buildings } = projectData;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Project Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className={`transform transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-base font-semibold text-gray-900">
              {project.ProjectName}
            </h3>
            <p className="text-xs text-gray-500">
              Total Buildings: {project.TotalBuilding}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <div className="text-xs text-gray-500">Total Area</div>
            <div className="text-sm font-semibold text-gray-900">
              {project.TotalReraArea.toLocaleString()} SqFt
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Total Units</div>
            <div className="text-sm font-semibold text-gray-900">
              {project.TotalUnit}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Available Units</div>
            <div className="text-sm font-semibold text-green-600">
              {project.AvailableUnit} Units
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50">
          {/* Project Summary Bar */}
          <div className="px-6 py-3 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`transform transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">
                  {project.ProjectName}
                </h4>
                <span className="text-xs text-gray-500">
                  Total Buildings: {project.TotalBuilding}
                </span>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <div className="text-right">
                  <div className="text-xs text-gray-500">Total Area</div>
                  <div className="font-semibold text-gray-900">
                    {project.TotalReraArea.toLocaleString()} SqFt
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Total Units</div>
                  <div className="font-semibold text-gray-900">
                    {project.TotalUnit}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Available Units</div>
                  <div className="font-semibold text-green-600">
                    {project.AvailableUnit} Units
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buildings List */}
          <div className="p-6 space-y-4">
            {buildings.map((building, index) => (
              <BuildingAccordion
                key={`${building.buildingNumber}-${index}`}
                building={building}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
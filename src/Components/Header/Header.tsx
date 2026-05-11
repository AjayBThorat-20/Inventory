'use client';

import React from 'react';
import { ProjectSummary } from '@/types/inventory';

interface HeaderProps {
  selectedProject?: ProjectSummary;
  allProjects: ProjectSummary[];
  onProjectChange: (projectId: number) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  selectedProject,
  allProjects,
  onProjectChange,
  onToggleSidebar,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 flex-shrink-0 z-50">
      <div className="flex items-center justify-between w-full gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Logo */}
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            R
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle sidebar"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Title Section */}
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-semibold text-gray-900 truncate">
              Inventory And Parking Overall Report
            </h1>
            <p className="text-sm text-gray-500 truncate">
              Manage and organize inventory departments with complete RERA operations
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Project Selector */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 flex-shrink-0"
              >
                <path
                  d="M3 7L10 2L17 7V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select
                value={selectedProject?.ProjectId || ''}
                onChange={(e) => onProjectChange(Number(e.target.value))}
                className="appearance-none bg-transparent text-sm font-medium text-blue-600 focus:outline-none cursor-pointer pr-6 max-w-[200px]"
              >
                {allProjects.map((project) => (
                  <option key={project.ProjectId} value={project.ProjectId}>
                    {project.ProjectName}
                  </option>
                ))}
              </select>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 absolute right-3 pointer-events-none"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Notification Bell */}
          <button className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <button className="hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-sm">
              U
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
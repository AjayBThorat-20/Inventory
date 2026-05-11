'use client';

import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { ProjectSummary } from '@/types/inventory';

interface WrapperLayoutProps {
  children: React.ReactNode;
  selectedProject?: ProjectSummary;
  allProjects: ProjectSummary[];
  onProjectChange: (projectId: number) => void;
}

export const WrapperLayout: React.FC<WrapperLayoutProps> = ({
  children,
  selectedProject,
  allProjects,
  onProjectChange,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screenoverflow-hidden">
      {/* Header - Full Width at Top */}
      <Header
        selectedProject={selectedProject}
        allProjects={allProjects}
        onProjectChange={onProjectChange}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Below Header: Sidebar + Main Content Side by Side */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Left Side */}
        <div className="flex-shrink-0">
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>

        {/* Main Content - Right Side */}
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};
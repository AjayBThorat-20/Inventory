'use client';

import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: '🏠', label: 'Dashboard', active: false },
  { icon: '📊', label: 'Inventory', active: true },
  { icon: '👥', label: 'Clients', active: false },
  { icon: '🏢', label: 'Projects', active: false },
  { icon: '💰', label: 'Finance', active: false },
  { icon: '📈', label: 'Reports', active: false },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`
        bg-white border-r border-gray-200
        flex flex-col
        transition-all duration-300 ease-in-out
        h-full
        ${isOpen ? 'w-64' : 'w-20'}
      `}
    >
      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`
              w-full h-12 
              rounded-lg 
              flex items-center
              px-3
              text-xl
              transition-all duration-200
              group
              ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }
              ${!isOpen && 'justify-center'}
            `}
            title={item.label}
          >
            <span className="flex-shrink-0 text-2xl">{item.icon}</span>
            {isOpen && (
              <span className="ml-3 text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>

      
    </aside>
  );
};
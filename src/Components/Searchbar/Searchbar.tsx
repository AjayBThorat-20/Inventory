'use client';

import React from 'react';

interface SearchbarProps {
  onSearch?: (query: string) => void;
  onCustomize?: () => void;
  onExport?: () => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  onSearch,
  onCustomize,
  onExport,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div className="flex-1 relative max-w-md">
        <input
          type="text"
          placeholder="Search By Project Name"
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19L14.65 14.65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onCustomize}
          className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 font-medium text-gray-700 text-sm transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H17M3 10H17M3 14H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="7" cy="6" r="1.5" fill="currentColor" />
            <circle cx="13" cy="10" r="1.5" fill="currentColor" />
            <circle cx="9" cy="14" r="1.5" fill="currentColor" />
          </svg>
          Customize
        </button>

        <button
          onClick={onExport}
          className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 font-medium text-sm transition-colors shadow-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13V3M10 3L6 7M10 3L14 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 13V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Export
        </button>
      </div>
    </div>
  );
};
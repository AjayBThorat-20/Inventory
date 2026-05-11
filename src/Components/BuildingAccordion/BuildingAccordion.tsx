'use client';

import React, { useState } from 'react';
import { BuildingData } from '@/types/inventory';
import { WingTable } from '../WingTable/WingTable';

interface BuildingAccordionProps {
  building: BuildingData;
  defaultOpen?: boolean;
}

export const BuildingAccordion: React.FC<BuildingAccordionProps> = ({
  building,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className={`transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
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
          <h3 className="text-sm font-semibold text-gray-900">
            {building.buildingNumber}
          </h3>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div className="text-right">
            <div className="text-gray-500">Total Area</div>
            <div className="font-semibold text-gray-900">
              {building.total.TotalReraArea.toLocaleString()} SqFt
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-500">Total Units</div>
            <div className="font-semibold text-gray-900">
              {building.total.TotalUnit}
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-500">Available Units</div>
            <div className="font-semibold text-green-600">
              {building.total.AvailableUnit} Units
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
          <WingTable wings={building.wings} total={building.total} />
        </div>
      )}
    </div>
  );
};
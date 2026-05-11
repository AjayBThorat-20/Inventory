import React from 'react';

interface StatusBadgeProps {
  value: number;
  type: 'alloted' | 'booked' | 'hold' | 'available' | 'block' | 'total';
  isArea?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ value, type, isArea = false }) => {
  const colorClasses = {
    alloted: 'text-orange-600',
    booked: 'text-purple-600',
    hold: 'text-gray-600',
    available: 'text-green-600',
    block: 'text-gray-600',
    total: 'text-gray-900 font-semibold',
  };

  if (value === 0 || value === null || value === undefined) {
    return <span className="text-gray-400">-</span>;
  }

  const displayValue = isArea ? value.toLocaleString() : value;

  return (
    <span className={`${colorClasses[type]}`}>
      {displayValue}
    </span>
  );
};
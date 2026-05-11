import React from 'react';
import { InventoryDetail } from '@/types/inventory';
import { StatusBadge } from '../StatusBadge/StatusBadge';

interface WingTableProps {
  wings: InventoryDetail[];
  total: InventoryDetail;
}

export const WingTable: React.FC<WingTableProps> = ({ wings, total }) => {
  return (
    <div className="space-y-6">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 px-2 font-semibold text-gray-700 w-20">Wing</th>
              
              {/* RERA Carpet Area Section */}
              <th className="text-center py-3 px-2 font-semibold text-blue-700 bg-blue-50" colSpan={6}>
                RERA CARPET AREA (SQ. FT)
              </th>
              
              {/* Number of Units Section */}
              <th className="text-center py-3 px-2 font-semibold text-purple-700 bg-purple-50" colSpan={6}>
                NUMBER OF UNITS
              </th>
              
              {/* Parking Section */}
              <th className="text-center py-3 px-2 font-semibold text-green-700 bg-green-50" colSpan={2}>
                PARKING
              </th>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-2 px-2"></th>
              
              {/* RERA Carpet Area Columns */}
              <th className="text-center py-2 px-2 text-gray-600 bg-blue-50">Total</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-blue-50">Alloted</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-blue-50">Booked</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-blue-50">Hold</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-blue-50">Available</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-blue-50">Block</th>
              
              {/* Number of Units Columns */}
              <th className="text-center py-2 px-2 text-gray-600 bg-purple-50">Total</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-purple-50">Alloted</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-purple-50">Booked</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-purple-50">Hold</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-purple-50">Available</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-purple-50">Block</th>
              
              {/* Parking Columns */}
              <th className="text-center py-2 px-2 text-gray-600 bg-green-50">Total</th>
              <th className="text-center py-2 px-2 text-gray-600 bg-green-50">Alloted</th>
            </tr>
          </thead>
          <tbody>
            {wings.map((wing, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-2 font-semibold text-gray-900">{wing.Wing}</td>
                
                {/* RERA Carpet Area */}
                <td className="text-center py-2 px-2 bg-blue-50/30">{wing.TotalReraArea.toLocaleString()}</td>
                <td className="text-center py-2 px-2 bg-blue-50/30">
                  <StatusBadge value={wing.AllotedReraArea} type="alloted" isArea />
                </td>
                <td className="text-center py-2 px-2 bg-blue-50/30">
                  <StatusBadge value={wing.BookedReraArea} type="booked" isArea />
                </td>
                <td className="text-center py-2 px-2 bg-blue-50/30">
                  <StatusBadge value={wing.HoldReraArea} type="hold" isArea />
                </td>
                <td className="text-center py-2 px-2 bg-blue-50/30">
                  <StatusBadge value={wing.AvailableReraArea} type="available" isArea />
                </td>
                <td className="text-center py-2 px-2 bg-blue-50/30">
                  <StatusBadge value={wing.BlockReraArea} type="block" isArea />
                </td>
                
                {/* Number of Units */}
                <td className="text-center py-2 px-2 bg-purple-50/30">{wing.TotalUnit}</td>
                <td className="text-center py-2 px-2 bg-purple-50/30">
                  <StatusBadge value={wing.AllotedUnit} type="alloted" />
                </td>
                <td className="text-center py-2 px-2 bg-purple-50/30">
                  <StatusBadge value={wing.BookedUnit} type="booked" />
                </td>
                <td className="text-center py-2 px-2 bg-purple-50/30">
                  <StatusBadge value={wing.HoldUnit} type="hold" />
                </td>
                <td className="text-center py-2 px-2 bg-purple-50/30">
                  <StatusBadge value={wing.AvailableUnit} type="available" />
                </td>
                <td className="text-center py-2 px-2 bg-purple-50/30">
                  <StatusBadge value={wing.BlockUnit} type="block" />
                </td>
                
                {/* Parking */}
                <td className="text-center py-2 px-2 bg-green-50/30">{wing.TotalParking || '-'}</td>
                <td className="text-center py-2 px-2 bg-green-50/30">
                  <StatusBadge value={wing.AvailableParking} type="available" />
                </td>
              </tr>
            ))}
            
            {/* Total Row */}
            <tr className="bg-gray-200 font-semibold border-t-2 border-gray-300">
              <td className="py-2 px-2 text-gray-900">● Total</td>
              
              {/* RERA Carpet Area Totals */}
              <td className="text-center py-2 px-2 text-gray-900">{total.TotalReraArea.toLocaleString()}</td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.AllotedReraArea} type="total" isArea />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.BookedReraArea} type="total" isArea />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.HoldReraArea} type="total" isArea />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.AvailableReraArea} type="total" isArea />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.BlockReraArea} type="total" isArea />
              </td>
              
              {/* Number of Units Totals */}
              <td className="text-center py-2 px-2 text-gray-900">{total.TotalUnit}</td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.AllotedUnit} type="total" />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.BookedUnit} type="total" />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.HoldUnit} type="total" />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.AvailableUnit} type="total" />
              </td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.BlockUnit} type="total" />
              </td>
              
              {/* Parking Totals */}
              <td className="text-center py-2 px-2 text-gray-900">{total.TotalParking || '-'}</td>
              <td className="text-center py-2 px-2">
                <StatusBadge value={total.AvailableParking} type="total" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
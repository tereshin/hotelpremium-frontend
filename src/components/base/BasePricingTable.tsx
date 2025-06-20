import React from 'react';

export interface PricingRow {
  name: string;
  wash?: string;
  iron?: string;
  price?: string;
}

interface BasePricingTableProps {
  headers: string[];
  rows: PricingRow[];
  className?: string;
}

export const BasePricingTable: React.FC<BasePricingTableProps> = ({ 
  headers,
  rows,
  className = ""
}) => {
  return (
    <div className={`grid gap-2 ${className}`}>
      {/* Header row */}
      <div className="flex rounded-[10px] bg-[#F7F8FA] px-2 lg:px-5 py-2">
        {headers.map((header, index) => (
          <div key={index} className="w-[30%]">{header}</div>
        ))}
      </div>
      
      {/* Data rows */}
      {rows.map((row, index) => (
        <div key={index} className="flex border-b border-[#E8EEF3] px-2 lg:px-5 pb-2 gap-5">
          <div className="w-[30%]">{row.name}</div>
          <div className="w-[30%]">{row.wash || row.price}</div>
          {row.iron && <div className="w-[30%]">{row.iron}</div>}
        </div>
      ))}
    </div>
  );
};

export default BasePricingTable; 
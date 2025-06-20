import React from 'react';

interface BaseServiceLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const BaseServiceLayout: React.FC<BaseServiceLayoutProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`min-h-screen bg-white overflow-x-hidden max-w-[2048px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default BaseServiceLayout; 
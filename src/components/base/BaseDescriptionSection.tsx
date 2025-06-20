import React from 'react';

interface BaseDescriptionSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const BaseDescriptionSection: React.FC<BaseDescriptionSectionProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <section className={`max-w-content relative w-full lg:text-lg mx-auto px-4 xl:px-0 mb-8 ${className}`}>
      <div className="max-w-[747px]">
        {children}
      </div>
    </section>
  );
};

export default BaseDescriptionSection; 
import React from 'react';
import Title from "@/components/ui/Title";
import FeatureIcon from "@/components/ui/FeatureIcon";

export interface Feature {
  icon: string;
  text: string;
}

interface BaseFeaturesSectionProps {
  title: string;
  features: Feature[];
  columns?: 1 | 2 | 3 | 4 | 6;
  className?: string;
}

export const BaseFeaturesSection: React.FC<BaseFeaturesSectionProps> = ({ 
  title,
  features,
  columns = 4,
  className = ""
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-6'
  };

  return (
    <section className={`py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto ${className}`}>
      <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
        <Title>{title}</Title>
        <div className={`grid ${gridCols[columns]} gap-6 md:gap-10`}>
          {features.map((feature, index) => (
            <FeatureIcon
              key={index}
              icon={feature.icon}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BaseFeaturesSection; 
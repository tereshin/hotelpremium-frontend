import React from 'react';
import Title from "@/components/ui/Title";

interface Step {
  number: number;
  content: string;
}

interface BaseStepsSectionProps {
  title: string;
  steps: Step[];
  columns?: 1 | 2 | 3;
  className?: string;
}

export const BaseStepsSection: React.FC<BaseStepsSectionProps> = ({ 
  title,
  steps,
  columns = 2,
  className = ""
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 lg:grid-cols-3'
  };

  return (
    <section className={`py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto ${className}`}>
      <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
        <Title>{title}</Title>
        <div className={`grid ${gridCols[columns]} gap-4`}>
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 lg:w-[70px] lg:h-[70px] rounded-full border border-[#E8EEF3] flex items-center justify-center text-hotel-dark-blue text-3xl lg:text-5xl font-forum">
                {step.number}
              </div>
              <p className="text-lg font-forum">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BaseStepsSection; 
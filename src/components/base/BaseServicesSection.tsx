import React from 'react';
import Title from "@/components/ui/Title";
import ServicesSlider from "@/components/ui/sliders/services-slider";

interface BaseServicesSectionProps {
  title?: string;
  className?: string;
}

export const BaseServicesSection: React.FC<BaseServicesSectionProps> = ({ 
  title = "Другие предложения",
  className = ""
}) => {
  return (
    <section className={`py-10 lg:py-20 px-4 lg:px-10 max-w-[2048px] mx-auto ${className}`}>
      <div className="max-w-content w-full mx-auto flex flex-col gap-6 lg:gap-12">
        <Title>{title}</Title>
        <ServicesSlider />
      </div>
    </section>
  );
};

export default BaseServicesSection; 
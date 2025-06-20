import React from 'react';
import Title from "@/components/ui/Title";
import ImageGallerySlider from "@/components/ui/sliders/image-gallery-slider";

interface BaseGallerySectionProps {
  title?: string;
  showGradient?: boolean;
  className?: string;
}

export const BaseGallerySection: React.FC<BaseGallerySectionProps> = ({ 
  title = "Галерея",
  showGradient = true,
  className = ""
}) => {
  return (
    <section className={`max-w-[2048px] mx-auto bg-[#192128] ${className}`}>
      <div className="max-w-content text-white w-full mx-auto relative">
        <Title className="text-white absolute top-10 left-3 z-10 hidden lg:block">
          {title}
        </Title>
        <ImageGallerySlider />
        {showGradient && (
          <div className="hidden lg:block absolute h-full w-full lg:w-[35%] bg-gradient-to-t from-transparent to-black z-1 lg:-left-10 top-0 pointer-events-none"/>
        )}
      </div>
    </section>
  );
};

export default BaseGallerySection; 
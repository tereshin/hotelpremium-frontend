import React from 'react';
import { cn } from "@/shared/utils/utils";

interface BaseImageContentCardProps {
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export const BaseImageContentCard: React.FC<BaseImageContentCardProps> = ({ 
  imageUrl,
  imagePosition = 'right',
  children,
  className = ""
}) => {
  return (
    <section className={`max-w-content relative w-full lg:mx-auto -mb-6 mt-8 lg:my-12 px-4 xl:px-0 ${className}`}>
      <div className="flex w-full flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:h-[625px]">
        {/* Image column */}
        <div className={cn(
          "w-full lg:w-[70%] lg:absolute top-0 bottom-0 z-0",
          imagePosition === 'right' ? 'right-0' : 'left-0'
        )}>
          <div 
            className="w-full bg-cover bg-center rounded-sm" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="pt-[60%] lg:pt-[70%]"></div>
          </div>
        </div>

        {/* Content column */}
        <div className={cn(
          "w-full lg:w-[57%] flex flex-col gap-6 lg:gap-10 shadow-xl -top-10 lg:-top-6 bg-white rounded-md px-6 py-8 lg:px-10 lg:py-16 z-10 relative",
          imagePosition === 'left' ? 'lg:ml-auto' : ''
        )}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default BaseImageContentCard; 
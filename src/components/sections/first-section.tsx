import React from 'react';
import Header from '@/components/header';
import { BookingForm } from '@/components/booking-form';
import { cn } from '@/lib/utils';

interface FirstSectionProps {
  title?: string;
  image?: string;
  className?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ title = 'Заголовок', image = '/assets/images/home/1.jpg', className }) => {
  const handleImageLoad = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      console.log('Image loaded:', imageUrl);
    };
  };

  return (
    <div><div className={cn("relative overflow-hidden h-[70px] lg:h-[370px] w-full", className)}>
      <Header />
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-in-out",
        )}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        >
          {/* Dark gradient overlay from bottom */}
          <div
            className="absolute inset-0 bg-black to-transparent opacity-50"
          ></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onLoad={() => handleImageLoad(image)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        <div className="relative h-full w-full max-w-content hidden lg:flex flex-col lg:flex-row mx-auto justify-center lg:justify-between items-center px-4 xl:px-0 lg:max-h-[100%] pt-12 lg:pt-24">
          <div className="z-10 max-w-[1460px] p-5 lg:p-6 text-black bg-white rounded-sm w-full">
            <BookingForm variant="horizontal" color="white" />
          </div>
        </div>
      </div>

    </div>
      <div className="max-w-content mx-auto flex flex-col gap-4 lg:gap-6 pt-8 lg:pt-12 px-4 xl:px-0">
        <div className="uppercase text-xs lg:text-sm font-montserrat font-medium text-[#8B9197]">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="item">
              <a href="/" className="text-[#090F15]">Главная</a>
            </div>
            <span>/</span>
            <div className="item">
              <span>{title.replace(/<[^>]+>/g, '')}</span>
            </div>
          </div>
        </div>
        <h1 className="w-full text-3xl lg:text-5xl uppercase max-w-4xl mb-3 lg:mb-6 tracking-wide">
          <span className="block" dangerouslySetInnerHTML={{ __html: title }} />
        </h1>
      </div>
    </div>
  );
};

export default FirstSection; 
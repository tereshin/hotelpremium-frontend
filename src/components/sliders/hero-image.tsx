import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { BookingForm } from '@/components/booking-form';

interface HeroImageProps {
    title: string;
    subtitle: string;
    image: string;
    className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ title, subtitle, image, className }) => {
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});


    const handleImageLoad = (imageUrl: string) => {
        setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
    };

    if (!image) return null;

    return (
        <div className={cn("relative overflow-hidden min-h-[800px] max-h-[1000px] w-full", className)}>
            <div
                className={cn(
                    "absolute inset-0 transition-all duration-700 ease-in-out",
                )}
            >
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onLoad={() => handleImageLoad(image)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <div className="relative h-full w-full min-h-[700px] max-w-content flex flex-col lg:flex-row mx-auto justify-center lg:justify-between items-center lg:max-h-[100%] pt-12 lg:pt-24 px-4 xl:px-0">
                    <h1 className="w-full text-hotel-off-white text-5xl lg:text-7xl uppercase max-w-4xl mb-6 tracking-wide animate-fade-in">
                        <span className="block" dangerouslySetInnerHTML={{ __html: title }} />
                        <span className="block text-4xl lg:text-7xl lg:text-8xl">{subtitle}</span>
                    </h1>
                    <div className="z-10 max-w-[1460px] p-5 lg:p-8 text-black bg-white rounded-sm lg:max-w-[400px] w-full">
                        <h2 className="text-4xl uppercase mb-4">Бронирование</h2>
                        <BookingForm variant="vertical" color="white" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroImage;

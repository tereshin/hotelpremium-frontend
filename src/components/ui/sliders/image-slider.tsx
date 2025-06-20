import React, { useState, useEffect } from "react";
import { cn } from "@/shared/utils/utils";
import SliderNavigation from "@/components/ui/slider-navigation";

interface ImageSliderProps {
  images: string[];
  className?: string;
  autoplayInterval?: number;
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
}

const ImageSlider = ({
  images,
  className,
  autoplayInterval = 5000,
  ariaLabelPrev = "Previous image",
  ariaLabelNext = "Next image"
}: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const handlePrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!transitioning) {
        handleNext();
      }
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, transitioning, autoplayInterval]);

  return (
    <div
      className={cn("w-full h-full relative overflow-hidden rounded-sm", className)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-in-out h-[calc(100%-40px)] lg:h-[calc(100%-50px)]",
            index === currentSlide
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-105"
          )}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-sm"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      {/* Pagination Bullets */}
      <div className="absolute -bottom-0 left-0 right-0 z-10 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-4 h-4 border border-gray-400 rounded-full mx-1 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-1.5 after:h-1.5 after:right-0 after:bottom-0 after:m-auto after:bg-white after:rounded-full",
              index === currentSlide ? "bg-hotel-dark-blue border-transparent" : ""
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="absolute w-full hidden lg:block bottom-0 -top-4 my-auto h-fit right-0 z-10">
        <SliderNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          className="text-white w-[calc(100%-80px)] mx-auto justify-between"
          ariaLabelPrev={ariaLabelPrev}
          ariaLabelNext={ariaLabelNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider; 
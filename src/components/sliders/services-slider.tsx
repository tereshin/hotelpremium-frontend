import React, { useState, useRef, useEffect } from "react";
import SliderNavigation from "../ui/slider-navigation";
import services from "@/lib/services";
import SliderCounter from "../ui/slider-counter";

interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 30; // Gap between slides
        const availableWidth = containerWidth - (gap * (visibleSlides - 1));
        const newSlideWidth = availableWidth / visibleSlides;
        setSlideWidth(newSlideWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [visibleSlides]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }

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

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? services.length - visibleSlides : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === services.length - visibleSlides ? 0 : prev + 1
    );
  };

  const translateX = -(currentSlide * (slideWidth + 30));

  if (services.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={sliderRef}
        className="flex touch-pan-y gap-[30px] transition-all duration-500 ease-in-out mb-6 lg:mb-10"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {services.map((service: ServiceData) => {
          return (
            <div
              key={service.id}
              className="flex-shrink-0"
              style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%" }}
            >
              <div className="flex flex-col gap-8">
                <div
                  className="relative w-full h-[175px] lg:h-[274px] rounded-sm overflow-hidden"
                  style={{
                    backgroundImage: `
                        url(${service.image})
                      `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[#F3EEE7] uppercase text-2xl lg:text-[30px] font-light tracking-[0.06em] leading-[1.15em]">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative flex justify-between items-center gap-8 lg:ml-auto lg:justify-end">
        {/* Counter */}
        <SliderCounter current={currentSlide + 1} total={services.length} />
        {/* Navigation */}
        <SliderNavigation onPrev={handlePrev} onNext={handleNext} className="text-[#01396C]" />
      </div>
    </div>
  );
};

export default ServicesSlider; 
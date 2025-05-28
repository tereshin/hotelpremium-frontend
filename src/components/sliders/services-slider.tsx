import React, { useState, useRef, useEffect } from "react";
import SliderNavigation from "../ui/slider-navigation";
import services from "@/lib/services";
import SliderCounter from "../ui/slider-counter";
import { useNavigate, useLocation } from "react-router-dom";

interface ServiceData {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const ServicesSlider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGap, setCurrentGap] = useState(30);
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
        let newSlideWidth = availableWidth / visibleSlides;
        if (window.innerWidth < 768) {
          setCurrentGap(10);
          newSlideWidth = Math.min(newSlideWidth, 260);
        }
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

  const translateX = -(currentSlide * (slideWidth + currentGap));

  if (services.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={sliderRef}
        className="flex touch-pan-y gap-[10px] lg:gap-[30px] transition-all duration-500 ease-in-out mb-4 lg:mb-10"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {services
          .filter((service: ServiceData) => service.link !== location.pathname)
          .map((service: ServiceData) => {
            return (
              <div
                key={service.id}
                className="flex-shrink-0 cursor-pointer max-w-[260px] lg:max-w-full"
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%" }}
                onClick={() => navigate(service.link)}
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
                    <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[#F3EEE7] uppercase text-xl lg:text-2xl lg:text-[30px] font-light tracking-[0.06em] leading-[1.15em]">
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
import React, { useState, useRef, useEffect } from "react";
import SliderCounter from "../ui/slider-counter";
import { cn } from "@/lib/utils";

interface MenuSlideData {
  id: number;
  image: string;
}

const menuSlides: MenuSlideData[] = [
  {
    id: 1,
    image: "/assets/images/restaurant/menu-1.png",
  },
  {
    id: 2,
    image: "/assets/images/restaurant/menu-2.png",
  },
  {
    id: 3,
    image: "/assets/images/restaurant/menu-3.png",
  },
  {
    id: 4,
    image: "/assets/images/restaurant/menu-4.png",
  },
  {
    id: 5,
    image: "/assets/images/restaurant/menu-5.png",
  },
  {
    id: 6,
    image: "/assets/images/restaurant/menu-6.png",
  }
];

const MenuSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
    setCurrentSlide((prev) => (prev === 0 ? menuSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === menuSlides.length - 1 ? 0 : prev + 1));
  };

  if (menuSlides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Background section */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#EEF2F4]"></div>
          <div className="absolute inset-0">
            <img 
              src="/assets/images/menu/menu-background.png" 
              alt="Menu background" 
              className="w-full h-full object-cover blur-sm opacity-60"
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90 opacity-60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 lg:py-24 px-4 xl:px-0 max-w-content mx-auto">
        <div className="w-full">
          <h2 className="text-white uppercase text-2xl lg:text-[40px] font-forum mb-8 lg:mb-12">
            Наше меню
          </h2>

          <div 
            className="relative overflow-hidden max-w-[802px] mx-auto"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex relative w-full">
              {menuSlides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={cn(
                    "w-full transition-all duration-500 ease-in-out",
                    index === currentSlide ? "block" : "hidden"
                  )}
                >
                  <div className="rounded-md shadow-lg bg-white overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={`Menu slide ${slide.id}`} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 lg:mt-10">
              <SliderCounter 
                current={currentSlide + 1} 
                total={menuSlides.length} 
                className="text-white"
              />
              
              <div className="flex items-center gap-[30px]">
                <button 
                  onClick={handlePrev}
                  className="w-[48px] h-[48px] rounded-sm border border-white flex items-center justify-center"
                  aria-label="Previous slide"
                >
                  <img src="/assets/images/menu/left-arrow.svg" alt="Previous" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-[48px] h-[48px] rounded-sm border border-white flex items-center justify-center"
                  aria-label="Next slide"
                >
                  <img src="/assets/images/menu/right-arrow.svg" alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSlider; 
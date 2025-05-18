import React, { useState, useEffect, TouchEvent } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import SliderNavigation from '../ui/slider-navigation';
import SliderCounter from '../ui/slider-counter';
import TextImageSection from '../sections/text-image-section';

interface PromotionSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}

interface PromotionsSliderProps {
  promotions: PromotionSlide[];
  className?: string;
}

const PromotionsSlider: React.FC<PromotionsSliderProps> = ({ promotions, className }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Set to always show one slide
  const slidesToShow = 1;
  const slideWidth = 100 / slidesToShow;

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev >= promotions.length - 1 ? 0 : prev + 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((prev) => (prev <= 0 ? promotions.length - 1 : prev - 1));
    setTimeout(() => setTransitioning(false), 500);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  if (!promotions || promotions.length === 0) return null;

  return (
    <div className={cn("relative flex flex-col md:gap-12", className)}>
      <div
        className="flex transition-transform duration-500 ease-in-out -mb-10 lg:mb-0"
        style={{ transform: `translateX(-${current * slideWidth}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {promotions.map((promo, idx) => (
          <div
            key={promo.id}
            style={{
              width: `${slideWidth}%`,
              flex: `0 0 ${slideWidth}%`,
              transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
              opacity: idx === current ? 1 : 0,
              pointerEvents: idx === current ? 'auto' : 'none',
            }}
          >
            <TextImageSection
              title={promo.title}
              text={promo.description}
              image={promo.image}
              button={{
                text: "Подробнее",
                link: promo.link
              }}
              reverse={promo.reverse}
            />
          </div>
        ))}
      </div>
      <div className="relative flex justify-between items-center gap-8 lg:ml-auto lg:absolute lg:bottom-8 lg:right-0">
        {/* Counter */}
        <SliderCounter current={current + 1} total={promotions.length} />
        {/* Navigation */}
        <SliderNavigation onPrev={prevSlide} onNext={nextSlide} className="text-[#01396C]" />
      </div>
    </div>
  );
};

export default PromotionsSlider;
import React from 'react';
import ArrowIcon from "@/components/ui/icons/ArrowIcon";
import { cn } from '@/shared/utils/utils';

interface SliderNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ 
  onPrev, 
  onNext, 
  className,
  ariaLabelPrev = "Previous slide",
  ariaLabelNext = "Next slide"
}) => {
  return (
    <div className={cn("relative flex justify-center gap-4 items-center w-max ", className)}>
        <button 
          onClick={onPrev}
          className="rounded-sm border border-current py-3 px-4 max-w-[42px] transition-colors"
          aria-label={ariaLabelPrev}
        >
          <div className="rotate-180">
            <ArrowIcon />
          </div>
        </button>
        <button 
          onClick={onNext}
          className="rounded-sm border border-current py-3 px-4 max-w-[42px] transition-colors"
          aria-label={ariaLabelNext}
        >
          <ArrowIcon />
        </button>
      </div>
  );
};

export default SliderNavigation; 
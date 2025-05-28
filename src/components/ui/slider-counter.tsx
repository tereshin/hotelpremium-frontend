import React from 'react';

interface SliderCounterProps {
  current: number;
  total: number;
  className?: string;
}

const SliderCounter: React.FC<SliderCounterProps> = ({ current, total, className }) => {
  const formattedCurrent = current < 10 ? `0${current}` : current;
  const formattedTotal = total < 10 ? `0${total}` : total;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="text-center">
        <span className="text-sm flex gap-2 lg:gap-4 text-xl items-center">
          <div className="text-4xl lg:text-6xl">{formattedCurrent}</div> 
          <div>/</div> 
          <div className="opacity-50">{formattedTotal}</div>
        </span>
      </div>
    </div>
  );
};

export default SliderCounter; 
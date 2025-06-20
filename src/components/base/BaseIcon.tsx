import React from 'react';

interface BaseIconProps {
  src: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

export const BaseIcon: React.FC<BaseIconProps> = ({ 
  src, 
  alt = '', 
  className = '', 
  size = 'md' 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default BaseIcon; 
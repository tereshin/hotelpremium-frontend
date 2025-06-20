import React from 'react';

interface TitleProps {
  children: string;
  className?: string;
  size?: 'large' | 'medium' | 'small';
}

const titleSizes = {
  large: 'text-3xl md:text-5xl',
  medium: 'text-2xl md:text-3xl',
  small: 'text-xl md:text-2xl',
}


const Title: React.FC<TitleProps> = ({ children, className = '', size = 'large' }) => {
  return (
    <h2 
      className={`uppercase ${className} ${titleSizes[size]}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default Title;
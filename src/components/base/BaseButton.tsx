import React from 'react';
import { Button } from '../ui/button';

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  size = 'default',
  className = '',
  disabled = false,
  loading = false,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
      )}
      {children}
    </Button>
  );
};

export default BaseButton; 
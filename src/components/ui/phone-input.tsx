import React, { forwardRef } from 'react';
import { cn } from '@/shared/utils/utils';

// Custom phone mask function
const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const phoneNumber = value.replace(/\D/g, '');
  
  // Apply formatting based on length
  if (phoneNumber.length === 0) return '';
  if (phoneNumber.length <= 1) return `+${phoneNumber}`;
  if (phoneNumber.length <= 4) return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1)}`;
  if (phoneNumber.length <= 7) return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
  if (phoneNumber.length <= 9) return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
  return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
};

const getCaretPosition = (oldValue: string, newValue: string, oldCaretPosition: number): number => {
  // Calculate new caret position after formatting
  const oldLength = oldValue.length;
  const newLength = newValue.length;
  const lengthDiff = newLength - oldLength;
  
  return Math.min(oldCaretPosition + lengthDiff, newLength);
};

export interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      const cursorPosition = input.selectionStart || 0;
      const oldValue = value;
      const newValue = formatPhoneNumber(e.target.value);
      
      onChange(newValue);
      
      // Set cursor position after state update
      setTimeout(() => {
        const newCursorPosition = getCaretPosition(oldValue, newValue, cursorPosition);
        input.setSelectionRange(newCursorPosition, newCursorPosition);
      }, 0);
    };

    return (
      <input
        type="tel"
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder="+7 (999) 999 99 99"
        className={cn(
          "w-full flex flex-wrap font-montserrat items-center justify-between bg-transparent border border-gray-200 rounded-sm py-5 px-5 leading-none font-semibold text-hotel-dark-blue focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput"; 
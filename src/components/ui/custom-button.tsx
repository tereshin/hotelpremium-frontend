
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex font-medium items-center justify-center whitespace-nowrap rounded-sm uppercase text-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        base1: "tracking-widest bg-hotel-light-beige text-hotel-darkest-blue hover:bg-hotel-dark-blue hover:text-hotel-off-white gap-4",
        base2: "tracking-widest bg-hotel-dark-blue text-hotel-off-white hover:bg-hotel-darker-blue hover:text-hotel-off-white gap-4",
        small: "bg-transparent text-hotel-off-white border border-hotel-off-white hover:bg-hotel-dark-blue hover:border-hotel-dark-blue hover:text-hotel-off-white",
        largeIcon: "bg-transparent text-hotel-off-white border border-hotel-off-white hover:bg-hotel-dark-blue hover:border-hotel-dark-blue hover:text-hotel-off-white flex items-center gap-2",
        smallIcon: "bg-transparent text-hotel-off-white border border-hotel-off-white hover:bg-hotel-dark-blue hover:border-hotel-dark-blue hover:text-hotel-off-white flex items-center gap-1",
        menu: "bg-transparent hover:bg-hotel-dark-blue hover:text-hotel-off-white",
      },
      size: {
        default: "h-[61px] px-6 lg:px-7 py-3",
        sm: "h-12 px-3.5",
        lg: "h-[70px] lg:px-10",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { 
      variant: "base1",
      size: "default",
    },
  }
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button 
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };

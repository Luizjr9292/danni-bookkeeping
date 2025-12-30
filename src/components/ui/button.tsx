import React from 'react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function buttonVariants({ variant = 'primary', size = 'md', className }: { variant?: ButtonProps['variant'], size?: ButtonProps['size'], className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
    {
      'bg-primary text-white hover:bg-primary/90': variant === 'primary',
      'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
      'hover:bg-slate-100 text-primary': variant === 'ghost',
      'h-9 px-4 text-sm': size === 'sm',
      'h-10 px-6 py-2': size === 'md',
      'h-12 px-8 text-lg': size === 'lg',
    },
    className
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

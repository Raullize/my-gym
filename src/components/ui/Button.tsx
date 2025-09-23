import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-block font-semibold uppercase cursor-pointer transition-all duration-300 border-none rounded-full tracking-wider';
  
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-transparent hover:text-orange-500 hover:shadow-[inset_0_0_0_2px_theme(colors.orange.500)]',
    secondary: 'bg-transparent text-white shadow-[inset_0_0_0_2px_white] hover:bg-white hover:text-orange-500'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
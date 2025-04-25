import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Define base styles
  const baseStyles = 'font-medium transition rounded-full focus:outline-none';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700',
    secondary: 'bg-white text-teal-600 hover:bg-gray-100',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50'
  };
  
  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${widthStyles} 
    ${className}
  `;

  return (
    <button 
      className={buttonStyles} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
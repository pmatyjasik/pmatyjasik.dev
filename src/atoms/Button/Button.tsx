import React from 'react';

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = ({children, onClick}: ButtonProps) => (
  <button
    type="button"
    className="rounded-2xl border border-primary bg-primary px-4 py-2 text-sm font-medium text-white shadow-xl hover:bg-white hover:text-primary"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

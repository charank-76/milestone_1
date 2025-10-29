import React from 'react';

export function Select({ children, value, onValueChange }) {
  return (
    <div className="relative">
      {React.cloneElement(children[0], { value, onValueChange })}
      {children[1]}
    </div>
  );
}

export function SelectTrigger({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return (
    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
      {children}
    </div>
  );
}

export function SelectItem({ children, value, onClick }) {
  return (
    <div
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={() => onClick && onClick(value)}
    >
      {children}
    </div>
  );
}

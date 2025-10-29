import React from 'react';

export function Label({ children, className, ...props }) {
  return (
    <label className={`block text-sm font-medium text-white mb-1 ${className}`} {...props}>
      {children}
    </label>
  );
}

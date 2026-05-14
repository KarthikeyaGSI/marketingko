// src/components/layout/BrokenGridWrapper.tsx
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  zIndex?: number;
}

// The wrapper uses CSS grid with asymmetrical columns and negative margins
// to force sections to bleed out of the conventional container bounds.
export const BrokenGridWrapper = ({ children, className = '', zIndex = 0 }: Props) => {
  return (
    <section
      className={`relative break-grid-wrapper ${className}`}
      style={{ zIndex }}
    >
      {children}
    </section>
  );
};

export default BrokenGridWrapper;

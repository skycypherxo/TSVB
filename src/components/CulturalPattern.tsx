'use client'

import React from 'react';

interface CulturalPatternProps {
  className?: string;
}

const CulturalPattern: React.FC<CulturalPatternProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        <defs>
          <pattern
            id="cultural-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path
              d="M50 30 L60 40 L50 50 L40 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M50 70 L60 60 L50 50 L40 60 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M30 50 L40 40 L50 50 L40 60 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M70 50 L60 40 L50 50 L60 60 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cultural-pattern)" />
      </svg>
    </div>
  );
};

export default CulturalPattern;
// src/symbols/SwarmLogicMark.jsx

import React from "react";

export function SwarmLogicMark({ size = 32, className }) {
  const stroke = "#FFD54F";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="16,4 26,10 26,22 16,28 6,22 6,10"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <circle cx="16" cy="10" r="2" fill={stroke} />
      <circle cx="22" cy="16" r="2" fill={stroke} />
      <circle cx="16" cy="22" r="2" fill={stroke} />
      <circle cx="10" cy="16" r="2" fill={stroke} />
      <path
        d="M16 10c3 1 4 2 6 6-2 4-3 5-6 6-3-1-4-2-6-6 2-4 3-5 6-6z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
      />
    </svg>
  );
}

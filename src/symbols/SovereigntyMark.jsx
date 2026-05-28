// src/symbols/SovereigntyMark.jsx

import React from "react";

export function SovereigntyMark({ size = 32, className }) {
  const accent = "#FFD54F";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="12"
        fill="#020617"
        stroke={accent}
        strokeWidth="1.4"
      />
      <path
        d="M16 8 L22 16 L16 24 L10 16 Z"
        fill="none"
        stroke={accent}
        strokeWidth="1.4"
      />
      <circle cx="16" cy="16" r="3" fill={accent} />
    </svg>
  );
}

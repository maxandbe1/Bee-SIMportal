// src/symbols/BeeSimMark.jsx

import React from "react";

export function BeeSimMark({ size = 32, className }) {
  const accent = "#FFD54F";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="10"
        fill="#020617"
        stroke={accent}
        strokeWidth="1.4"
      />
      <circle cx="16" cy="13" r="4" fill={accent} />
      <rect
        x="10"
        y="19"
        width="12"
        height="3"
        rx="1.5"
        fill="#0f172a"
        stroke={accent}
        strokeWidth="0.8"
      />
      <rect
        x="11"
        y="20"
        width="4"
        height="1"
        rx="0.5"
        fill={accent}
        opacity="0.9"
      />
    </svg>
  );
}

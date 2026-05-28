import React from "react";

const items = [
  { key: "identity", label: "Identity" },
  { key: "memory", label: "Memory" }
];

export function NavRail({ current, onChange }) {
  return (
    <nav className="nav-rail">
      <div className="nav-logo">🐝</div>
      <ul>
        {items.map((item) => (
          <li key={item.key}>
            { key: "beesim", label: "Bee SIM" },

            <button
              className={item.key === current ? "nav-item active" : "nav-item"}
              onClick={() => onChange(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

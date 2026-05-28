// src/modules/sovereignty/SovereigntyView.jsx

import React, { useEffect, useState } from "react";
import { SovereigntyMark } from "../../symbols/SovereigntyMark.jsx";

export function SovereigntyView() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const sov = window.Portal.modules.sovereignty;
    setState(sov.getState());
  }, []);

  if (!state) return null;

  const sov = window.Portal.modules.sovereignty;

  const bumpAuthority = () => {
    const next = Math.min(1, state.authority + 0.05);
    sov.setAuthority(next);
    setState(sov.getState());
  };

  const reduceAuthority = () => {
    const next = Math.max(0, state.authority - 0.05);
    sov.setAuthority(next);
    setState(sov.getState());
  };

  const adjust = (key, delta) => {
    const next = state.constraints[key] + delta;
    sov.adjustConstraint(key, next);
    setState(sov.getState());
  };

  return (
    <div className="module-root">
      <div className="module-header">
        <SovereigntyMark size={28} />
        <h1>Sovereignty</h1>
      </div>

      <p className="module-subtitle">
        Control, authority, and constraint dynamics of your internal system.
      </p>

      <div className="sov-section">
        <h2>Authority</h2>
        <div className="sov-bar">
          <div
            className="sov-fill"
            style={{ width: `${state.authority * 100}%` }}
          />
        </div>
        <div className="sov-controls">
          <button onClick={reduceAuthority}>-</button>
          <button onClick={bumpAuthority}>+</button>
        </div>
      </div>

      <div className="sov-section">
        <h2>Constraints</h2>
        {Object.entries(state.constraints).map(([key, value]) => (
          <div key={key} className="sov-constraint">
            <div className="sov-constraint-header">
              <span>{key}</span>
              <span>{Math.round(value * 100)}%</span>
            </div>
            <div className="sov-bar">
              <div
                className="sov-fill"
                style={{ width: `${value * 100}%` }}
              />
            </div>
            <div className="sov-controls">
              <button onClick={() => adjust(key, -0.05)}>-</button>
              <button onClick={() => adjust(key, 0.05)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/modules/pattern/PatternView.jsx

import React, { useEffect, useState } from "react";
import { SwarmLogicMark } from "../../symbols/SwarmLogicMark.jsx";

export function PatternView() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const pattern = window.Portal.modules.pattern;
    setState(pattern.getState());
  }, []);

  if (!state) return null;

  const patternApi = window.Portal.modules.pattern;

  const bumpLane = (lane) => {
    const next = Math.min(1, lane.load + 0.1);
    patternApi.updateLaneLoad(lane.id, next);
    setState(patternApi.getState());
  };

  return (
    <div className="module-root">
      <div className="module-header">
        <SwarmLogicMark size={28} />
        <h1>Pattern</h1>
      </div>

      <p className="module-subtitle">
        Swarm lanes and coherence of your Portal OS thinking.
      </p>

      <div className="pattern-lanes">
        {state.lanes.map((lane) => (
          <div key={lane.id} className="pattern-lane">
            <div className="pattern-lane-header">
              <span>{lane.label}</span>
              <span>{Math.round(lane.load * 100)}%</span>
            </div>
            <div className="pattern-lane-bar">
              <div
                className="pattern-lane-fill"
                style={{ width: `${lane.load * 100}%` }}
              />
            </div>
            <button onClick={() => bumpLane(lane)}>Increase load</button>
          </div>
        ))}
      </div>
    </div>
  );
}

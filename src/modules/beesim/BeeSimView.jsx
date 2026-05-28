// src/modules/beesim/BeeSimView.jsx

import React, { useEffect, useState } from "react";
import { BeeSimMark } from "../../symbols/BeeSimMark.jsx";

export function BeeSimView() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const beesim = window.Portal.modules.beesim;
    setState(beesim.getState());
  }, []);

  if (!state) return null;

  const beesim = window.Portal.modules.beesim;

  const step = () => {
    beesim.step();
    setState(beesim.getState());
  };

  const reset = () => {
    beesim.reset();
    setState(beesim.getState());
  };

  return (
    <div className="module-root">
      <div className="module-header">
        <BeeSimMark size={28} />
        <h1>Bee SIM</h1>
      </div>

      <p className="module-subtitle">
        Swarm agents simulating how your Portal OS distributes attention.
      </p>

      <div className="beesim-controls">
        <button onClick={step}>Step</button>
        <button onClick={reset}>Reset</button>
        <span className="beesim-tick">Tick: {state.tick}</span>
      </div>

      <div className="beesim-agents">
        {state.agents.map((agent) => (
          <div key={agent.id} className="beesim-agent">
            <div className="beesim-agent-header">
              <span>{agent.role}</span>
              <span>{Math.round(agent.energy * 100)}%</span>
            </div>
            <div className="beesim-agent-focus">Focus: {agent.focus}</div>
            <div className="beesim-agent-bar">
              <div
                className="beesim-agent-fill"
                style={{ width: `${agent.energy * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

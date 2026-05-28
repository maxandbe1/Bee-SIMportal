// engines/beesim/engine.js

const initialAgents = [
  { id: "bee-1", role: "Scout", energy: 0.82, focus: "Pattern" },
  { id: "bee-2", role: "Analyst", energy: 0.67, focus: "Memory" },
  { id: "bee-3", role: "Coordinator", energy: 0.91, focus: "Identity" }
];

let simState = {
  tick: 0,
  agents: initialAgents
};

export function getBeeSimState() {
  return simState;
}

export function stepBeeSim() {
  simState = {
    ...simState,
    tick: simState.tick + 1,
    agents: simState.agents.map((agent) => {
      const delta = (Math.random() - 0.5) * 0.08;
      let energy = Math.max(0, Math.min(1, agent.energy + delta));
      return { ...agent, energy };
    })
  };
  return simState;
}

export function resetBeeSim() {
  simState = {
    tick: 0,
    agents: initialAgents
  };
  return simState;
}

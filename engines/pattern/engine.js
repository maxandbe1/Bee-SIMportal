// engines/pattern/engine.js

let patternState = {
  lanes: [
    { id: "lane-1", label: "Primary", load: 0.3 },
    { id: "lane-2", label: "Analysis", load: 0.5 },
    { id: "lane-3", label: "Exploration", load: 0.2 }
  ],
  mode: "swarm",
  coherence: 0.86
};

export function getPatternState() {
  return patternState;
}

export function updateLaneLoad(id, load) {
  patternState = {
    ...patternState,
    lanes: patternState.lanes.map((lane) =>
      lane.id === id ? { ...lane, load } : lane
    )
  };
  return patternState;
}

export function setMode(mode) {
  patternState = { ...patternState, mode };
  return patternState;
}

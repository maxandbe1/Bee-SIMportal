// engines/sovereignty/engine.js

let sovereigntyState = {
  mode: "Unified", // Unified | Distributed | Locked
  authority: 0.92, // 0–1
  constraints: {
    externalInfluence: 0.1,
    internalNoise: 0.18,
    drift: 0.05
  }
};

export function getSovereigntyState() {
  return sovereigntyState;
}

export function setMode(mode) {
  sovereigntyState = { ...sovereigntyState, mode };
  return sovereigntyState;
}

export function adjustConstraint(key, value) {
  sovereigntyState = {
    ...sovereigntyState,
    constraints: {
      ...sovereigntyState.constraints,
      [key]: Math.max(0, Math.min(1, value))
    }
  };
  return sovereigntyState;
}

export function setAuthority(value) {
  sovereigntyState = {
    ...sovereigntyState,
    authority: Math.max(0, Math.min(1, value))
  };
  return sovereigntyState;
}

// modules/sovereignty/index.js

import {
  getSovereigntyState,
  setMode,
  adjustConstraint,
  setAuthority
} from "../../engines/sovereignty/engine.js";

export function loadSovereigntyModule(runtime) {
  const api = {
    getState: getSovereigntyState,
    setMode,
    adjustConstraint,
    setAuthority
  };

  runtime.modules.sovereignty = api;
  runtime.registry.sovereignty = {
    key: "sovereignty",
    label: "Sovereignty"
  };

  return { api };
}

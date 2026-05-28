// modules/pattern/index.js

import {
  getPatternState,
  updateLaneLoad,
  setMode
} from "../../engines/pattern/engine.js";

export function loadPatternModule(runtime) {
  const api = {
    getState: getPatternState,
    updateLaneLoad,
    setMode
  };

  runtime.modules.pattern = api;
  runtime.registry.pattern = { key: "pattern", label: "Pattern" };

  return { api };
}

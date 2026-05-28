// modules/beesim/index.js

import {
  getBeeSimState,
  stepBeeSim,
  resetBeeSim
} from "../../engines/beesim/engine.js";

export function loadBeeSimModule(runtime) {
  const api = {
    getState: getBeeSimState,
    step: stepBeeSim,
    reset: resetBeeSim
  };

  runtime.modules.beesim = api;
  runtime.registry.beesim = { key: "beesim", label: "Bee SIM" };

  return { api };
}

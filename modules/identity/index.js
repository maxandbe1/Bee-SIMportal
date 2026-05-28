import { getIdentityState, updateIdentity } from "../../engines/identity/engine.js";

export function loadIdentityModule(runtime) {
  const api = {
    getState: getIdentityState,
    update: updateIdentity
  };

  runtime.modules.identity = api;
  runtime.registry.identity = { key: "identity", label: "Identity" };

  return { api };
}

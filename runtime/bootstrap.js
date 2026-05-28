// runtime/bootstrap.js

import { registerModule } from "./moduleRegistry.js";
import { loadIdentityModule } from "../modules/identity/index.js";
import { loadMemoryModule } from "../modules/memory/index.js";

export function bootstrapPortal() {
  const runtime = {
    modules: {},
    registry: {}
  };

  // load modules
  const identity = loadIdentityModule(runtime);
  const memory = loadMemoryModule(runtime);

  registerModule("identity", {
    key: "identity",
    label: "Identity",
    api: identity.api
  });

  registerModule("memory", {
    key: "memory",
    label: "Memory",
    api: memory.api
  });

  // expose globally
  window.Portal = runtime;

  return runtime;
}

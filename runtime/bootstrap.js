// runtime/bootstrap.js

import { registerModule } from "./moduleRegistry.js";
import { loadIdentityModule } from "../modules/identity/index.js";
import { loadMemoryModule } from "../modules/memory/index.js";
import { loadPatternModule } from "../modules/pattern/index.js";
import { loadBeeSimModule } from "../modules/beesim/index.js";
import { loadSovereigntyModule } from "../modules/sovereignty/index.js";
import { loadSovereigntyModule } from "../modules/sovereignty/index.js";

export function bootstrapPortal() {
  const runtime = {
    modules: {},
    registry: {},
    premium: {
      accent: "#FFD54F",
      surface: "#111827",
      glow: "0 0 20px rgba(255,213,79,0.25)"
    }
  };

  const identity = loadIdentityModule(runtime);
  const memory = loadMemoryModule(runtime);
  const pattern = loadPatternModule(runtime);
  const beesim = loadBeeSimModule(runtime);
  const sovereignty = loadSovereigntyModule(runtime);

  registerModule("identity", { key: "identity", api: identity.api });
  registerModule("memory", { key: "memory", api: memory.api });
  registerModule("pattern", { key: "pattern", api: pattern.api });
  registerModule("beesim", { key: "beesim", api: beesim.api });
  registerModule("sovereignty", { key: "sovereignty", api: sovereignty.api });

  window.Portal = runtime;
  return runtime;
}

import React from "react";
import { IdentityView } from "../modules/identity/IdentityView.jsx";
import { MemoryView } from "../modules/memory/MemoryView.jsx";

export function Viewport({ current }) {
  return (
    <main className="portal-viewport">
      {current === "identity" && <IdentityView />}
      {current === "memory" && <MemoryView />}
      {current === "beesim" && <BeeSimView />}

    </main>
  );
}

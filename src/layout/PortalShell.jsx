import React, { useState } from "react";
import { NavRail } from "./NavRail.jsx";
import { Viewport } from "./Viewport.jsx";

export function PortalShell() {
  const [currentModule, setCurrentModule] = useState("identity");

  return (
    <div className="portal-shell">
      <NavRail current={currentModule} onChange={setCurrentModule} />
      <div className="portal-main">
        <header className="portal-topbar">Portal OS</header>
        <Viewport current={currentModule} />
        <footer className="portal-statusbar">Module: {currentModule}</footer>
      </div>
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { PortalShell } from "./layout/PortalShell.jsx";
import { bootstrapPortal } from "../runtime/bootstrap.js";
import "./styles.css";

bootstrapPortal();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortalShell />
  </React.StrictMode>
);

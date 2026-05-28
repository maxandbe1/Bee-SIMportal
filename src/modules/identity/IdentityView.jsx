import React, { useEffect, useState } from "react";

export function IdentityView() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const identity = window.Portal.modules.identity;
    setState(identity.getState());
  }, []);

  if (!state) return null;

  return (
    <div className="module-root">
      <h1>Identity</h1>
      <p>Name: {state.name}</p>
      <p>Version: {state.version}</p>
      <p>Lanes: {state.lanes}</p>
    </div>
  );
}

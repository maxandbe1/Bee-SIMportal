import React, { useEffect, useState } from "react";

export function MemoryView() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const memory = window.Portal.modules.memory;
    setEntries(memory.getState());
  }, []);

  const add = () => {
    const memory = window.Portal.modules.memory;
    const text = window.prompt("Add memory entry:");
    if (!text) return;
    memory.add(text);
    setEntries(memory.getState());
  };

  return (
    <div className="module-root">
      <div className="module-header">
        <h1>Memory</h1>
        <button onClick={add}>Add entry</button>
      </div>
      <div className="memory-list">
        {entries.map((e) => (
          <div key={e.id} className="memory-item">
            <div className="memory-meta">
              {new Date(e.timestamp).toLocaleString()}
            </div>
            <div>{e.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

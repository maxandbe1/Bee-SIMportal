let memoryState = [
  {
    id: "seed-1",
    timestamp: Date.now(),
    text: "Memory engine initialized."
  }
];

export function getMemoryState() {
  return memoryState;
}

export function addMemoryEntry(text) {
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    timestamp: Date.now(),
    text
  };
  memoryState = [entry, ...memoryState];
  return entry;
}

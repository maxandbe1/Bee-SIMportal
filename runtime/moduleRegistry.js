// runtime/moduleRegistry.js

export const moduleRegistry = {};

export function registerModule(key, entry) {
  moduleRegistry[key] = entry;
}

export function getModule(key) {
  return moduleRegistry[key];
}

"use client";
import { useSyncExternalStore } from "react";
const eventName = "visitburundi-storage";
export function readStorage(key: string): string {
  try {
    return localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}
export function writeStorage(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    window.dispatchEvent(new Event(eventName));
    return true;
  } catch {
    return false;
  }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(eventName, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(eventName, callback);
  };
}
export function useStoredValue(key: string, serverValue = "") {
  return useSyncExternalStore(
    subscribe,
    () => readStorage(key),
    () => serverValue,
  );
}

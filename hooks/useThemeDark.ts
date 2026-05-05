"use client";

import { useCallback, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, applyTheme } from "@/lib/theme";

function subscribe(onStoreChange: () => void) {
  const root = document.documentElement;
  const obs = new MutationObserver(onStoreChange);
  obs.observe(root, { attributes: true, attributeFilter: ["class"] });
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    obs.disconnect();
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export function useThemeDark() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    applyTheme(!document.documentElement.classList.contains("dark"));
  }, []);

  return { isDark, toggle };
}

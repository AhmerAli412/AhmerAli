/** Persisted key — keep in sync with inline script in `app/layout.tsx`. */
export const THEME_STORAGE_KEY = "selected-theme";

export function applyTheme(dark: boolean): void {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
}

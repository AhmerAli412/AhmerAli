"use client";

import { useEffect } from "react";

export function useScrollUp() {
  useEffect(() => {
    function scrollUpfunc() {
      const scrollUp = document.getElementById("scroll-up");
      if (!scrollUp) return;
      if (window.scrollY >= 560) scrollUp.setAttribute("data-visible", "true");
      else scrollUp.setAttribute("data-visible", "false");
    }
    window.addEventListener("scroll", scrollUpfunc);
    scrollUpfunc();
    return () => window.removeEventListener("scroll", scrollUpfunc);
  }, []);
}

"use client";

import { useEffect } from "react";

export function useHeaderScroll() {
  useEffect(() => {
    function scrollHeader() {
      const nav = document.getElementById("header");
      if (!nav) return;
      if (window.scrollY >= 48) nav.setAttribute("data-scrolled", "true");
      else nav.removeAttribute("data-scrolled");
    }
    window.addEventListener("scroll", scrollHeader);
    scrollHeader();
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);
}

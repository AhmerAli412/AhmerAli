"use client";

import { useEffect } from "react";

export function useSectionScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const el = current as HTMLElement;
        const sectionHeight = el.offsetHeight;
        const sectionTop = el.offsetTop - 120;
        const sectionId = el.getAttribute("id");
        if (!sectionId) return;
        const links = document.querySelectorAll(
          `header a.nav-link[href*="${sectionId}"]`
        );
        links.forEach((link) => {
          if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
          ) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        });
      });
    }

    window.addEventListener("scroll", scrollActive);
    scrollActive();
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
}

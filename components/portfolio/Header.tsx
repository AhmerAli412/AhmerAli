"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import { cn } from "@/lib/cn";
import { useThemeDark } from "@/hooks/useThemeDark";

const links = [
  { href: "#home", label: "Home", icon: "uil-estate" },
  { href: "#about", label: "About", icon: "uil-user" },
  { href: "#skills", label: "Skills", icon: "uil-file-alt" },
  {
    href: "#qualification",
    label: "Qualifications",
    icon: "uil-graduation-cap",
  },
  { href: "#projects", label: "Projects", icon: "uil-scenery" },
  { href: "#contact", label: "Contact", icon: "uil-message" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark: themeDark, toggle: toggleTheme } = useThemeDark();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      id="header"
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-500",
        "border-transparent bg-zinc-50/75 backdrop-blur-xl dark:bg-zinc-950/75",
        "data-[scrolled=true]:border-zinc-200/80 data-[scrolled=true]:bg-zinc-50/90 data-[scrolled=true]:shadow-xl data-[scrolled=true]:shadow-blue-900/[0.06]",
        "dark:data-[scrolled=true]:border-white/10 dark:data-[scrolled=true]:bg-zinc-950/90 dark:data-[scrolled=true]:shadow-black/50"
      )}
    >
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="group relative text-lg font-bold tracking-tight"
          onClick={closeMenu}
        >
          <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
            Ahmer Ali
          </span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full" />
        </a>

        <ul
          className="nav_menu hidden items-center gap-1 lg:flex"
          id="nav-menu-desktop"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "nav-link flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 transition-all duration-300 hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                )}
                onClick={closeMenu}
              >
                <i className={`uil ${l.icon} text-base`} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 text-lg text-blue-700 shadow-sm transition hover:scale-105 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-amber-300 dark:hover:border-amber-400/40"
            aria-label="Toggle theme"
          >
            <i className={`uil ${themeDark ? "uil-sun" : "uil-moon"}`} />
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 text-zinc-800 shadow-sm lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i className={`uil text-xl ${menuOpen ? "uil-times" : "uil-apps"}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-label="Close menu overlay"
            />
            <motion.div
              id="nav-menu"
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.8 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="nav_menu fixed right-0 top-0 z-50 flex h-full w-[min(100vw-3rem,20rem)] flex-col border-l border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6 pt-20 shadow-2xl lg:hidden"
            >
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      className="nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                      onClick={closeMenu}
                    >
                      <i className={`uil ${l.icon} text-lg text-blue-400`} />
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto border-t border-white/10 pt-6 text-xs text-zinc-500">
                Crafted with Next.js & Tailwind
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

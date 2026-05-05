"use client";

import { motion } from "framer-motion";

export default function ScrollUp() {
  return (
    <motion.a
      href="#home"
      id="scroll-up"
      initial={false}
      className="fixed bottom-8 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 text-lg text-blue-700 shadow-xl shadow-blue-900/20 backdrop-blur-md transition-all duration-300 data-[visible=false]:pointer-events-none data-[visible=false]:translate-y-4 data-[visible=false]:opacity-0 data-[visible=true]:opacity-100 dark:border-white/15 dark:bg-zinc-900/90 dark:text-blue-400 dark:shadow-black/50"
      data-visible="false"
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Back to top"
    >
      <i className="uil uil-arrow-up" />
    </motion.a>
  );
}

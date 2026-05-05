/** Shared Framer Motion presets — scroll-triggered, noticeable but professional */

export const viewAnim = {
  initial: { opacity: 1, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35, margin: "-80px 0px -80px 0px" },
  transition: {
    type: "spring" as const,
    stiffness: 320,
    damping: 32,
    mass: 0.8,
  },
};

export const viewAnimFade = {
  initial: { opacity: 1, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  viewport: { once: true, amount: 0.3 },
};

export const staggerItem = {
  initial: { opacity: 1, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: {
    type: "spring" as const,
    stiffness: 380,
    damping: 30,
  },
};

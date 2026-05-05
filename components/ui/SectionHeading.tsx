"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "-100px 0px" }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 28,
      }}
      className={cn(
        "mx-auto mb-20 max-w-3xl text-center md:mb-28 lg:mb-32",
        className
      )}
    >
      <span className="mb-4 inline-block rounded-full border border-blue-200/90 bg-blue-50/90 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-800 shadow-sm dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-200">
        {eyebrow}
      </span>
      <h2 className="mt-1 text-balance text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-8 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500"
      />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";

const socials = [
  {
    href: "https://www.linkedin.com/in/ahmerali412/",
    icon: "uil-linkedin-alt",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AhmerAli412",
    icon: "uil-github-alt",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/thisisAhmerAli/",
    icon: "uil-twitter-alt",
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/Ahmer_.ali/",
    icon: "uil-instagram",
    label: "Instagram",
  },
];

const spring = { type: "spring" as const, stiffness: 380, damping: 32 };

/**
 * Never start at opacity:0 — that caused the hero to “disappear” if motion
 * didn’t finish (hydration / reduced motion / chunk errors). We only slide + scale.
 */
const lineParents = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const line = {
  initial: { opacity: 1, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

export default function HomeSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ["a Web", "an Android", "a Blockchain"],
      smartBackspace: true,
      startDelay: 600,
      typeSpeed: 100,
      backDelay: 900,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-tilt-hero]");
    VanillaTilt.init(nodes as unknown as HTMLElement[], {
      max: 8,
      speed: 450,
      glare: true,
      "max-glare": 0.12,
    });
    return () => {
      nodes.forEach((node) => {
        (node as HTMLElement & { vanillaTilt?: { destroy: () => void } })
          .vanillaTilt?.destroy();
      });
    };
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-x-clip py-20 sm:py-24 md:min-h-[calc(100dvh-4rem)] md:py-32 lg:py-40"
      id="home"
    >
      <div className="container relative z-[1] mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={lineParents}
          initial="initial"
          animate="animate"
          className="grid items-center gap-16 lg:grid-cols-2 lg:items-center lg:gap-x-24"
        >
          {/* One motion block for left column so staggerChildren works */}
          <motion.div
            variants={line}
            className="order-1 flex min-w-0 flex-col gap-10 lg:order-1"
          >
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={spring}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200/90 bg-white text-lg text-blue-700 shadow-sm shadow-zinc-900/5 ring-1 ring-zinc-900/5 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-white/10 dark:bg-zinc-900/80 dark:text-blue-400 dark:ring-white/10 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
                >
                  <i className={`uil ${s.icon}`} />
                </motion.a>
              ))}
            </div>

            <div className="space-y-6 sm:space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800 shadow-sm dark:border-blue-500/25 dark:bg-blue-950/60 dark:text-blue-200">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                </span>
                Open to roles & freelance
              </p>

              <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-[3.5rem] dark:text-white">
                Hi — I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">
                  Ahmer
                </span>
              </h1>

              <h2 className="max-w-xl text-xl font-normal leading-snug text-zinc-600 sm:text-2xl dark:text-zinc-400">
                I build products as{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  <span className="type inline-block min-h-[1.35em] text-blue-700 dark:text-blue-400">
                    <span ref={typedRef} />
                  </span>{" "}
                  Developer
                </span>
              </h2>

              <p className="max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Shipping fast, accessible interfaces with React, Next.js, and
                modern tooling — without sacrificing polish.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 ring-1 ring-blue-500/30 transition hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30 dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  Start a conversation
                  <i className="uil uil-message text-lg" />
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 underline-offset-4 hover:text-blue-700 hover:underline dark:text-zinc-300 dark:hover:text-blue-400"
                >
                  View work
                  <i className="uil uil-arrow-right" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={line}
            className="relative order-2 flex justify-center lg:order-2 lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-[min(100%,420px)]"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-blue-400/25 via-indigo-400/15 to-transparent blur-3xl dark:from-blue-600/20" />
              <div
                data-tilt-hero
                className="relative rounded-[2rem] border border-white/60 bg-white/70 p-3 shadow-2xl shadow-blue-900/10 ring-1 ring-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-black/40"
              >
                <div className="relative overflow-hidden rounded-[1.65rem] ring-1 ring-zinc-900/10 dark:ring-white/10">
                  <Image
                    src="/assets/img/icon.png"
                    alt="Ahmer Ali"
                    width={420}
                    height={420}
                    className="aspect-square h-auto w-full max-h-[420px] object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/25 via-transparent to-transparent dark:from-zinc-950/60" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 1, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, ...spring }}
                className="absolute -right-2 top-10 hidden rounded-2xl border border-white/40 bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg md:block lg:-right-6"
              >
                Full-stack
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65, ...spring }}
                className="absolute -bottom-3 -left-2 rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-2 text-xs font-medium text-zinc-800 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/95 dark:text-zinc-100 lg:-left-6"
              >
                Next.js · TypeScript
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 1, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mx-auto mt-20 flex w-fit flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-blue-700 dark:text-zinc-500 dark:hover:text-blue-400 md:mt-28"
        >
          <span className="flex h-11 w-7 justify-center rounded-full border-2 border-zinc-300 dark:border-zinc-600">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2 block h-2 w-1 rounded-full bg-blue-600 dark:bg-blue-400"
            />
          </span>
          Scroll
        </motion.a>
      </div>
    </section>
  );
}

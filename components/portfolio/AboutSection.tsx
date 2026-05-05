"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";

import { PointerGlow } from "@/components/ui/PointerGlow";
import SectionHeading from "@/components/ui/SectionHeading";
import { viewAnim } from "@/lib/motion";
import { cn } from "@/lib/cn";

const stats = [
  { label: "Years shipping", value: "2+", suffix: "", emoji: "⚡" },
  { label: "Focus", value: "Full-stack", suffix: "web", emoji: "🎯" },
  { label: "Stack vibe", value: "React", suffix: "· Next", emoji: "✨" },
] as const;

const careAbout = [
  "Clean UI",
  "Fast sites",
  "A11y",
  "TypeScript",
  "Open source",
  "Real users",
] as const;

const statSpring = { type: "spring" as const, stiffness: 400, damping: 22 };

function StatCard({
  item,
  i,
}: {
  item: (typeof stats)[number];
  i: number;
}) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const emojiX = useSpring(mx, { stiffness: 280, damping: 24 });
  const emojiY = useSpring(my, { stiffness: 280, damping: 24 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 22);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 22);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 1, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ ...statSpring, delay: i * 0.08 }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 500, damping: 20 },
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative cursor-default overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/80 p-5 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 dark:border-white/10 dark:from-zinc-900/90 dark:to-zinc-950/80 dark:shadow-none dark:ring-white/5"
    >
      <motion.div
        className="pointer-events-none absolute -right-4 -top-4 text-4xl opacity-20 transition group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-40"
        style={{ x: emojiX, y: emojiY }}
      >
        {item.emoji}
      </motion.div>
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {item.label}
      </p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {item.value}
        {item.suffix ? (
          <span className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
            {" "}
            {item.suffix}
          </span>
        ) : null}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const [pinnedVibes, setPinnedVibes] = useState<Set<string>>(() => new Set());

  function toggleVibe(tag: string) {
    setPinnedVibes((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  useEffect(() => {
    const nodes = document.querySelectorAll(".js-tilt-about");
    VanillaTilt.init(nodes as unknown as HTMLElement[], {
      max: 12,
      speed: 500,
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
    <section className="relative py-28 md:py-40 lg:py-44" id="about">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-6">
          {/* Image — tilt + animated ring */}
          <motion.div
            {...viewAnim}
            className="relative lg:col-span-5"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-blue-500/30 via-violet-500/20 to-amber-400/20 opacity-60 blur-2xl dark:opacity-40" />
            <div
              className={cn(
                "js-tilt-about group relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white/60 shadow-2xl shadow-blue-900/10 dark:border-white/10 dark:bg-zinc-900/50"
              )}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <Image
                src="https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg"
                alt="Building products"
                width={520}
                height={420}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent p-6 text-white">
                <p className="text-sm font-medium text-white/90">
                  Design · Engineering · Product
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Hover the card — it knows you&apos;re there
                </p>
              </div>
            </div>
          </motion.div>

          {/* Copy + stats bento */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <motion.div {...viewAnim} className="relative">
              <PointerGlow
                className="rounded-2xl border border-zinc-200/80 bg-white/80 shadow-xl shadow-zinc-900/5 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/70"
                alwaysOn
                strength={0.1}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/20 to-violet-500/20 blur-2xl" />
                <p className="relative p-6 text-lg leading-[1.8] text-zinc-600 md:p-8 md:text-xl dark:text-zinc-300">
                Hey there{" "}
                <motion.span
                  className="inline-block cursor-default"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  👋
                </motion.span>{" "}
                I&apos;m Ahmer — a software engineering graduate who geeks out
                on{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  software, UI, and product
                </span>
                . I&apos;m growing as a{" "}
                <span className="rounded-md bg-blue-100/80 px-1.5 py-0.5 font-semibold text-blue-800 dark:bg-blue-950/80 dark:text-blue-200">
                  full-stack developer
                </span>{" "}
                with 2+ years of freelance work. I share what I learn through
                talks and writing.
                </p>
              </PointerGlow>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s, i) => (
                <StatCard key={s.label} item={s} i={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="rounded-2xl border border-dashed border-zinc-300/80 bg-zinc-50/50 p-5 dark:border-white/15 dark:bg-zinc-950/50"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Vibe check
              </p>
              <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-500">
                Tap tags you vibe with — they stick around
              </p>
              <div className="flex flex-wrap gap-2">
                {careAbout.map((tag, i) => {
                  const pinned = pinnedVibes.has(tag);
                  return (
                    <motion.button
                      key={tag}
                      type="button"
                      layout
                      initial={{ opacity: 1, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.04,
                        type: "spring",
                        stiffness: 400,
                        damping: 22,
                        layout: { type: "spring", stiffness: 500, damping: 30 },
                      }}
                      whileHover={{
                        scale: 1.06,
                        rotate: i % 2 === 0 ? -2 : 2,
                      }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => toggleVibe(tag)}
                      title={pinned ? "Unpin" : "Pin this vibe"}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors",
                        pinned
                          ? "border-blue-400/50 bg-gradient-to-br from-blue-500/15 to-indigo-500/10 text-blue-900 ring-2 ring-blue-500/30 dark:from-blue-500/20 dark:to-indigo-500/10 dark:text-blue-100"
                          : "border-zinc-200/90 bg-white text-zinc-700 dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-200"
                      )}
                    >
                      {pinned ? "✓ " : ""}
                      {tag}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            <motion.a
              href="/Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-zinc-900/25 transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              Grab my resume
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <i className="uil uil-file-download-alt text-lg" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

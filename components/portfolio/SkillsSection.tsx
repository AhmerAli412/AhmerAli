"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { type ReactNode, useCallback, useEffect, useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "lang" as const, label: "Languages", short: "Lang", emoji: "💬" },
  { id: "lib" as const, label: "Frameworks", short: "FW", emoji: "⚙️" },
  { id: "tools" as const, label: "Tools", short: "Kit", emoji: "🛠️" },
];

type TabId = (typeof tabs)[number]["id"];

const TAB_ORDER: TabId[] = ["lang", "lib", "tools"];

const SKILL_HINTS: Record<string, string> = {
  Java: "JVM classics — rock-solid for backend and tooling.",
  Python: "Scripts, APIs, and the occasional late-night automation.",
  JavaScript: "The language of the web — async brain included.",
  TypeScript: "Types that save you from yourself at 2am.",
  SASS: "Nesting styles without losing your mind.",
  React: "Components, hooks, and happy re-renders.",
  "Next.js": "Routing, RSC, deploy — the full lane.",
  "Tailwind CSS": "Utility-first — ship UI at terminal speed.",
  "Node.js": "JavaScript on the server — same language, new playground.",
  MongoDB: "Flexible docs when your schema is still figuring itself out.",
  Git: "Time travel for code — branches, merges, no regrets.",
  GitHub: "Where reviews happen and green squares feel good.",
  Figma: "Design handoff that designers actually enjoy.",
  Vercel: "Push to prod before your coffee cools.",
  AWS: "Cloud building blocks when scale gets real.",
};

const SKILL_GROUPS: Record<
  TabId,
  { name: string; delay: number; icon: ReactNode }[]
> = {
  lang: [
    { name: "Java", delay: 0, icon: <i className="fab fa-java" /> },
    { name: "Python", delay: 0.04, icon: <i className="fab fa-python" /> },
    { name: "JavaScript", delay: 0.08, icon: <i className="fab fa-js-square" /> },
    {
      name: "TypeScript",
      delay: 0.12,
      icon: (
        <Image
          src="/assets/img/ts-logo.svg"
          alt=""
          width={26}
          height={26}
          className="h-6 w-6"
        />
      ),
    },
    { name: "SASS", delay: 0.16, icon: <i className="fab fa-sass" /> },
  ],
  lib: [
    { name: "React", delay: 0, icon: <i className="fab fa-react" /> },
    {
      name: "Next.js",
      delay: 0.04,
      icon: (
        <Image
          src="/assets/img/next-js.svg"
          alt=""
          width={26}
          height={26}
          className="h-6 w-6 invert dark:invert-0"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      delay: 0.08,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 54 33"
          className="h-7 w-7 text-white"
          aria-hidden
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    { name: "Node.js", delay: 0.12, icon: <i className="fab fa-node-js" /> },
    {
      name: "MongoDB",
      delay: 0.16,
      icon: (
        <Image
          src="/assets/img/MongoDB.svg"
          alt=""
          width={26}
          height={26}
          className="h-6 w-6"
        />
      ),
    },
  ],
  tools: [
    { name: "Git", delay: 0, icon: <i className="fab fa-git-alt" /> },
    { name: "GitHub", delay: 0.04, icon: <i className="fab fa-github" /> },
    { name: "Figma", delay: 0.08, icon: <i className="fab fa-figma" /> },
    {
      name: "Vercel",
      delay: 0.12,
      icon: (
        <Image
          src="/assets/img/vercel.svg"
          alt=""
          width={22}
          height={22}
          className="h-5 w-5 dark:invert"
        />
      ),
    },
    {
      name: "AWS",
      delay: 0.16,
      icon: (
        <Image
          src="/assets/img/aws.svg"
          alt=""
          width={26}
          height={26}
          className="h-6 w-6"
        />
      ),
    },
  ],
};

const ROTATION_PILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node",
  "MongoDB",
  "Git",
  "Figma",
  "Vercel",
  "AWS",
];

function SkillTile({
  name,
  children,
  delay = 0,
  isSelected,
  onPick,
}: {
  name: string;
  children: ReactNode;
  delay?: number;
  isSelected: boolean;
  onPick: (name: string) => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 1, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 26,
        delay,
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onPick(name)}
      aria-pressed={isSelected}
      className={cn(
        "group relative w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950",
        isSelected && "z-[1]"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-md transition-shadow dark:border-white/10 dark:bg-zinc-900/80",
          "hover:shadow-lg hover:shadow-blue-500/10 hover:ring-2 hover:ring-blue-400/25 dark:hover:shadow-blue-900/20",
          isSelected &&
            "ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/10 dark:shadow-blue-900/40"
        )}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-2xl text-white shadow-lg">
            {children}
          </span>
          <div className="min-w-0">
            <p className="font-bold text-zinc-900 dark:text-white">{name}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {isSelected ? "Details below" : "Click for a line"}
            </p>
          </div>
          <span className="ml-auto text-xl text-zinc-400 opacity-0 transition group-hover:opacity-100 dark:text-zinc-500">
            →
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState<TabId>("lang");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    setActiveSkill(null);
  }, [active]);

  const pickSkill = useCallback((name: string) => {
    setActiveSkill((s) => (s === name ? null : name));
  }, []);

  const focusTab = useCallback((id: TabId) => {
    queueMicrotask(() => {
      document.getElementById(`skills-tab-${id}`)?.focus();
    });
  }, []);

  const handleTabKey = useCallback(
    (e: React.KeyboardEvent, tabId: TabId) => {
      const i = TAB_ORDER.indexOf(tabId);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = TAB_ORDER[(i + 1) % TAB_ORDER.length];
        setActive(next);
        focusTab(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const next = TAB_ORDER[(i - 1 + TAB_ORDER.length) % TAB_ORDER.length];
        setActive(next);
        focusTab(next);
      } else if (e.key === "Home") {
        e.preventDefault();
        const next = TAB_ORDER[0];
        setActive(next);
        focusTab(next);
      } else if (e.key === "End") {
        e.preventDefault();
        const next = TAB_ORDER[TAB_ORDER.length - 1];
        setActive(next);
        focusTab(next);
      }
    },
    [focusTab]
  );

  return (
    <section className="relative py-28 md:py-40 lg:py-44" id="skills">
      <div className="container mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Stack" title="Skills & tools" />

        <div className="mb-10 flex flex-col items-stretch gap-4 sm:mb-12">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Pick a category
          </p>
          <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-zinc-100/90 p-2 dark:border-white/10 dark:bg-zinc-900/70">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="relative flex flex-wrap justify-center gap-1"
            >
              {tabs.map((tab) => {
                const isOn = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`skills-tab-${tab.id}`}
                    aria-selected={isOn}
                    aria-controls={`skills-panel-${tab.id}`}
                    onClick={() => setActive(tab.id)}
                    onKeyDown={(e) => handleTabKey(e, tab.id)}
                    className={cn(
                      "relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:flex-none sm:px-6",
                      isOn
                        ? "text-white"
                        : "text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/80 dark:hover:text-white"
                    )}
                  >
                    {isOn && (
                      <motion.span
                        layoutId="skills-tab-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-900/25 dark:shadow-blue-950/50"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="hidden sm:inline">{tab.emoji}</span>
                      <span className="sm:hidden">{tab.short}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`skills-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${active}`}
            initial={{ opacity: 1, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -36 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {SKILL_GROUPS[active].map((item) => (
              <SkillTile
                key={item.name}
                name={item.name}
                delay={item.delay}
                isSelected={activeSkill === item.name}
                onPick={pickSkill}
              >
                {item.icon}
              </SkillTile>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {activeSkill ? (
            <motion.p
              key={activeSkill}
              role="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="mx-auto mt-8 max-w-lg text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              <span className="font-semibold text-zinc-900 dark:text-white">
                {activeSkill}
              </span>
              {" — "}
              {SKILL_HINTS[activeSkill] ??
                "Core toolkit — tap another tile to compare."}
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mx-auto mt-8 max-w-lg text-center text-xs text-zinc-500 dark:text-zinc-500"
            >
              Tip: click a skill tile to see a one-line story — click again to
              clear.
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-violet-500/5 p-6 dark:border-white/10"
        >
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Always in rotation
          </p>
          <p className="mb-4 text-center text-xs text-zinc-500 dark:text-zinc-500">
            Tap a pill for a tiny wiggle
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {ROTATION_PILLS.map((w, i) => (
              <motion.button
                key={w}
                type="button"
                initial={{ opacity: 1, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.03,
                  type: "spring",
                  stiffness: 400,
                  damping: 22,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.08,
                  rotate: i % 2 === 0 ? -3 : 3,
                }}
                whileTap={{
                  scale: 0.94,
                  rotate: i % 2 === 0 ? [0, -14, 10, -6, 0] : [0, 14, -10, 6, 0],
                }}
                className="cursor-pointer rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-800/90 dark:text-zinc-200"
              >
                {w}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

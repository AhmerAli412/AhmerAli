"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import { viewAnim } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Tab = "education" | "work";

const TAB_ORDER: Tab[] = ["education", "work"];

const education = [
  {
    title: "BS Software Engineering",
    org: "Comsats University, Lahore",
    href: "https://lahore.comsats.edu.pk/",
    years: "2020 – 2024",
    blurb:
      "Coursework across software design, data structures, databases, and project-based builds — with a strong tilt toward web and product.",
    tags: ["Undergraduate", "SE", "Projects"],
  },
  {
    title: "Senior Secondary (Pre-Engineering)",
    org: "Punjab Group of Colleges",
    href: "https://pgc.edu/",
    years: "2017 – 2019",
    blurb: "Foundation in maths, physics & chemistry before diving fully into computing at university.",
    tags: ["FSc", "STEM"],
  },
  {
    title: "Secondary School",
    org: "Allied School",
    href: "https://www.asas.edu.pk/",
    years: "2008 – 2017",
    blurb: "Early spark for problem-solving and science — the runway into engineering.",
    tags: ["Matric", "Foundation"],
  },
] as const;

const work = [
  {
    title: "Full-stack Developer",
    org: "Axon Technologies",
    href: "https://prmsnls.xyz/",
    years: "Jan 2024 – Present",
    blurb:
      "Shipping production web apps with the team — from UI polish to APIs and deployment.",
    highlights: [
      "Next.js & React product surfaces with accessible, responsive layouts",
      "Collaborating with design on flows, components, and real-user feedback",
      "APIs, integrations, and keeping releases smooth on Vercel-style workflows",
    ],
    tags: ["Full-stack", "Next.js", "TypeScript", "Product"],
  },
  {
    title: "Freelance Developer",
    org: "Remote · various clients",
    href: "#contact",
    years: "2020 – Present",
    blurb:
      "Independent builds — landing pages, dashboards, and small products for people who needed clean, fast web.",
    highlights: [
      "End-to-end delivery: scope, build, iterate with clients",
      "React ecosystems, REST backends, and pragmatic UI decisions",
      "Talks & writing — sharing what I learn along the way",
    ],
    tags: ["Freelance", "React", "Delivery"],
  },
] as const;

function TimelineCard({
  item,
  i,
  variant,
}: {
  item: {
    title: string;
    org: string;
    href: string;
    years: string;
    blurb: string;
    tags: readonly string[];
    highlights?: readonly string[];
  };
  i: number;
  variant: "edu" | "work";
}) {
  const isWork = variant === "work";
  const Icon = isWork ? "uil-briefcase-alt" : "uil-graduation-cap";

  return (
    <motion.article
      initial={{ opacity: 1, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 28,
        delay: i * 0.06,
      }}
      className="w-full max-w-xl"
    >
      <div className="rounded-3xl border border-zinc-200/80 bg-white/90 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:bg-zinc-900/75">
        <div className="relative p-6 sm:p-7">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-3">
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-white shadow-lg",
                  isWork
                    ? "bg-gradient-to-br from-indigo-600 to-blue-700"
                    : "bg-gradient-to-br from-blue-600 to-indigo-700"
                )}
                aria-hidden
              >
                <i className={`uil ${Icon}`} />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug text-zinc-900 dark:text-white sm:text-xl">
                  {item.title}
                </h3>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition hover:text-indigo-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {item.org}
                  {item.href.startsWith("http") ? (
                    <i className="uil uil-arrow-up-right text-xs opacity-70" />
                  ) : null}
                </a>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:bg-zinc-800/80 dark:text-zinc-300">
              <i className="uil uil-calendar-alt text-sm" aria-hidden />
              {item.years}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {item.blurb}
          </p>

          {"highlights" in item && item.highlights ? (
            <ul className="mt-4 space-y-2.5 border-t border-zinc-200/70 pt-4 dark:border-white/10">
              {item.highlights.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span
                    className={cn(
                      "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                      isWork
                        ? "bg-indigo-500 shadow-sm shadow-indigo-500/50"
                        : "bg-blue-500 shadow-sm shadow-blue-500/50"
                    )}
                  />
                  {line}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-800 dark:border-blue-500/25 dark:bg-blue-950/50 dark:text-blue-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function TimelineDot({ isWork }: { isWork: boolean }) {
  return (
    <div
      className="relative z-10 flex w-8 shrink-0 justify-center md:w-10"
      aria-hidden
    >
      <span
        className={cn(
          "mt-2 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-zinc-50 shadow-lg dark:bg-zinc-950",
          isWork
            ? "border-indigo-400/90 shadow-indigo-500/20"
            : "border-blue-400/90 shadow-blue-500/20"
        )}
      >
        <span
          className={cn(
            "h-3 w-3 rounded-full bg-gradient-to-br",
            isWork
              ? "from-indigo-500 to-blue-600"
              : "from-blue-500 to-indigo-600"
          )}
        />
      </span>
    </div>
  );
}

export default function QualificationSection() {
  const [tab, setTab] = useState<Tab>("education");

  const focusTab = useCallback((t: Tab) => {
    queueMicrotask(() => {
      document.getElementById(`qual-tab-${t}`)?.focus();
    });
  }, []);

  const handleTabKey = useCallback(
    (e: React.KeyboardEvent, current: Tab) => {
      const i = TAB_ORDER.indexOf(current);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = TAB_ORDER[(i + 1) % TAB_ORDER.length];
        setTab(next);
        focusTab(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const next = TAB_ORDER[(i - 1 + TAB_ORDER.length) % TAB_ORDER.length];
        setTab(next);
        focusTab(next);
      }
    },
    [focusTab]
  );

  const items = tab === "education" ? education : work;
  const isWorkTab = tab === "work";

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 lg:py-44"
      id="qualification"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />

      <div className="container relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Journey" title="Education & experience" />

        <motion.p
          {...viewAnim}
          className="mx-auto -mt-12 mb-16 max-w-2xl text-center text-base leading-relaxed text-zinc-600 md:-mt-14 md:mb-20 dark:text-zinc-400"
        >
          A quick tour of where I studied and where I ship — flip the tabs to
          switch between{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            academics
          </span>{" "}
          and{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            professional work
          </span>
          .
        </motion.p>

        {/* Tab bar */}
        <motion.div {...viewAnim} className="mx-auto max-w-2xl">
          <div className="rounded-full border border-zinc-200/80 bg-zinc-100/95 p-1.5 shadow-inner shadow-zinc-900/5 dark:border-white/10 dark:bg-zinc-900/75">
            <div
              className="flex gap-1"
              role="tablist"
              aria-label="Education or work"
            >
              {(
                [
                  ["education", "uil-graduation-cap", "Education"],
                  ["work", "uil-briefcase-alt", "Work"],
                ] as const
              ).map(([key, icon, label]) => {
                const isOn = tab === key;
                return (
                  <button
                    key={key}
                    id={`qual-tab-${key}`}
                    type="button"
                    role="tab"
                    aria-selected={isOn}
                    onClick={() => setTab(key)}
                    onKeyDown={(e) => handleTabKey(e, key)}
                    className={cn(
                      "relative flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold transition sm:text-base",
                      isOn
                        ? "text-white"
                        : "text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-white"
                    )}
                  >
                    {isOn && (
                      <motion.span
                        layoutId="qual-tab"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg shadow-blue-900/25 dark:shadow-blue-950/40"
                        transition={{
                          type: "spring",
                          bounce: 0.18,
                          duration: 0.45,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <i className={`uil ${icon}`} />
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 md:mt-20">
          <div
            className="pointer-events-none absolute left-[1.05rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-indigo-400/40 to-indigo-600/35 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              role="tabpanel"
              id={`qual-panel-${tab}`}
              aria-labelledby={`qual-tab-${tab}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12 md:space-y-0"
            >
              {items.map((item, i) => (
                <div
                  key={`${tab}-${item.title}-${i}`}
                  className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:py-10"
                >
                  {/* Mobile: row with line + card */}
                  <div className="flex gap-4 md:contents">
                    {i % 2 === 0 ? (
                      <>
                        <div className="hidden min-w-0 md:col-start-1 md:flex md:justify-end md:pr-2">
                          <TimelineCard
                            item={item}
                            i={i}
                            variant={isWorkTab ? "work" : "edu"}
                          />
                        </div>
                        <div className="hidden md:col-start-2 md:block">
                          <TimelineDot isWork={isWorkTab} />
                        </div>
                        <div className="hidden md:col-start-3 md:block" />
                        {/* Mobile */}
                        <div className="flex md:hidden">
                          <TimelineDot isWork={isWorkTab} />
                          <div className="min-w-0 flex-1 pb-2">
                            <TimelineCard
                              item={item}
                              i={i}
                              variant={isWorkTab ? "work" : "edu"}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:col-start-1 md:block" />
                        <div className="hidden md:col-start-2 md:block">
                          <TimelineDot isWork={isWorkTab} />
                        </div>
                        <div className="hidden min-w-0 md:col-start-3 md:flex md:justify-start md:pl-2">
                          <TimelineCard
                            item={item}
                            i={i}
                            variant={isWorkTab ? "work" : "edu"}
                          />
                        </div>
                        <div className="flex md:hidden">
                          <TimelineDot isWork={isWorkTab} />
                          <div className="min-w-0 flex-1 pb-2">
                            <TimelineCard
                              item={item}
                              i={i}
                              variant={isWorkTab ? "work" : "edu"}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom strip */}
        <motion.div
          {...viewAnim}
          className="mt-16 rounded-2xl border border-dashed border-zinc-300/80 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-indigo-500/[0.06] px-6 py-8 text-center dark:border-white/15 dark:from-blue-500/10 dark:to-indigo-500/10 md:mt-20"
        >
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Want the full story on a PDF?
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Resume download lives in the About section — or reach out below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  EffectCreative,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionHeading from "@/components/ui/SectionHeading";
import { viewAnim } from "@/lib/motion";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    img: "/assets/img/1-port.png",
    title: "ShopBazar",
    description:
      "E-commerce for shopping a variety of products — React, Tailwind, Express, MongoDB.",
    href: "https://shopy-bazar.netlify.app/",
  },
  {
    img: "/assets/img/2-port.png",
    title: "Grid Fusion",
    description:
      "Tailwind CSS grid layout generator for developers — React & Tailwind.",
    href: "https://grid-layout-genetrator.vercel.app/",
  },
  {
    img: "/assets/img/port-3.png",
    title: "Image URL Scrapper",
    description:
      "Extract image URLs from any site in one click — React, Tailwind, Node, Express.",
    href: "https://scrap-ten.vercel.app/",
  },
  {
    img: "/assets/img/port-4.png",
    title: "Portfolio",
    description:
      "Personal portfolio — previously HTML/CSS/JS; now rebuilt with Next.js.",
    href: "https://ahmer.vercel.app/",
  },
  {
    img: "/assets/img/port-5.png",
    title: "Admin panel",
    description: "React admin dashboard — Tailwind, Express, MongoDB.",
    href: "#",
  },
  {
    img: "/assets/img/GithubReadme.png",
    title: "Github Readme Maker",
    description:
      "Generate a polished GitHub profile README in one click — React & Tailwind.",
    href: "https://github-readme-generator-five.vercel.app/",
  },
  {
    img: "/assets/img/ForgeForms.png",
    title: "ForgeForms",
    description:
      "Custom forms, hosted pages, React embeds, email notifications — Node, Express, Supabase.",
    href: "https://forgeforms.roushan.me/",
  },
  {
    img: "/assets/img/Inceptia.png",
    title: "Inceptia",
    description:
      "Play-to-earn platform — React, Tailwind, Node, Express, MongoDB.",
    href: "https://inceptia.vercel.app/",
  },
  {
    img: "/assets/img/VidGrab.png",
    title: "VidGrab",
    description:
      "Download YouTube videos in one click — React, Tailwind, Node, Express.",
    href: "https://inceptia.vercel.app/",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 lg:py-44"
      id="projects"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-zinc-300/25 blur-[90px] dark:bg-zinc-600/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-zinc-400/15 blur-[80px] dark:bg-zinc-700/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent dark:via-zinc-500/25"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Work" title="Featured projects" />

        <motion.div
          {...viewAnim}
          className="mx-auto -mt-8 mb-10 flex max-w-2xl flex-col items-center gap-3 text-center md:-mt-10 md:mb-12"
        >
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Drag, swipe, or use arrows — each card opens the live build.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-500 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="projects-swiper relative px-1 pb-14 pt-2 sm:px-4 md:px-10"
        >
          <Swiper
            modules={[
              EffectCreative,
              Navigation,
              Pagination,
              Keyboard,
              Mousewheel,
            ]}
            effect="creative"
            grabCursor
            loop
            speed={650}
            centeredSlides
            slidesPerView={1}
            spaceBetween={28}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            keyboard
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-115%", 0, -320],
                rotate: [0, 0, -12],
                opacity: 0.35,
              },
              next: {
                shadow: true,
                translate: ["115%", 0, -320],
                rotate: [0, 0, 12],
                opacity: 0.35,
              },
              limitProgress: 2,
            }}
            onSlideChange={(sw) => setActive(sw.realIndex)}
            onAfterInit={(sw) => setActive(sw.realIndex)}
            className="!overflow-visible !pb-2"
          >
            {projects.map((p, i) => (
              <SwiperSlide key={p.title} className="!flex py-2">
                <div className="group relative mx-auto w-full max-w-[min(100%,52rem)]">
                  <div
                    className="absolute -inset-px rounded-[1.6rem] bg-zinc-400/25 opacity-40 blur-[1px] transition duration-500 group-hover:opacity-70 dark:bg-zinc-500/20 dark:opacity-30 dark:group-hover:opacity-55"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-px shadow-xl shadow-zinc-900/8 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/40">
                    <div
                      className="h-1 w-full bg-blue-600 dark:bg-blue-500"
                      aria-hidden
                    />
                    <div className="relative grid gap-8 overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-white via-zinc-50/80 to-zinc-100/40 p-7 dark:from-zinc-900 dark:via-zinc-950 dark:to-black md:grid-cols-2 md:gap-10 md:p-10">
                      <div className="absolute right-6 top-6 z-10 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                        #{String(i + 1).padStart(2, "0")}
                      </div>

                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200/80 dark:ring-white/10">
                        <Image
                          src={p.img}
                          alt={p.title}
                          width={560}
                          height={360}
                          className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02] md:h-full md:min-h-[260px]"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-900/45 to-transparent dark:from-black/50" />
                      </div>

                      <div className="relative flex flex-col justify-center">
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
                          {p.title}
                        </h3>
                        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {p.description}
                        </p>
                        <a
                          href={p.href}
                          target={
                            p.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            p.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group/btn relative mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-900/20 transition hover:bg-blue-500 active:scale-[0.98] dark:bg-blue-600 dark:hover:bg-blue-500"
                        >
                          <span className="relative">Launch project</span>
                          <i className="uil uil-arrow-up-right relative text-lg transition group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

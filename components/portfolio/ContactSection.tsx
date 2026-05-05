"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

import { cn } from "@/lib/cn";

const FORMSPREE = "https://formspree.io/f/xyyozeaq";

const contactHighlights = [
  { icon: "uil-rocket", label: "Ship-ready builds" },
  { icon: "uil-envelope-check", label: "Direct to inbox" },
  { icon: "uil-lock-alt", label: "Secure via Formspree" },
] as const;

const cards = [
  {
    href: "mailto:Aliahmer289@gmail.com",
    icon: "uil-envelope-alt",
    title: "Email",
    subtitle: "Aliahmer289@gmail.com",
  },
  {
    href: "#",
    icon: "uil-calendar-alt",
    title: "Online meet",
    subtitle: "Schedule a call",
  },
  {
    href: "https://twitter.com/thisisAhmerAli/",
    icon: "uil-twitter-alt",
    title: "Twitter",
    subtitle: "@thisisAhmerAli",
  },
  {
    href: "https://goo.gl/maps/AbkrLpc6JepJcrSL8",
    icon: "uil-location-point",
    title: "Location",
    subtitle: "Lahore, Pakistan",
  },
];

export default function ContactSection() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [pending, setPending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setPending(true);
    fetch(FORMSPREE, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Form error");
        setAlertText("Your message has been sent.");
        setAlertOpen(true);
        setTimeout(() => setAlertOpen(false), 4000);
        form.reset();
      })
      .catch(() => {
        setAlertText(
          "Something went wrong — please try email or social links."
        );
        setAlertOpen(true);
        setTimeout(() => setAlertOpen(false), 4000);
      })
      .finally(() => setPending(false));
  }

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 lg:py-44"
      id="contact"
    >
      <div
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-zinc-300/20 blur-[90px] dark:bg-zinc-600/12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-zinc-400/12 blur-[80px] dark:bg-zinc-700/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-400/35 to-transparent dark:via-zinc-500/20"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 240, damping: 26 }}
          className="relative mx-auto mb-14 max-w-4xl md:mb-16 lg:mb-20"
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-blue-500/35 via-indigo-500/20 to-violet-500/25 opacity-80 blur-sm dark:from-blue-400/25 dark:via-indigo-400/15 dark:to-violet-400/20"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.65rem] border border-zinc-200/90 bg-white/80 p-8 shadow-2xl shadow-zinc-900/10 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/50 md:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(113 113 122 / 0.12) 1px, transparent 1px), linear-gradient(rgb(113 113 122 / 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-400/10"
              aria-hidden
            />

            <div className="relative text-center">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800 shadow-sm dark:border-blue-500/25 dark:bg-blue-950/60 dark:text-blue-200">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400"
                  aria-hidden
                />
                Contact
              </span>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.12] dark:text-white">
                Let’s build{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                  something
                </span>{" "}
                worth shipping.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Drop a line about your product, timeline, or stack — I reply by
                email. Submissions use{" "}
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  Formspree
                </span>{" "}
                so nothing gets lost in spam filters.
              </p>

              <ul className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2">
                {contactHighlights.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      type: "spring",
                      stiffness: 320,
                      damping: 24,
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200/80 bg-white/90 px-4 py-2.5 text-left text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-900/5 dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-200 sm:inline-flex sm:flex-1 sm:min-w-[10.5rem]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-lg text-white dark:from-blue-500 dark:to-indigo-500">
                      <i className={`uil ${item.icon}`} />
                    </span>
                    {item.label}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", damping: 26 }}
                whileHover={{ scale: 1.01 }}
                className="group relative block rounded-2xl border border-zinc-200/90 bg-white/90 p-5 shadow-md shadow-zinc-900/5 backdrop-blur-sm transition hover:border-zinc-300 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/75 dark:shadow-black/30 dark:hover:border-zinc-600"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xl text-zinc-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    <i className={`uil ${c.icon}`} />
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {c.title}
                    </h3>
                    <p className="mt-1 break-words text-sm text-zinc-600 dark:text-zinc-400">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            action={FORMSPREE}
            className="relative lg:col-span-3"
            id="contact-form"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white shadow-xl shadow-zinc-900/8 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/40">
              <div className="h-1 w-full bg-blue-600 dark:bg-blue-500" aria-hidden />
              <div className="rounded-b-3xl bg-gradient-to-br from-white via-zinc-50/50 to-zinc-100/30 p-7 dark:from-zinc-900 dark:via-zinc-950 dark:to-black lg:p-10">
                <div
                  role="status"
                  className={cn(
                    "mb-5 rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-3.5 text-sm font-medium text-emerald-900 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-100",
                    !alertOpen && "hidden"
                  )}
                >
                  {alertText}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
                  />
                </label>

                <motion.button
                  type="submit"
                  disabled={pending}
                  whileHover={{ scale: pending ? 1 : 1.02 }}
                  whileTap={{ scale: pending ? 1 : 0.98 }}
                  className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-md shadow-blue-900/20 transition hover:bg-blue-500 disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
                >
                  {pending ? "Sending…" : "Send message"}
                  <i className="uil uil-message text-lg" />
                </motion.button>

                <p className="mt-6 text-center text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                  Submissions are handled by{" "}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                  >
                    Formspree
                  </a>
                  . You can change the notification email anytime in your
                  Formspree dashboard for this form.
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

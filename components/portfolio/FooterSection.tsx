"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="relative border-t border-zinc-200/80 bg-gradient-to-b from-transparent to-zinc-100/80 dark:border-white/10 dark:to-zinc-950/90">
      <div className="container mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-xl font-bold text-transparent dark:from-blue-400 dark:to-indigo-400">
              Ahmer Ali
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Full Stack Developer
            </p>
          </motion.div>

          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            {[
              ["#about", "About"],
              ["#projects", "Projects"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-zinc-600 transition hover:text-blue-700 dark:text-zinc-400 dark:hover:text-blue-400"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {[
              [
                "https://www.linkedin.com/in/ahmerali412/",
                "uil-linkedin-alt",
              ],
              ["https://twitter.com/Ahmerali412/", "uil-twitter-alt"],
              ["https://www.instagram.com/ahmer_.ali/", "uil-instagram"],
            ].map(([href, icon]) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200/80 bg-white text-lg text-zinc-700 shadow-sm transition hover:border-blue-400/50 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <i className={`uil ${icon}`} />
              </motion.a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Ahmer Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

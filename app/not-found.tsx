import Link from "next/link";

import { GoBackLink } from "@/components/NotFoundClient";
import FooterSection from "@/components/portfolio/FooterSection";
import Header from "@/components/portfolio/Header";
import BackgroundMesh from "@/components/ui/BackgroundMesh";

export default function NotFound() {
  return (
    <>
      <BackgroundMesh />
      <Header />
      <main className="relative min-h-[75vh] pt-32 pb-24">
        <div className="container mx-auto max-w-lg px-5 text-center sm:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            Oops
          </p>
          <h1 className="text-7xl font-black tracking-tighter text-zinc-900 dark:text-white md:text-8xl">
            4
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              0
            </span>
            4
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            This page doesn&apos;t exist or the link is broken. Check the URL
            or head back.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Return home
            </Link>
            <GoBackLink />
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

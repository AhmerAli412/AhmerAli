"use client";

import { useRouter } from "next/navigation";

export function GoBackLink() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-blue-400/50 dark:border-white/15 dark:bg-zinc-900/80 dark:text-zinc-100"
    >
      Go back
    </button>
  );
}

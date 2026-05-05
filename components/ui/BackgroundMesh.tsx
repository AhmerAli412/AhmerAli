"use client";

/** Soft, single-hue atmosphere — no rainbow. Keeps focus on content. */
export default function BackgroundMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-1/3 top-[-10%] h-[min(90vw,720px)] w-[min(90vw,720px)] animate-pulse-slow rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/12 to-transparent blur-[100px] dark:from-blue-600/18 dark:via-indigo-900/20" />
      <div className="absolute -right-1/4 top-1/4 h-[min(70vw,560px)] w-[min(70vw,560px)] animate-float rounded-full bg-gradient-to-bl from-slate-400/15 via-transparent to-blue-300/10 blur-[90px] dark:from-slate-600/12 dark:to-blue-900/15" />
      <div className="absolute bottom-[-20%] left-1/4 h-[400px] w-[900px] animate-float-delayed rounded-full bg-gradient-to-t from-indigo-300/12 via-transparent to-transparent blur-[80px] dark:from-indigo-950/40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(250,250,250,0)_0%,rgba(250,250,250,0.92)_45%,rgb(250,250,250)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(9,9,11,0)_0%,rgba(9,9,11,0.94)_40%,rgb(9,9,11)_100%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%231e3a8a%27 fill-opacity=%270.035%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70 dark:opacity-50" />
    </div>
  );
}

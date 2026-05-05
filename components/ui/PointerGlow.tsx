"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type PointerGlowProps = {
  children: ReactNode;
  className?: string;
  /** Peak opacity of the glow on hover */
  strength?: number;
  /** Show glow even before hover (still follows cursor) */
  alwaysOn?: boolean;
};

export function PointerGlow({
  children,
  className,
  strength = 0.14,
  alwaysOn = false,
}: PointerGlowProps) {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    },
    [reduced]
  );

  const onLeave = useCallback(() => {
    setPos({ x: 50, y: 50 });
  }, []);

  return (
    <div
      className={cn(
        "group/p-glow relative overflow-hidden",
        alwaysOn && "p-glow-active",
        className
      )}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {!reduced && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 z-0 transition-opacity duration-300",
            alwaysOn
              ? "opacity-40 group-hover/p-glow:opacity-100"
              : "opacity-0 group-hover/p-glow:opacity-100"
          )}
          style={{
            background: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, rgba(59,130,246,${strength}), rgba(99,102,241,${strength * 0.45}) 28%, transparent 55%)`,
          }}
        />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Stat({
  label, value, hint, trend, icon, className,
}: {
  label: string;
  value: ReactNode;
  hint?: string;
  trend?: "up" | "down" | "flat";
  icon?: ReactNode;
  className?: string;
}) {
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-rose-400" : "text-muted";
  return (
    <div className={cn("rounded-xl border border-border bg-bg-panel p-5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-muted">{label}</span>
        {icon && <span className="text-muted">{icon}</span>}
      </div>
      <div className="mt-2 text-2xl font-semibold text-zinc-50">{value}</div>
      {hint && <div className={cn("mt-1 text-xs", trendColor)}>{hint}</div>}
    </div>
  );
}

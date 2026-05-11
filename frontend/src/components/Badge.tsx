"use client";
import { cn, statusColor } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warn" | "danger" | "muted" | "accent";
  className?: string;
}

export function Badge({ children, variant = "muted", className }: BadgeProps) {
  const styles = {
    success: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30",
    warn: "bg-amber-500/10 text-amber-400 ring-amber-500/30",
    danger: "bg-rose-500/10 text-rose-400 ring-rose-500/30",
    muted: "bg-zinc-500/10 text-zinc-400 ring-zinc-500/30",
    accent: "bg-indigo-500/10 text-indigo-400 ring-indigo-500/30",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return <Badge variant={statusColor(status)}>{status.replace(/_/g, " ")}</Badge>;
}

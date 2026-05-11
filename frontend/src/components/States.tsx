"use client";
import { Shimmer } from "@/components/Shimmer";
import { IllustrationEmpty, IllustrationError } from "@/components/Illustrations";
import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <Shimmer className={className} />;
}

export function ErrorState({ error, onRetry }: { error: Error; onRetry?: () => void }) {
  return (
    <div className="rounded-md border border-rose-500/30 bg-rose-500/5 p-4 text-sm text-rose-300">
      <div className="flex items-center gap-3">
        <IllustrationError className="h-12 w-16 shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="font-medium">Something went wrong</div>
          <div className="mt-1 text-xs text-rose-400">{error.message}</div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 rounded-md border border-rose-500/30 px-2 py-1 text-xs text-rose-200 hover:bg-rose-500/10"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function EmptyState({ title, description, className }: { title: string; description?: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-md border border-dashed border-border py-10 text-center", className)}>
      <IllustrationEmpty className="mb-3 h-20 w-32" />
      <div className="text-sm font-medium text-zinc-300">{title}</div>
      {description && <div className="mt-1 text-xs text-muted">{description}</div>}
    </div>
  );
}

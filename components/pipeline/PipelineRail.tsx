"use client";

import { pipelineStages, sectionMap } from "@/data/site";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const sectionIds = sectionMap.map((entry) => entry.id);

/**
 * The signature recurring system: the site's engineering pipeline lives in the
 * left margin and advances as the story does. Decorative by design — the same
 * information is stated in prose in the approach section.
 */
export function PipelineRail() {
  const activeId = useActiveSection(sectionIds);
  const stage = sectionMap.find((entry) => entry.id === activeId)?.stage ?? pipelineStages[0];
  const activeIndex = pipelineStages.indexOf(stage);

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <p className="mb-4 font-mono text-[8.5px] uppercase tracking-[0.22em] text-ghost">
        System
      </p>
      <ol className="relative flex flex-col gap-3.5">
        <span aria-hidden className="absolute left-[3px] top-1 bottom-1 w-px bg-line" />
        <span
          aria-hidden
          className="absolute left-[3px] top-1 w-px origin-top bg-accent/45 transition-all duration-700"
          style={{
            height: `calc(${(activeIndex / (pipelineStages.length - 1)) * 100}% - 2px)`,
          }}
        />
        {pipelineStages.map((label, index) => {
          const state = index === activeIndex ? "active" : index < activeIndex ? "done" : "idle";
          return (
            <li key={label} className="relative flex items-center gap-3 pl-0">
              <span
                className={cn(
                  "relative z-10 h-[7px] w-[7px] flex-none rounded-full border transition-all duration-500",
                  state === "active" && "border-accent bg-accent",
                  state === "done" && "border-accent/45 bg-accent/45",
                  state === "idle" && "border-line-strong bg-void",
                )}
              />
              <span
                className={cn(
                  "font-mono text-[9px] uppercase tracking-[0.18em] transition-all duration-500",
                  state === "active" && "text-ink",
                  state === "done" && "text-faint",
                  state === "idle" && "text-ghost",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

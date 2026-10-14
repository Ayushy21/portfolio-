"use client";

import { ChevronDown } from "lucide-react";
import { codesense } from "@/data/projects";
import { useInViewOnce, useSequence } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { ArchitectureFlow, FlowNode, WireY } from "./ArchitectureFlow";

/**
 * Bracket that forks one path into two, or merges two back into one.
 * On desktop the fork descends from the evaluation phase on the right, so the
 * line actually leaves the node it belongs to.
 */
function Bracket({ direction, active }: { direction: "split" | "merge"; active: boolean }) {
  const color = active ? "bg-accent/50" : "bg-line";
  const line = cn("absolute w-px transition-colors duration-700", color);
  const bar = cn("absolute h-px transition-colors duration-700", color);

  return (
    <div aria-hidden className="relative hidden h-10 w-full sm:block">
      {direction === "split" ? (
        <>
          {/* tablet: single centred stem */}
          <span className={cn(line, "left-1/2 top-0 h-5 lg:hidden")} />
          <span className={cn(bar, "left-1/4 right-1/4 top-5 lg:hidden")} />
          {/* desktop: stem drops from the right-hand evaluation column */}
          <span className={cn(line, "hidden top-0 h-5 lg:block lg:left-[89%]")} />
          <span className={cn(bar, "hidden top-5 lg:block lg:left-1/4 lg:right-[11%]")} />
          <span className={cn(line, "left-1/4 top-5 h-5")} />
          <span className={cn(line, "right-1/4 top-5 h-5")} />
        </>
      ) : (
        <>
          <span className={cn(line, "left-1/4 top-0 h-5")} />
          <span className={cn(line, "right-1/4 top-0 h-5")} />
          <span className={cn(bar, "left-1/4 right-1/4 top-5")} />
          <span className={cn(line, "left-1/2 top-5 h-5")} />
        </>
      )}
    </div>
  );
}

export function CodeSenseArchitecture() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ amount: 0.12 });
  // Fork continues the chain above, so it starts after the chain has played.
  const lit = useSequence(6, inView, 150, 820);

  return (
    <div id="codesense-architecture" className="scroll-mt-24">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <p className="label">System architecture</p>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
          Generation separated from evaluation
        </p>
      </div>

      <ArchitectureFlow
        groups={codesense.pipeline}
        label="CodeSense generation pipeline: developer code, AI review agent, bug diagnosis, generated fix, Monaco diff, evaluation system."
        step={130}
      />

      <div ref={ref} className="mt-2">
        <div className="sm:hidden">
          <div className="flex flex-col items-center py-3">
            <WireY active={lit > 0} length={22} />
            <ChevronDown data-active={lit > 0} className="chevron -mt-1 h-3.5 w-3.5" strokeWidth={1.5} />
          </div>
        </div>
        <Bracket direction="split" active={lit > 0} />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {codesense.branches.map((branch, branchIndex) => {
            const active = lit > branchIndex + 1;
            return (
              <div
                key={branch.id}
                className={cn(
                  "rounded-lg border p-4 transition-all duration-700",
                  active
                    ? "border-line-strong bg-white/[0.022]"
                    : "border-line bg-white/[0.008]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <p
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-700",
                      active ? "text-ink" : "text-faint",
                    )}
                  >
                    {branch.label}
                  </p>
                  <span
                    className={cn(
                      "flex-none rounded border px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] transition-colors duration-700",
                      active
                        ? "border-accent/35 text-accent/90"
                        : "border-line text-ghost",
                    )}
                  >
                    {branch.kind}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {branch.items.map((item, itemIndex) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className={cn(
                          "h-1 w-1 flex-none rounded-full transition-colors duration-500",
                          active ? "bg-accent/70" : "bg-ghost",
                        )}
                        style={{ transitionDelay: `${itemIndex * 90}ms` }}
                      />
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-[0.08em] transition-colors duration-500",
                          active ? "text-mute" : "text-ghost",
                        )}
                        style={{ transitionDelay: `${itemIndex * 90}ms` }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="sm:hidden">
          <div className="flex flex-col items-center py-3">
            <WireY active={lit > 3} length={22} />
            <ChevronDown data-active={lit > 3} className="chevron -mt-1 h-3.5 w-3.5" strokeWidth={1.5} />
          </div>
        </div>
        <Bracket direction="merge" active={lit > 3} />

        <div className="mx-auto flex max-w-sm flex-col">
          {codesense.merge.map((node, index) => (
            <div key={node.label} className="flex flex-col">
              {index > 0 ? <WireY active={lit > 4 + index} length={18} /> : null}
              <FlowNode node={node} active={lit > 4 + index} className="justify-center" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-ghost">
        Desktop: phases distributed left to right. Mobile: same system, folded into a vertical
        pipeline.
      </p>
    </div>
  );
}

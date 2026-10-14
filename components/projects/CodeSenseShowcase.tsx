"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, GitCompareArrows, Sparkles } from "lucide-react";
import { codesense } from "@/data/projects";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------- */
/* Interface reconstructions. Everything here is clearly labelled   */
/* as an example — no invented metrics are presented as measured.   */
/* --------------------------------------------------------------- */

const sourceLines = [
  "function totalPrice(items) {",
  "  let total = 0;",
  "  for (let i = 0; i <= items.length; i++) {",
  "    total += items[i].price * items[i].qty;",
  "  }",
  "  return total;",
  "}",
];

function EditorMock() {
  return (
    <div className="no-liga font-mono text-[11px] leading-[1.75] sm:text-[11.5px]">
      <div className="mb-3 flex items-center gap-2 text-ghost">
        <span className="rounded border border-line px-1.5 py-0.5 text-[8.5px] uppercase tracking-[0.12em]">
          JavaScript
        </span>
        <span className="text-[9.5px] tracking-[0.06em]">cart/total-price.js</span>
      </div>
      <div className="overflow-x-auto">
        {sourceLines.map((line, index) => (
          <div
            key={index}
            className={cn(
              "flex gap-4 whitespace-pre rounded px-2 -mx-2",
              index === 2 && "bg-warn/[0.07]",
            )}
          >
            <span className="w-4 flex-none select-none text-right text-ghost">{index + 1}</span>
            <span className={index === 2 ? "text-ink" : "text-mute"}>{line}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-2 text-[9.5px] uppercase tracking-[0.12em] text-faint">
        <Sparkles aria-hidden className="h-3 w-3 text-accent/80" />
        Run review
      </p>
    </div>
  );
}

function ReviewMock() {
  return (
    <div className="space-y-3">
      <div className="rounded-md border border-line bg-white/[0.015] p-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-warn/40 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-warn/90">
            High
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink">
            Off-by-one loop bound
          </p>
          <span className="font-mono text-[9.5px] text-ghost">line 3</span>
        </div>
        <p className="mt-2.5 text-[13px] leading-relaxed text-mute">
          The loop condition uses <code className="font-mono text-ink/90">i &lt;= items.length</code>,
          so the final iteration reads an undefined element and throws when the array is non-empty.
        </p>
      </div>
      <div className="rounded-md border border-line bg-white/[0.015] p-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-faint">
            Low
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink">
            Missing input guard
          </p>
          <span className="font-mono text-[9.5px] text-ghost">line 1</span>
        </div>
        <p className="mt-2.5 text-[13px] leading-relaxed text-mute">
          No validation that each item exposes numeric <code className="font-mono text-ink/90">price</code>{" "}
          and <code className="font-mono text-ink/90">qty</code> fields.
        </p>
      </div>
    </div>
  );
}

function DiffMock() {
  return (
    <div className="no-liga font-mono text-[11px] leading-[1.8] sm:text-[11.5px]">
      <div className="mb-3 flex items-center gap-2 text-ghost">
        <GitCompareArrows aria-hidden className="h-3.5 w-3.5" />
        <span className="text-[9.5px] uppercase tracking-[0.12em]">Proposed patch · 1 hunk</span>
      </div>
      <div className="overflow-x-auto rounded border border-line">
        <div className="border-b border-line bg-white/[0.02] px-3 py-1.5 text-[9.5px] tracking-[0.06em] text-faint">
          @@ -3,1 +3,1 @@
        </div>
        <div className="divide-y divide-line/60">
          <div className="flex gap-3 whitespace-pre bg-fail/[0.06] px-3 py-1 text-fail/85">
            <span className="select-none opacity-70">-</span>
            <span>{"  for (let i = 0; i <= items.length; i++) {"}</span>
          </div>
          <div className="flex gap-3 whitespace-pre bg-accent/[0.06] px-3 py-1 text-accent/90">
            <span className="select-none opacity-70">+</span>
            <span>{"  for (let i = 0; i < items.length; i++) {"}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[9.5px] uppercase tracking-[0.1em] text-ghost">
        Rendered in Monaco&apos;s diff editor against the original source
      </p>
    </div>
  );
}

const passingDimensions = [
  { label: "Accuracy", value: 94 },
  { label: "Clarity", value: 90 },
  { label: "Completeness", value: 91 },
  { label: "Hallucination risk", value: 12, inverted: true },
];

function ScoreMock() {
  return (
    <div className="grid gap-5 sm:grid-cols-[minmax(0,120px)_1fr] sm:gap-6">
      <div>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">Review score</p>
        <p className="mt-1 text-[2.6rem] font-medium leading-none tracking-[-0.04em] text-ink tabular-nums">
          91
        </p>
        <p className="mt-2 inline-flex items-center gap-1.5 rounded border border-accent/35 bg-accent/[0.08] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-accent/90">
          Rules passed
        </p>
      </div>
      <ul className="space-y-3">
        {passingDimensions.map((dimension) => (
          <li key={dimension.label}>
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-mute">
                {dimension.label}
              </p>
              <p
                className={cn(
                  "font-mono text-[11px] tabular-nums",
                  dimension.inverted ? "text-warn/90" : "text-ink",
                )}
              >
                {dimension.value}
              </p>
            </div>
            <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-line">
              <div
                className={cn("h-full rounded-full", dimension.inverted ? "bg-warn/60" : "bg-accent/60")}
                style={{ width: `${dimension.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const bugTypes = [
  { label: "Off-by-one", weight: 0.82 },
  { label: "Null handling", weight: 0.64 },
  { label: "Async misuse", weight: 0.48 },
  { label: "Type mismatch", weight: 0.36 },
  { label: "Resource leak", weight: 0.22 },
];

const trend = [58, 64, 61, 72, 76, 74, 83, 88, 86, 91];

function AnalyticsMock() {
  const points = trend
    .map((value, index) => `${(index / (trend.length - 1)) * 100},${40 - (value / 100) * 34}`)
    .join(" ");

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
          Bug-type distribution
        </p>
        <ul className="mt-3 space-y-2.5">
          {bugTypes.map((bug) => (
            <li key={bug.label} className="grid grid-cols-[1fr_auto] items-center gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                  {bug.label}
                </p>
                <div className="mt-1 h-[3px] overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-accent/45"
                    style={{ width: `${bug.weight * 100}%` }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
          Score trend · last 10 reviews
        </p>
        <svg
          viewBox="0 0 100 44"
          preserveAspectRatio="none"
          role="img"
          aria-label="Example score trend rising across ten reviews"
          className="mt-3 h-24 w-full"
        >
          <g stroke="var(--color-line)" strokeWidth="0.4">
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="0" x2="100" y1={4 + i * 12} y2={4 + i * 12} />
            ))}
          </g>
          <polyline
            points={points}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1"
            strokeLinejoin="round"
            opacity="0.85"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-ghost">
          Example data · shape of the dashboard, not a benchmark
        </p>
      </div>
    </div>
  );
}

const panels: Record<string, () => React.JSX.Element> = {
  editor: EditorMock,
  review: ReviewMock,
  diff: DiffMock,
  score: ScoreMock,
  analytics: AnalyticsMock,
};

export function CodeSenseShowcase() {
  const [active, setActive] = useState(codesense.showcase[0].id);
  const current = codesense.showcase.find((item) => item.id === active) ?? codesense.showcase[0];
  const Panel = panels[current.id];

  // Arrow-key movement, as the tabs pattern expects.
  const onTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!offset) return;
    event.preventDefault();
    const index = codesense.showcase.findIndex((item) => item.id === active);
    const next = codesense.showcase[(index + offset + codesense.showcase.length) % codesense.showcase.length];
    setActive(next.id);
    document.getElementById(`showcase-tab-${next.id}`)?.focus();
  };

  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2.5">
          <CircleAlert aria-hidden className="h-3.5 w-3.5 text-ghost" />
          <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
            Interface walkthrough
          </p>
        </div>
        <p className="rounded border border-line px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ghost">
          Reconstruction · example data
        </p>
      </div>

      <div
        role="tablist"
        aria-label="CodeSense interface areas"
        onKeyDown={onTabKeyDown}
        className="flex flex-wrap gap-1 border-b border-line px-3 py-2 sm:px-4"
      >
        {codesense.showcase.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`showcase-tab-${item.id}`}
            aria-selected={active === item.id}
            aria-controls={`showcase-panel-${item.id}`}
            tabIndex={active === item.id ? 0 : -1}
            onClick={() => setActive(item.id)}
            className={cn(
              "rounded px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300",
              active === item.id
                ? "bg-accent/[0.1] text-ink"
                : "text-faint hover:bg-white/[0.03] hover:text-mute",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="px-4 py-5 sm:px-5">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
            {current.title}
          </p>
          <p className="text-[13px] text-faint">{current.body}</p>
        </div>

        <div className="min-h-[248px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              id={`showcase-panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`showcase-tab-${current.id}`}
              tabIndex={0}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Panel />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

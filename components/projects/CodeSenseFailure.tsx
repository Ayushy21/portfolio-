"use client";

import { AlertTriangle, Check, X } from "lucide-react";
import { codesense } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { useCountUp, useInViewOnce } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const failure = codesense.failureCase;

function MetricBar({
  label,
  value,
  inverted,
  active,
  delay,
}: {
  label: string;
  value: number;
  inverted?: boolean;
  active: boolean;
  delay: number;
}) {
  const shown = useCountUp(value, active, 900);

  return (
    <li className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5">
      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-mute">
        {label}
        {inverted ? <span className="ml-1.5 text-ghost">lower is better</span> : null}
      </p>
      <p
        className={cn(
          "font-mono text-[11px] tabular-nums",
          inverted ? "text-warn/90" : "text-ink",
        )}
      >
        {Math.round(shown)}
      </p>
      <div className="col-span-2 h-[3px] overflow-hidden rounded-full bg-line">
        <div
          className={cn(
            "h-full origin-left rounded-full transition-transform duration-1000 ease-out",
            inverted ? "bg-warn/70" : "bg-accent/70",
          )}
          style={{
            transform: `scaleX(${active ? value / 100 : 0})`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </li>
  );
}

export function CodeSenseFailure() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ amount: 0.25 });
  const score = useCountUp(failure.score, inView, 1200);

  return (
    <div id="verification" className="scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-5">
          <Reveal variant="drift" className="flex items-center gap-3">
            <span aria-hidden className="h-px w-6 bg-fail/60" />
            <p className="label text-fail/80">Failure case</p>
          </Reveal>
          <Reveal
            variant="clip"
            delay={80}
            as="h3"
            className="headline mt-5 text-[clamp(1.8rem,4.4vw,2.8rem)] text-ink"
          >
            {failure.heading}
          </Reveal>
          <Reveal variant="fade" delay={160} as="p" className="prose-body mt-6 text-[15px]">
            {failure.explanation}
          </Reveal>
          <Reveal
            variant="fade"
            delay={220}
            className="mt-7 border-l-2 border-accent/45 pl-4 text-[15px] leading-relaxed text-ink/90"
          >
            {failure.conclusion}
          </Reveal>
        </div>

        <Reveal variant="rise" delay={120} className="min-w-0 lg:col-span-7">
          <div ref={ref} className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5 sm:px-5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">
                Evaluation report
              </p>
              <p className="rounded border border-line px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ghost">
                Illustrative example
              </p>
            </div>

            <div className="grid gap-6 p-4 sm:grid-cols-[minmax(0,150px)_1fr] sm:gap-7 sm:p-5">
              <div className="min-w-0">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                  {failure.scoreLabel}
                </p>
                <p className="mt-1 text-[3.2rem] font-medium leading-none tracking-[-0.04em] text-ink tabular-nums">
                  {Math.round(score)}
                </p>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-accent/85">
                  <Check aria-hidden className="h-3 w-3" />
                  Judge: acceptable
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-fail/90">
                  <X aria-hidden className="h-3 w-3" />
                  Rules: rejected
                </p>
              </div>

              <ul className="min-w-0 space-y-3.5">
                {failure.metrics.map((metric, index) => (
                  <MetricBar
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    inverted={metric.inverted}
                    active={inView}
                    delay={index * 110}
                  />
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-4 py-4 sm:px-5">
              <div
                className={cn(
                  "rounded-md border border-fail/35 bg-fail/[0.05] p-3.5 transition-opacity duration-700 sm:p-4",
                  inView ? "opacity-100" : "opacity-0",
                )}
                style={{ transitionDelay: "700ms" }}
              >
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fail">
                  <AlertTriangle aria-hidden className="h-3.5 w-3.5" />
                  {failure.ruleCheck.status}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/85">
                  &ldquo;{failure.ruleCheck.message}&rdquo;
                </p>
                <pre className="mt-3 overflow-x-auto rounded border border-line bg-void/60 p-3 font-mono text-[11px] leading-relaxed">
                  <code>
                    <span className="text-fail/80">- total += items[i].price;</span>
                    {"\n"}
                    <span className="text-accent/80">+ total += lineItems[i].price;</span>
                    {"\n"}
                    <span className="text-ghost">
                      {"                "}^ lineItems is not declared in the source file
                    </span>
                  </code>
                </pre>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                  Resolution
                </p>
                <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-mute">
                  Review returned to the agent · deterministic check wins
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

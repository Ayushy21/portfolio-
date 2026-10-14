"use client";

import { contests, platforms } from "@/data/achievements";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { useInViewOnce } from "@/lib/hooks";
import { formatNumber, topPercent } from "@/lib/utils";

/** A contest result read as a position within the field, not a badge. */
function ContestRow({
  contest,
  index,
}: {
  contest: (typeof contests)[number];
  index: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLLIElement>({ amount: 0.5 });
  const position = (contest.rank / contest.field) * 100;

  return (
    <li ref={ref} className="grid gap-3 border-t border-line py-5 sm:grid-cols-12 sm:items-center sm:gap-6">
      <div className="sm:col-span-4">
        <p className="text-[14px] leading-snug text-ink/90">{contest.contest}</p>
      </div>

      <div className="sm:col-span-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ghost">
          Global rank
        </p>
        <p className="mt-1 font-mono text-[13px] text-ink tabular-nums">
          <CountUp value={contest.rank} duration={900} />
          <span className="text-ghost"> / {formatNumber(contest.field)}</span>
        </p>
      </div>

      <div className="sm:col-span-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ghost">
            Ahead of field
          </p>
          <p className="font-mono text-[10.5px] text-accent/90 tabular-nums">
            top {topPercent(contest.rank, contest.field)}%
          </p>
        </div>
        {/* Filled portion is the share of the field placed behind. */}
        <div className="relative mt-2.5 h-0.75 rounded-full bg-line">
          <span
            className="absolute inset-y-0 left-0 origin-left rounded-full bg-accent/70 transition-transform duration-1000 ease-out"
            style={{
              transform: `scaleX(${inView ? (100 - position) / 100 : 0})`,
              transitionDelay: `${index * 120}ms`,
            }}
          />
          <span
            className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-void transition-all duration-1000 ease-out"
            style={{
              left: inView ? `${100 - position}%` : "0%",
              transitionDelay: `${index * 120}ms`,
            }}
          />
        </div>
      </div>
    </li>
  );
}

export function ProblemSolving() {
  return (
    <section id="problem-solving" aria-labelledby="problem-solving-title" className="section pt-0">
      <div className="shell">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <p className="label text-accent/80">Problem solving</p>
            </Reveal>
            <Reveal
              variant="clip"
              delay={70}
              as="h2"
              id="problem-solving-title"
              className="headline mt-6 text-[clamp(1.9rem,4.6vw,3rem)] text-ink"
            >
              Competitive programming
            </Reveal>
            <Reveal variant="fade" delay={140} as="p" className="prose-body mt-5 max-w-md text-[14.5px]">
              Years of contests are why edge cases, decomposition and disciplined debugging are
              habits rather than checklists.
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {platforms.map((platform, index) => (
              <Reveal
                key={platform.id}
                variant="rise"
                delay={index * 90}
                className="flex h-full flex-col rounded-lg border border-line bg-white/[0.012] p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {platform.platform}
                </p>
                <p className="mt-3 text-[1.6rem] font-medium leading-none tracking-[-0.02em] text-ink">
                  {platform.standing}
                </p>
                <div aria-hidden className="mt-5 flex-1" />
                <div className="flex items-baseline justify-between gap-3 border-t border-line pt-3">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ghost">
                    {platform.metricLabel}
                  </p>
                  <p className="font-mono text-[13px] text-accent/90 tabular-nums">
                    <CountUp value={platform.metricValue} duration={1000} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="flex items-baseline justify-between gap-4">
            <p className="label">Contest records</p>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ghost">
              Rank / participants
            </p>
          </div>
          <ul className="mt-4 border-b border-line">
            {contests.map((contest, index) => (
              <ContestRow key={contest.id} contest={contest} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

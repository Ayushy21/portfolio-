"use client";

import { philosophy } from "@/data/philosophy";
import { Reveal } from "@/components/ui/Reveal";
import { useInViewOnce } from "@/lib/hooks";
import { cn } from "@/lib/utils";

function StageRow({
  stage,
  index,
  isLast,
}: {
  stage: (typeof philosophy.stages)[number];
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInViewOnce<HTMLLIElement>({ amount: 0.55, rootMargin: "0px 0px -20% 0px" });

  return (
    <li ref={ref} className="group relative grid grid-cols-[20px_1fr] gap-x-4 py-6 sm:gap-x-6 lg:grid-cols-[20px_180px_1fr_1fr] lg:items-baseline lg:gap-x-8">
      <span
        aria-hidden
        className="absolute left-2.25 top-0 w-px bg-line"
        style={{ height: isLast ? 35 : "100%" }}
      />

      <span
        aria-hidden
        className={cn(
          "relative z-10 col-start-1 row-start-1 mt-1.75 h-1.75 w-1.75 rounded-full border transition-all duration-700",
          inView ? "border-accent bg-accent" : "border-line-strong bg-void",
        )}
        style={{ transitionDelay: `${index * 40}ms` }}
      />

      <div className="col-start-2 row-start-1">
        <p
          className={cn(
            "font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-700",
            inView ? "text-ink" : "text-faint",
          )}
        >
          <span className="mr-2 text-ghost">{stage.index}</span>
          {stage.name}
        </p>
      </div>

      <p
        className={cn(
          "col-start-2 row-start-2 mt-2 text-[15px] leading-relaxed transition-colors duration-700 lg:col-start-3 lg:row-start-1 lg:mt-0 lg:text-base",
          inView ? "text-ink/90" : "text-mute",
        )}
      >
        {stage.body}
      </p>

      <p className="col-start-2 row-start-3 mt-2 text-[13.5px] leading-relaxed text-faint lg:col-start-4 lg:row-start-1 lg:mt-0">
        {stage.detail}
      </p>
    </li>
  );
}

export function Philosophy() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="section">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <p className="label text-accent/80">Operating principle</p>
            </Reveal>
            <Reveal
              variant="clip"
              delay={80}
              as="h2"
              id="approach-title"
              className="display mt-6 text-[clamp(2.1rem,6vw,3.6rem)] text-ink"
            >
              {philosophy.statement}
            </Reveal>
          </div>
          <Reveal
            variant="fade"
            delay={140}
            as="p"
            className="prose-body max-w-xl self-end text-[15px] sm:text-base lg:col-span-6 lg:col-start-7"
          >
            {philosophy.intro}
          </Reveal>
        </div>

        <ol className="mt-14 border-t border-line sm:mt-16">
          {philosophy.stages.map((stage, index) => (
            <StageRow
              key={stage.index}
              stage={stage}
              index={index}
              isLast={index === philosophy.stages.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

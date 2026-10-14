import { experience } from "@/data/experience";
import { ChipRow } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureFlow } from "@/components/architecture/ArchitectureFlow";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="shell">
        <Reveal variant="drift" className="flex items-center gap-3">
          <span aria-hidden className="h-px w-6 bg-line-strong" />
          <p className="label text-accent/80">Experience</p>
        </Reveal>

        <div className="mt-6 grid gap-6 border-b border-line pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal
              variant="clip"
              as="h2"
              id="experience-title"
              className="display text-[clamp(2.4rem,7.5vw,4.6rem)] text-ink"
            >
              {experience.company}
            </Reveal>
            <Reveal variant="fade" delay={100} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="text-base text-ink/90 sm:text-lg">{experience.role}</p>
              <span aria-hidden className="h-3 w-px bg-line-strong" />
              <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-mute">
                {experience.focus}
              </p>
            </Reveal>
          </div>
          <Reveal variant="fade" delay={140} className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-mute">
              {experience.period}
            </p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ghost">
              {experience.mode}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-9 lg:grid-cols-12 lg:gap-10">
          <Reveal variant="fade" as="p" className="prose-body text-[15px] sm:text-base lg:col-span-6">
            {experience.summary}
          </Reveal>
          <Reveal variant="fade" delay={100} className="lg:col-span-5 lg:col-start-8">
            <p className="label">Benchmarking programs</p>
            <ChipRow items={experience.programs} className="mt-3" />
          </Reveal>
        </div>

        <Reveal variant="fade" className="mt-14 sm:mt-16">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <p className="label">Evaluation workflow</p>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
              One task, from design to failure analysis
            </p>
          </div>
          <ArchitectureFlow
            groups={experience.pipeline}
            label="Evaluation workflow: real developer task, AI coding agent, terminal execution, execution trace, oracle, edge-case tests, pass or fail, failure analysis."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-4 sm:mt-16 sm:grid-cols-2">
          {experience.achievements.map((item, index) => (
            <Reveal
              key={item}
              variant="drift"
              delay={(index % 2) * 60}
              className="flex gap-3.5 border-t border-line pt-4"
            >
              <span className="font-mono text-[9.5px] tracking-[0.14em] text-ghost">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[14px] leading-relaxed text-mute">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

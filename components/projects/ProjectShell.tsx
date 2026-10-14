import type { ReactNode } from "react";
import type { FlowGroup, ProjectLink } from "@/data/projects";
import { Action } from "@/components/ui/Action";
import { ChipRow } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureFlow } from "@/components/architecture/ArchitectureFlow";

type ProjectShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  thesis: string;
  stack: readonly string[];
  links: ProjectLink[];
  pipeline: FlowGroup[];
  flowLabel: string;
  diagramTitle: string;
  diagramNote: string;
  children?: ReactNode;
};

export function ProjectShell({
  id,
  eyebrow,
  title,
  subtitle,
  summary,
  thesis,
  stack,
  links,
  pipeline,
  flowLabel,
  diagramTitle,
  diagramNote,
  children,
}: ProjectShellProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section">
      <div className="shell">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <p className="label text-accent/80">{eyebrow}</p>
            </Reveal>

            <Reveal
              variant="clip"
              delay={70}
              as="h2"
              id={`${id}-title`}
              className="headline mt-5 text-[clamp(2.1rem,5.5vw,3.5rem)] text-ink"
            >
              {title}
            </Reveal>

            <Reveal variant="fade" delay={130} as="p" className="mt-3 text-base text-mute sm:text-lg">
              {subtitle}
            </Reveal>

            <Reveal variant="fade" delay={190} as="p" className="prose-body mt-6 max-w-2xl text-[15px]">
              {summary}
            </Reveal>

            <Reveal
              variant="fade"
              delay={240}
              className="mt-6 max-w-2xl border-l-2 border-accent/40 pl-4 text-[14.5px] leading-relaxed text-ink/85"
            >
              {thesis}
            </Reveal>

            {links.length ? (
              <Reveal variant="rise" delay={290} className="mt-8 flex flex-wrap gap-2.5">
                {links.map((link, index) => (
                  <Action
                    key={link.label}
                    href={link.href}
                    variant={index === 0 ? "primary" : "secondary"}
                    icon={link.kind === "external" ? "external" : "right"}
                  >
                    {link.label}
                  </Action>
                ))}
              </Reveal>
            ) : null}
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="fade" delay={200} className="border-t border-line pt-5 lg:border-t-0 lg:pt-0">
              <div className="lg:border-l lg:border-line lg:pl-6">
                <p className="label">Stack</p>
                <ChipRow items={stack} className="mt-3" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="fade" className="mt-14 sm:mt-16">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
            <p className="label">{diagramTitle}</p>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
              {diagramNote}
            </p>
          </div>
          <ArchitectureFlow groups={pipeline} label={flowLabel} />
        </Reveal>

        {children}
      </div>
    </section>
  );
}

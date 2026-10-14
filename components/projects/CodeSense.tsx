import { codesense } from "@/data/projects";
import { Action } from "@/components/ui/Action";
import { ChipRow } from "@/components/ui/Chip";
import { Disclosure } from "@/components/ui/Disclosure";
import { Reveal } from "@/components/ui/Reveal";
import { CodeSenseArchitecture } from "@/components/architecture/CodeSenseArchitecture";
import { CodeSenseFailure } from "./CodeSenseFailure";
import { CodeSenseShowcase } from "./CodeSenseShowcase";

export function CodeSense() {
  return (
    <section id="work" aria-labelledby="codesense-title" className="section pb-0">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              <p className="label text-accent/80">{codesense.eyebrow}</p>
            </Reveal>

            <Reveal
              variant="clip"
              delay={70}
              as="h2"
              id="codesense-title"
              className="display mt-6 text-[clamp(2.9rem,9vw,5.4rem)] text-ink"
            >
              {codesense.title}
            </Reveal>

            <Reveal variant="fade" delay={140} as="p" className="mt-4 text-lg text-mute sm:text-xl">
              {codesense.subtitle}
            </Reveal>

            <Reveal variant="fade" delay={200} as="p" className="prose-body mt-7 max-w-2xl text-[15px] sm:text-base">
              {codesense.summary}
            </Reveal>

            <Reveal variant="rise" delay={260} className="mt-8 flex flex-wrap gap-2.5">
              {codesense.links.map((link, index) => (
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
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="fade" delay={200} className="border-t border-line pt-5 lg:border-t-0 lg:pt-0">
              <div className="lg:border-l lg:border-line lg:pl-6">
                <p className="label">Stack</p>
                <ChipRow items={codesense.stack} className="mt-3" />

                <dl className="mt-7 space-y-3.5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-2.5">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                      Type
                    </dt>
                    <dd className="text-right font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                      Full-stack AI system
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-2.5">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                      Role
                    </dt>
                    <dd className="text-right font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                      Designed & built solo
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                      Focus
                    </dt>
                    <dd className="text-right font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                      Evaluation & verification
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="fade" delay={80} className="mt-16 sm:mt-20">
          <CodeSenseArchitecture />
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-9 sm:mt-24 sm:grid-cols-2">
          {codesense.story.map((block, index) => (
            <Reveal key={block.key} variant="rise" delay={index * 70} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9.5px] tracking-[0.16em] text-ghost">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="label text-mute">{block.label}</p>
                <span aria-hidden className="h-px flex-1 bg-line" />
              </div>
              <p className="prose-body mt-4 text-[14.5px] sm:text-[15px]">{block.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 sm:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal variant="drift" as="h3" className="headline text-2xl text-ink">
              Engineering decisions
            </Reveal>
            <Reveal variant="fade" delay={80} as="p" className="prose-body mt-4 max-w-sm text-[14px]">
              The choices that shaped the system. Expand for the reasoning behind each one.
            </Reveal>
          </div>
          <Reveal variant="fade" delay={120} className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line">
              {codesense.decisions.map((decision) => (
                <Disclosure key={decision.title} title={decision.title}>
                  {decision.body}
                </Disclosure>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="rise" className="mt-20 sm:mt-24">
          <CodeSenseShowcase />
        </Reveal>
      </div>

      <div className="section pb-0">
        <div className="shell">
          <CodeSenseFailure />
        </div>
      </div>
    </section>
  );
}

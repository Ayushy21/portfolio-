import { telemetry } from "@/data/achievements";
import { site } from "@/data/site";
import { coreStack } from "@/data/skills";
import { Action } from "@/components/ui/Action";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSystemGraph } from "./HeroSystemGraph";

const compactChain = ["Input", "Agent", "Tools", "Eval", "Verify", "Result"];

function TelemetryValue({ value }: { value: string }) {
  const match = /^(\d+)(\+?)$/.exec(value);
  if (match) {
    return (
      <CountUp
        value={Number(match[1])}
        suffix={match[2]}
        className="text-[1.6rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.75rem]"
      />
    );
  }
  return (
    <span className="text-[1.6rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.75rem]">
      {value}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pt-28 sm:pt-32 lg:pt-36">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal immediate variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              <p className="label">
                {site.role} — {site.location}
              </p>
            </Reveal>

            <Reveal immediate variant="clip" delay={60} as="h1" id="hero-title" className="mt-6">
              <span className="display block text-[clamp(2.8rem,10.5vw,6.2rem)] text-ink">
                Ayush
              </span>
              <span className="display block text-[clamp(2.8rem,10.5vw,6.2rem)] text-ink">
                Yadav
              </span>
            </Reveal>

            <Reveal immediate variant="fade" delay={180} className="mt-8 max-w-xl">
              <p className="headline text-[clamp(1.25rem,3.2vw,1.85rem)] text-ink/90">
                I build AI systems that are{" "}
                <span className="text-accent">evaluated</span>, tested and shipped.
              </p>
            </Reveal>

            <Reveal
              immediate
              variant="fade"
              delay={260}
              as="p"
              className="prose-body mt-6 max-w-xl text-[15px] sm:text-base"
            >
              I engineer AI agents, evaluation pipelines and full-stack AI products with a focus on
              reliability, observability and real-world usability.
            </Reveal>

            <Reveal
              immediate
              variant="rise"
              delay={340}
              className="mt-9 flex flex-wrap items-center gap-2.5"
            >
              <Action href="#work" variant="primary" icon="right">
                Explore selected work
              </Action>
              <Action href={site.github} icon="external">
                GitHub
              </Action>
              <Action href={site.resume} icon="down" download>
                Resume
              </Action>
            </Reveal>

            {/* Compact stage strip stands in for the system graph on small screens. */}
            <Reveal immediate variant="fade" delay={420} className="mt-10 lg:hidden">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {compactChain.map((stage, index) => (
                  <li key={stage} className="flex items-center gap-2">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
                      {stage}
                    </span>
                    {index < compactChain.length - 1 ? (
                      <span aria-hidden className="h-px w-4 bg-line-strong" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <Reveal immediate variant="fade" delay={220} className="relative">
              <div className="relative rounded-xl border border-line bg-white/[0.012] px-5 pb-5 pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ghost">
                    Agent request path
                  </p>
                  <p className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Live
                  </p>
                </div>
                <HeroSystemGraph />
                <p className="mt-3 font-mono text-[9.5px] leading-relaxed tracking-[0.06em] text-ghost">
                  Every stage after generation exists to decide whether the output can be trusted.
                </p>
              </div>
              <span
                aria-hidden
                className="absolute -left-px -top-px h-3 w-3 border-l border-t border-accent/40"
              />
              <span
                aria-hidden
                className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-accent/40"
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <Reveal variant="scale-x" className="hairline" aria-hidden />
          <ul className="grid grid-cols-2 gap-y-8 pt-8 sm:gap-x-6 lg:grid-cols-4">
            {telemetry.map((item, index) => (
              <Reveal
                key={item.id}
                as="li"
                variant="rise"
                delay={index * 90}
                className="relative sm:pl-6 sm:first:pl-0"
              >
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="absolute -left-0 top-1 hidden h-[calc(100%-8px)] w-px bg-line sm:block"
                  />
                ) : null}
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ghost">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2">
                  <TelemetryValue value={item.value} />
                </p>
                <p className="mt-1.5 max-w-[15rem] text-[13px] leading-snug text-mute">
                  {item.label}
                </p>
                <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ghost">
                  {item.meta}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="fade"
            delay={200}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-5"
          >
            <p className="label">Core stack</p>
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
              {coreStack.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-mute"
                >
                  {item}
                  {index < coreStack.length - 1 ? (
                    <span aria-hidden className="h-1 w-1 rounded-full bg-line-strong" />
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

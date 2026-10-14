import { pipelineStages, site } from "@/data/site";
import { Action } from "@/components/ui/Action";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="section">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
          <Reveal variant="drift" className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-accent/50" />
            <p className="label text-accent/80">Contact</p>
          </Reveal>

          <Reveal
            variant="clip"
            delay={70}
            as="h2"
            id="contact-title"
            className="display mt-7 max-w-3xl text-[clamp(2.3rem,7.5vw,4.8rem)] text-ink"
          >
            Have an interesting AI problem?
          </Reveal>

          <Reveal variant="fade" delay={150} as="p" className="prose-body mt-7 max-w-xl text-[15px] sm:text-base">
            I&apos;m looking for opportunities to work on AI agents, LLM evaluation, applied AI and
            software engineering systems.
          </Reveal>

          <Reveal variant="rise" delay={220} className="mt-9 flex flex-wrap gap-2.5">
            <Action href={`mailto:${site.email}`} variant="primary" icon="right">
              Email me
            </Action>
            {site.linkedin ? (
              <Action href={site.linkedin} icon="external">
                LinkedIn
              </Action>
            ) : null}
            <Action href={site.github} icon="external">
              GitHub
            </Action>
            <Action href={site.resume} icon="down" download>
              Resume
            </Action>
          </Reveal>

          <Reveal variant="fade" delay={300} className="mt-8">
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-[11px] tracking-[0.06em] text-faint underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-accent/60"
            >
              {site.email}
            </a>
          </Reveal>
          </div>

          <Reveal variant="fade" delay={200} className="lg:col-span-3 lg:col-start-10 lg:self-end">
            <dl className="border-t border-line pt-5">
              <div className="flex items-baseline justify-between gap-4 pb-3">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                  Status
                </dt>
                <dd className="flex items-center gap-2 text-right font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                  <span aria-hidden className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  Available
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-line/70 py-3">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                  Based in
                </dt>
                <dd className="text-right font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                  {site.location} · remote
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-line/70 pt-3">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                  Looking for
                </dt>
                <dd className="text-right font-mono text-[10px] uppercase tracking-[0.08em] text-mute">
                  AI / LLM engineering
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="shell py-10">
          {/* The pipeline closes out fully resolved. */}
          <Reveal variant="fade" className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {pipelineStages.map((stage, index) => (
              <span key={stage} className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ghost">
                  {stage}
                </span>
                {index < pipelineStages.length - 1 ? (
                  <span aria-hidden className="h-px w-3 bg-line-strong" />
                ) : (
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                )}
              </span>
            ))}
          </Reveal>

          <div className="mt-8 flex flex-col justify-between gap-5 border-t border-line pt-7 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                {site.name}
              </p>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                {site.role}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <div className="flex flex-wrap gap-4">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
                >
                  GitHub
                </a>
                {site.linkedin ? (
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
                  >
                    LinkedIn
                  </a>
                ) : null}
                <a
                  href={site.resume}
                  download=""
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
                >
                  Resume
                </a>
                <a
                  href="#top"
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint transition-colors hover:text-ink"
                >
                  Back to top
                </a>
              </div>
              <p className="font-mono text-[10px] tracking-[0.12em] text-ghost">
                © {year} {site.name}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

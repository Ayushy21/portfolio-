import { ArrowUpRight } from "lucide-react";
import { supportingProjects, upcomingSlot } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

const miniFlows: Record<string, string[]> = {
  chat: ["Client", "Socket.IO", "Express", "MongoDB"],
};

export function SupportingProjects() {
  return (
    <section id="more" aria-labelledby="more-title" className="section pt-0">
      <div className="shell">
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <Reveal variant="drift" as="h2" id="more-title" className="label text-mute">
            Also built
          </Reveal>
          <Reveal variant="fade" as="p" className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ghost">
            Supporting work
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <Reveal key={project.id} variant="rise" delay={index * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mini group card-lift flex h-full flex-col rounded-lg border border-line bg-white/[0.012] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[16px] font-medium tracking-[-0.01em] text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">
                      {project.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight aria-hidden className="arrow-shift h-4 w-4 flex-none text-ghost" />
                </div>

                <p className="mt-4 text-[13.5px] leading-relaxed text-mute">{project.body}</p>

                {miniFlows[project.id] ? (
                  <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
                    {miniFlows[project.id].map((step, stepIndex, array) => (
                      <li key={step} className="flex items-center gap-1.5">
                        <span className="mini__node font-mono text-[9px] uppercase tracking-[0.1em] text-ghost transition-colors duration-500">
                          {step}
                        </span>
                        {stepIndex < array.length - 1 ? (
                          <span
                            aria-hidden
                            className="mini__wire h-px w-3.5 bg-line transition-colors duration-500"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                ) : null}

                <ul className="mt-5 flex flex-wrap gap-x-1.5 gap-y-1 border-t border-line/70 pt-4">
                  {project.stack.map((tech, techIndex) => (
                    <li
                      key={tech}
                      className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint"
                    >
                      {tech}
                      {techIndex < project.stack.length - 1 ? (
                        <span aria-hidden className="ml-1.5 text-line-strong">
                          /
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}

          <Reveal variant="rise" delay={160} className="sm:col-span-1">
            <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-line p-5">
              <div>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ghost">
                  {upcomingSlot.label}
                </p>
                <h3 className="mt-3 text-[16px] font-medium tracking-[-0.01em] text-mute">
                  {upcomingSlot.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-faint">{upcomingSlot.body}</p>
              </div>
              <div aria-hidden className="mt-6 flex items-center gap-1.5">
                {[0, 1, 2, 3].map((index) => (
                  <span key={index} className="h-px w-4 bg-line" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

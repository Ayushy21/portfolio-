import { vedaai } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectShell } from "./ProjectShell";

export function VedaAI() {
  return (
    <ProjectShell
      id={vedaai.id}
      eyebrow={vedaai.eyebrow}
      title={vedaai.title}
      subtitle={vedaai.subtitle}
      summary={vedaai.summary}
      thesis={vedaai.thesis}
      stack={vedaai.stack}
      links={vedaai.links}
      pipeline={vedaai.pipeline}
      flowLabel="VedaAI infrastructure: document upload, API, job queue, BullMQ, Redis, Gemini, database, Socket.IO, real-time progress, PDF output."
      diagramTitle="Infrastructure"
      diagramNote="Long-running jobs, not request/response"
    >
      <div className="mt-16 grid gap-x-10 gap-y-7 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {vedaai.capabilities.map((capability, index) => (
          <Reveal
            key={capability.label}
            variant="rise"
            delay={(index % 4) * 70}
            className="border-t border-line pt-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
              {capability.label}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-faint">{capability.body}</p>
          </Reveal>
        ))}
      </div>
    </ProjectShell>
  );
}

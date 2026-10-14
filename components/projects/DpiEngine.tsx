import { dpi } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectShell } from "./ProjectShell";

/** Example verdicts, shaped like the engine's rule output. */
const flows = [
  { id: "0x1f4a", proto: "TLS 1.3", sni: "api.internal.service", verdict: "forward" },
  { id: "0x2b71", proto: "TLS 1.2", sni: "static.tracker.example", verdict: "drop" },
  { id: "0x0c39", proto: "HTTP", sni: "—", verdict: "forward" },
  { id: "0x44e0", proto: "TLS 1.3", sni: "cdn.assets.example", verdict: "forward" },
];

export function DpiEngine() {
  return (
    <ProjectShell
      id={dpi.id}
      eyebrow={dpi.eyebrow}
      title={dpi.title}
      subtitle={dpi.subtitle}
      summary={dpi.summary}
      thesis={dpi.thesis}
      stack={dpi.stack}
      links={dpi.links}
      pipeline={dpi.pipeline}
      flowLabel="Deep packet inspection pipeline: PCAP input, packet reader, load distribution, flow processors, protocol analysis, SNI extraction, rule engine, forward or drop."
      diagramTitle="Processing pipeline"
      diagramNote="Per-flow affinity across worker threads"
    >
      <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <ul className="space-y-6">
            {dpi.notes.map((note, index) => (
              <Reveal
                key={note.label}
                as="li"
                variant="drift"
                delay={index * 80}
                className="border-l border-line pl-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                  {note.label}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-faint">{note.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal variant="rise" delay={100} className="min-w-0 lg:col-span-7">
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">
                Rule engine output
              </p>
              <p className="rounded border border-line px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ghost">
                Example
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    {["Flow", "Protocol", "SNI", "Verdict"].map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="px-4 py-2 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-ghost"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {flows.map((flow) => (
                    <tr key={flow.id} className="transition-colors duration-300 hover:bg-white/[0.02]">
                      <td className="px-4 py-2.5 font-mono text-[10.5px] text-mute">{flow.id}</td>
                      <td className="px-4 py-2.5 font-mono text-[10.5px] text-mute">{flow.proto}</td>
                      <td className="px-4 py-2.5 font-mono text-[10.5px] text-faint">{flow.sni}</td>
                      <td className="px-4 py-2.5">
                        <span
                          className={
                            flow.verdict === "drop"
                              ? "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-fail/90"
                              : "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent/85"
                          }
                        >
                          <span
                            aria-hidden
                            className={
                              flow.verdict === "drop"
                                ? "h-1.5 w-1.5 rounded-full bg-fail/80"
                                : "h-1.5 w-1.5 rounded-full bg-accent/80"
                            }
                          />
                          {flow.verdict}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-line px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ghost">
              Verdicts derive from flow metadata and the SNI extracted from the TLS handshake
            </p>
          </div>
        </Reveal>
      </div>
    </ProjectShell>
  );
}

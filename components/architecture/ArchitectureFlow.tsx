"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import type { FlowGroup, FlowNode as FlowNodeData } from "@/data/projects";
import { useInViewOnce, useSequence } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function FlowNode({
  node,
  active,
  className,
}: {
  node: FlowNodeData;
  active: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("node", className)}
      data-active={active ? "true" : "false"}
      data-tone={node.tone ?? "default"}
      data-emphasis={node.emphasis ? "true" : "false"}
    >
      <span aria-hidden className="node__dot" />
      <span className="min-w-0">
        <span className="node__text block">{node.label}</span>
        {node.note ? (
          <span className="mt-0.5 block font-mono text-[9px] leading-tight tracking-[0.05em] text-ghost">
            {node.note}
          </span>
        ) : null}
      </span>
    </div>
  );
}

/** Vertical rail between two stacked nodes. */
export function WireY({
  active,
  length = 20,
  className,
}: {
  active: boolean;
  length?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      data-axis="y"
      data-active={active}
      style={{ height: length }}
      className={cn("wire", className)}
    />
  );
}

/** Connector between two architectural phases: horizontal on desktop. */
function PhaseConnector({ active }: { active: boolean }) {
  return (
    <div aria-hidden className="flex items-center justify-center lg:w-12 lg:flex-none">
      {/* mobile: vertical */}
      <div className="flex flex-col items-center py-2 lg:hidden">
        <WireY active={active} length={20} />
        <ChevronDown data-active={active} className="chevron -mt-1 h-3.5 w-3.5" strokeWidth={1.5} />
      </div>
      {/* desktop: horizontal */}
      <div className="hidden w-full items-center lg:flex">
        <span data-axis="x" data-active={active} className="wire" />
        <ChevronRight data-active={active} className="chevron -ml-1 h-3.5 w-3.5" strokeWidth={1.5} />
      </div>
    </div>
  );
}

type ArchitectureFlowProps = {
  groups: FlowGroup[];
  label: string;
  caption?: string;
  className?: string;
  step?: number;
};

/**
 * Architecture diagram: phases distributed horizontally on desktop, folded
 * into a single vertical pipeline on small screens. Nodes light up in flow
 * order once the diagram enters the viewport.
 */
export function ArchitectureFlow({
  groups,
  label,
  caption,
  className,
  step = 120,
}: ArchitectureFlowProps) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>({ amount: 0.18 });
  const total = groups.reduce((sum, group) => sum + group.nodes.length, 0);
  const lit = useSequence(total, inView, step);

  let cursor = 0;
  const indexed = groups.map((group) => {
    const nodes = group.nodes.map((node) => ({ node, index: cursor++ }));
    return { ...group, nodes };
  });

  return (
    <figure ref={ref} className={cn("relative", className)}>
      <div
        role="group"
        aria-label={label}
        className="flex flex-col lg:flex-row lg:items-stretch"
      >
        {indexed.map((group, groupIndex) => (
          <div key={group.id} className="contents">
            {groupIndex > 0 ? (
              <PhaseConnector active={lit > group.nodes[0].index} />
            ) : null}

            <div className="flex min-w-0 flex-1 flex-col rounded-lg border border-line/80 bg-white/[0.012] p-3 pt-2.5">
              <div className="mb-2.5 flex items-baseline gap-2">
                <span className="font-mono text-[9.5px] tracking-[0.16em] text-ghost">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">
                  {group.label}
                </span>
              </div>

              {/* Shorter phases centre themselves against taller neighbours. */}
              <div className="flex flex-1 flex-col justify-center">
                {group.nodes.map(({ node, index }, nodeIndex) => (
                  <div key={node.label} className="flex flex-col">
                    {nodeIndex > 0 ? <WireY active={lit > index} length={16} /> : null}
                    <FlowNode node={node} active={lit > index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {caption ? (
        <figcaption className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.08em] text-ghost">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

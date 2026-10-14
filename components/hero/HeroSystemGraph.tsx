"use client";

import { useCallback, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type GraphNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  side: "left" | "right";
};

const W = 420;
const H = 372;

const nodes: GraphNode[] = [
  { id: "input", label: "User input", x: 74, y: 34, side: "right" },
  { id: "agent", label: "Agent", x: 316, y: 104, side: "left" },
  { id: "tools", label: "Tool calls", x: 116, y: 176, side: "right" },
  { id: "evaluator", label: "Evaluator", x: 322, y: 246, side: "left" },
  { id: "verification", label: "Verification", x: 100, y: 312, side: "right" },
  { id: "result", label: "Result", x: 300, y: 356, side: "left" },
];

const satellites = [
  { x: 44, y: 148 },
  { x: 38, y: 202 },
];

/** Curved link between two nodes, bowed slightly for a circuit-trace feel. */
function linkPath(a: GraphNode, b: GraphNode) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const bow = a.side === "right" ? 16 : -16;
  return `M ${a.x} ${a.y} Q ${mx + bow} ${my} ${b.x} ${b.y}`;
}

/**
 * Hero system visualisation: the request path of an evaluated agent.
 * Pure SVG + CSS animation, ~6 nodes and 5 links, so it stays cheap on
 * laptops and phones. Pointer proximity gently lifts nearby nodes.
 */
export function HeroSystemGraph() {
  const reduced = usePrefersReducedMotion();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const frame = useRef(0);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  const onMove = useCallback(
    (event: React.PointerEvent<SVGSVGElement>) => {
      if (reduced || event.pointerType !== "mouse") return;
      const svg = svgRef.current;
      if (!svg || frame.current) return;
      const rect = svg.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * W;
      const y = ((event.clientY - rect.top) / rect.height) * H;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        setPointer({ x, y });
      });
    },
    [reduced],
  );

  const proximity = (x: number, y: number) => {
    if (!pointer) return 0;
    const distance = Math.hypot(pointer.x - x, pointer.y - y);
    return Math.max(0, 1 - distance / 110);
  };

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Agent request path: user input, agent, tool calls, evaluator, verification, result."
        onPointerMove={onMove}
        onPointerLeave={() => setPointer(null)}
        className="h-auto w-full touch-none"
      >
        {/* baseline grid ticks — instrument framing */}
        <g stroke="var(--color-line)" strokeWidth="1" opacity="0.55">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1="8" x2="16" y1={28 + i * 52} y2={28 + i * 52} />
          ))}
        </g>

        {nodes.slice(0, -1).map((node, index) => {
          const next = nodes[index + 1];
          const path = linkPath(node, next);
          const heat = Math.max(proximity(node.x, node.y), proximity(next.x, next.y));
          return (
            <g key={`${node.id}-${next.id}`}>
              <path
                d={path}
                fill="none"
                stroke="var(--color-line-strong)"
                strokeWidth="1"
                opacity={0.7 + heat * 0.3}
              />
              <path
                d={path}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1.2 + heat * 0.6}
                pathLength={100}
                strokeDasharray="3 97"
                strokeLinecap="round"
                opacity={0.55 + heat * 0.45}
                style={
                  reduced
                    ? { strokeDasharray: "none", opacity: 0.12 }
                    : { animation: `flow-dash 3.6s linear ${index * 0.62}s infinite` }
                }
              />
            </g>
          );
        })}

        {/* tool-call satellites */}
        <g>
          {satellites.map((satellite, index) => (
            <g key={index}>
              <line
                x1={nodes[2].x}
                y1={nodes[2].y}
                x2={satellite.x}
                y2={satellite.y}
                stroke="var(--color-line-strong)"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.75"
              />
              <circle
                cx={satellite.x}
                cy={satellite.y}
                r="2"
                fill="var(--color-ghost)"
                style={
                  reduced ? undefined : { animation: `node-pulse 3.4s ease-in-out ${index}s infinite` }
                }
              />
            </g>
          ))}
        </g>

        {nodes.map((node, index) => {
          const heat = proximity(node.x, node.y);
          return (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={11 + heat * 3}
                fill="var(--color-accent)"
                opacity={0.05 + heat * 0.09}
                style={
                  reduced
                    ? undefined
                    : { animation: `node-pulse 4.2s ease-in-out ${index * 0.7}s infinite` }
                }
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="4.5"
                fill="var(--color-void)"
                stroke="var(--color-accent)"
                strokeWidth="1.2"
                opacity={0.65 + heat * 0.35}
              />
              <circle cx={node.x} cy={node.y} r="1.6" fill="var(--color-accent)" opacity="0.9" />
              <text
                x={node.side === "right" ? node.x + 14 : node.x - 14}
                y={node.y + 3.5}
                textAnchor={node.side === "right" ? "start" : "end"}
                className="font-mono"
                fontSize="9.5"
                letterSpacing="1.1"
                fill={heat > 0.35 ? "var(--color-ink)" : "var(--color-faint)"}
                style={{ textTransform: "uppercase" }}
              >
                {node.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

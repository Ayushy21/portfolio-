import type { FlowGroup } from "./projects";

export const experience = {
  company: "Xelron",
  role: "Software Engineering Intern",
  focus: "AI Benchmarking & LLM Evaluation",
  period: "February 2026 — July 2026",
  mode: "Bengaluru, India",
  summary:
    "Worked on the evaluation side of AI coding agents: building terminal-based tasks that simulate real developer work, then proving whether an agent actually solved them.",
  /** Benchmarking work named on the resume. */
  programs: ["Terminal-Bench", "Finch Project", "Terminus"],
  /** How an evaluation task moves through the system. */
  pipeline: [
    {
      id: "task",
      label: "Task design",
      nodes: [{ label: "Real developer task", note: "debugging / CLI" }],
    },
    {
      id: "execution",
      label: "Execution",
      nodes: [
        { label: "AI coding agent" },
        { label: "Terminal execution", note: "sandboxed" },
      ],
    },
    {
      id: "evidence",
      label: "Evidence",
      nodes: [
        { label: "Execution trace" },
        { label: "Oracle", note: "reference outcome", emphasis: true },
        { label: "Edge-case tests", note: "30+ deterministic tests" },
      ],
    },
    {
      id: "verdict",
      label: "Verdict",
      nodes: [
        { label: "Pass / fail" },
        { label: "Failure analysis", tone: "fail" },
      ],
    },
  ] as FlowGroup[],
  achievements: [
    "Contributed to AI agent benchmarking systems used to evaluate LLM coding-agent performance.",
    "Designed terminal-based evaluation tasks simulating real developer workflows.",
    "Designed 30+ deterministic, oracle-validated edge-case tests for terminal-based agent tasks.",
    "Used oracle validation to keep evaluation deterministic and reproducible.",
    "Analyzed agent execution traces to identify failure patterns.",
    "Partnered with engineers to iterate on automated benchmarking pipeline reliability.",
  ],
} as const;

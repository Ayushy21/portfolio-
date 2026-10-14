export type FlowNode = {
  label: string;
  note?: string;
  tone?: "default" | "fail";
  emphasis?: boolean;
};

export type FlowGroup = {
  id: string;
  label: string;
  nodes: FlowNode[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "external" | "anchor" | "download";
};

/**
 * Per-project URLs. Leave a value empty and its button is simply not
 * rendered — nothing on this site links somewhere that does not exist.
 */
const repos = {
  codesenseDemo: "",
  codesenseSource: "",
  vedaai: "",
  dpi: "",
  chat: "",
};

const fallbackSource = "https://github.com/Ayushy21";

function externalLink(label: string, href: string): ProjectLink[] {
  return href ? [{ label, href, kind: "external" }] : [];
}

/* ------------------------------------------------------------------ */
/* 01 — CodeSense (flagship)                                          */
/* ------------------------------------------------------------------ */

export const codesense = {
  id: "work",
  eyebrow: "01 / Flagship system",
  title: "CodeSense",
  subtitle: "AI Code Review & Evaluation Platform",
  summary:
    "CodeSense is a full-stack AI code-review system that diagnoses bugs, proposes fixes and evaluates the quality of its own generated reviews using a two-layer evaluation architecture.",
  stack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Clerk",
    "Monaco Editor",
    "Tailwind CSS",
    "LLM APIs",
  ],
  links: [
    ...externalLink("Live Demo", repos.codesenseDemo),
    ...externalLink("View Source", repos.codesenseSource || fallbackSource),
    { label: "Architecture", href: "#codesense-architecture", kind: "anchor" },
  ] as ProjectLink[],
  /** Main generation path, grouped into architectural phases. */
  pipeline: [
    { id: "input", label: "Input", nodes: [{ label: "Developer code", note: "editor session" }] },
    {
      id: "agent",
      label: "Review agent",
      nodes: [
        { label: "AI review agent" },
        { label: "Bug diagnosis" },
        { label: "Generated fix" },
      ],
    },
    { id: "surface", label: "Review surface", nodes: [{ label: "Monaco diff", note: "side-by-side" }] },
    {
      id: "evaluation",
      label: "Evaluation",
      nodes: [{ label: "Evaluation system", emphasis: true }],
    },
  ] as FlowGroup[],
  /** The evaluation layer forks, then merges into one score. */
  branches: [
    {
      id: "judge",
      label: "LLM-as-judge",
      kind: "probabilistic",
      items: ["Accuracy", "Clarity", "Completeness", "Hallucination risk"],
    },
    {
      id: "rules",
      label: "Rule-based checks",
      kind: "deterministic",
      items: ["Deterministic validation", "Structure checks", "Expected conditions"],
    },
  ],
  merge: [
    { label: "Final review score", emphasis: true },
    { label: "Analytics dashboard" },
  ] as FlowNode[],
  story: [
    {
      key: "problem",
      label: "Problem",
      body: "LLMs can generate code reviews that sound convincing while being incomplete or incorrect. A confident tone is not evidence, and a reviewer that is wrong 20% of the time without telling you is worse than no reviewer at all.",
    },
    {
      key: "approach",
      label: "Approach",
      body: "Instead of trusting one model response, CodeSense separates generation from evaluation. The reviewer produces the diagnosis; a second layer, plus deterministic rules, decides whether that diagnosis deserves to be trusted.",
    },
    {
      key: "system",
      label: "System",
      body: "The AI reviewer creates the diagnosis and fix. An LLM-as-judge layer scores accuracy, clarity, completeness and hallucination risk. Rule-based validation runs the checks that must never be a matter of opinion. Scores and bug-type distribution are tracked over time in an analytics dashboard.",
    },
    {
      key: "why",
      label: "Why it matters",
      body: "Reliable AI systems require evaluation and verification, not just generation. Once a system can score itself, quality becomes something you can measure, regress-test and improve instead of something you hope for.",
    },
  ],
  decisions: [
    {
      title: "Two layers instead of one judge",
      body: "An LLM judge captures nuance a rule can't express; a rule catches errors a judge is happy to overlook. Running both means disagreement between them is itself a signal worth surfacing.",
    },
    {
      title: "Diff as the review surface",
      body: "A proposed fix is only reviewable if you can see exactly what changes. Monaco's diff view keeps the model's suggestion anchored to real lines of source instead of a prose summary.",
    },
    {
      title: "Persisted review history",
      body: "Scores stored in PostgreSQL via Prisma turn one-off reviews into trends — score movement over time and which bug types recur most.",
    },
    {
      title: "Evaluation shapes the schema",
      body: "Review, score and rule-result records are modelled as first-class rows, so evaluation is part of the data model rather than a log line.",
    },
  ],
  /** Explicitly labelled as an illustrative example — not a measured benchmark. */
  failureCase: {
    heading: "When the model is wrong.",
    scoreLabel: "AI Review Score",
    score: 82,
    metrics: [
      { label: "Accuracy", value: 92 },
      { label: "Clarity", value: 88 },
      { label: "Completeness", value: 84 },
      { label: "Hallucination risk", value: 36, inverted: true },
    ] as { label: string; value: number; inverted?: boolean }[],
    ruleCheck: {
      status: "RULE CHECK FAILED",
      message: "Generated recommendation references a variable not present in the source.",
    },
    explanation:
      "The judge scored this review highly. It reads well, the reasoning is coherent, and every dimension looks acceptable. A deterministic check still rejected it, because the suggested fix referenced a symbol that does not exist in the file.",
    conclusion:
      "This is why the system uses multiple evaluation layers instead of blindly trusting model output.",
  },
  showcase: [
    {
      id: "editor",
      label: "Editor",
      title: "Monaco workspace",
      body: "Paste or open a file, pick a language, and hand it to the review agent.",
    },
    {
      id: "review",
      label: "AI review",
      title: "Diagnosis + fix",
      body: "Structured findings: what is wrong, why it matters, and the concrete change.",
    },
    {
      id: "diff",
      label: "Diff",
      title: "Proposed patch",
      body: "The fix rendered as a diff against the original source, line by line.",
    },
    {
      id: "score",
      label: "Evaluation",
      title: "Scored review",
      body: "Judge dimensions and rule results resolved into a single review score.",
    },
    {
      id: "analytics",
      label: "Analytics",
      title: "Trends",
      body: "Review history, score movement and bug-type distribution over time.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 02 — VedaAI                                                        */
/* ------------------------------------------------------------------ */

export const vedaai = {
  id: "vedaai",
  eyebrow: "02 / Production AI",
  title: "VedaAI",
  subtitle: "AI-Powered Assessment Generation Platform",
  summary:
    "An assessment platform where the hard part is not the prompt. Documents come in, long-running generation jobs run asynchronously, progress streams back to the browser in real time, and finished assessments come out as PDFs.",
  thesis:
    "The interesting part is not just calling an LLM. The system manages long-running AI jobs, progress updates, asynchronous execution and final output generation.",
  stack: [
    "Node.js",
    "Express",
    "BullMQ",
    "Redis",
    "Gemini API",
    "Socket.IO",
    "MongoDB",
    "PDF generation",
  ],
  links: [
    ...externalLink("View Project", repos.vedaai),
    ...externalLink("GitHub", repos.vedaai || fallbackSource),
  ] as ProjectLink[],
  pipeline: [
    {
      id: "ingest",
      label: "Ingest",
      nodes: [{ label: "Document upload" }, { label: "API", note: "request boundary" }],
    },
    {
      id: "orchestration",
      label: "Orchestration",
      nodes: [{ label: "Job queue" }, { label: "BullMQ", note: "workers" }, { label: "Redis", note: "state + cache" }],
    },
    {
      id: "generation",
      label: "Generation",
      nodes: [{ label: "Gemini", emphasis: true }, { label: "Database", note: "persisted output" }],
    },
    {
      id: "delivery",
      label: "Delivery",
      nodes: [
        { label: "Socket.IO" },
        { label: "Real-time progress" },
        { label: "PDF output", emphasis: true },
      ],
    },
  ] as FlowGroup[],
  capabilities: [
    { label: "Background jobs", body: "Generation runs outside the request lifecycle." },
    { label: "Real-time updates", body: "Progress is pushed over sockets, not polled." },
    { label: "Caching", body: "Redis keeps job state and repeated work cheap." },
    { label: "Queue management", body: "BullMQ handles retries, concurrency and ordering." },
    { label: "Document processing", body: "Uploaded source material is parsed before generation." },
    { label: "AI generation", body: "Gemini produces the assessment content." },
    { label: "PDF export", body: "Final output is rendered as a distributable document." },
  ],
};

/* ------------------------------------------------------------------ */
/* 03 — Deep Packet Inspection Engine                                 */
/* ------------------------------------------------------------------ */

export const dpi = {
  id: "dpi",
  eyebrow: "03 / Systems engineering",
  title: "Deep Packet Inspection Engine",
  subtitle: "Multithreaded Network Traffic Analysis in C++",
  summary:
    "A C++17 engine that reads packet captures, distributes flows across worker threads, reconstructs per-flow state, extracts protocol detail including TLS SNI, and applies traffic rules to forward or drop.",
  thesis:
    "Throughput here is a design problem, not a library call: how work is split across threads, how flow state stays consistent, and how much parsing you can do per packet before you fall behind.",
  stack: [
    "C++17",
    "Networking",
    "Packet parsing",
    "Flow tracking",
    "SNI",
    "Traffic rules",
    "Multithreading",
  ],
  links: [...externalLink("GitHub", repos.dpi || fallbackSource)] as ProjectLink[],
  pipeline: [
    {
      id: "capture",
      label: "Capture",
      nodes: [{ label: "PCAP input" }, { label: "Packet reader" }],
    },
    {
      id: "distribution",
      label: "Distribution",
      nodes: [
        { label: "Load distribution", note: "flow hashing" },
        { label: "Flow processors", note: "worker threads", emphasis: true },
      ],
    },
    {
      id: "inspection",
      label: "Inspection",
      nodes: [{ label: "Protocol analysis" }, { label: "SNI extraction", note: "TLS handshake" }],
    },
    {
      id: "policy",
      label: "Policy",
      nodes: [{ label: "Rule engine" }, { label: "Forward / drop", emphasis: true }],
    },
  ] as FlowGroup[],
  notes: [
    { label: "Concurrency", body: "Packets are hashed to flow processors so a single flow stays on one thread and state needs no locking on the hot path." },
    { label: "Parsing", body: "Layered decode from link headers up to TLS, stopping as early as the rule set allows." },
    { label: "Policy", body: "Rules evaluate flow metadata and extracted SNI to decide forward or drop." },
  ],
};

/* ------------------------------------------------------------------ */
/* Supporting work                                                     */
/* ------------------------------------------------------------------ */

export const supportingProjects = [
  {
    id: "chat",
    title: "Real-Time Chat Application",
    subtitle: "Full-stack realtime messaging",
    body: "Live message delivery and online-status indicators over Socket.IO, global client state in Zustand, deployed with end-to-end error handling.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Zustand"],
    highlights: ["Realtime messaging", "Online status", "Deployed"],
    href: repos.chat || fallbackSource,
  },
];

/** Placeholder slot so future AI / data work has a designed home. */
export const upcomingSlot = {
  label: "Next",
  title: "Applied AI / data systems",
  body: "Space reserved for the next evaluation-heavy AI project currently being built.",
};

export const education = {
  institution: "Motilal Nehru National Institute of Technology, Allahabad",
  degree: "B.Tech — Computer Science & Engineering",
  period: "2022 – 2026",
};

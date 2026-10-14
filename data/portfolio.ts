export const selectedProjects = [
  {
    id: "codesense",
    number: "01",
    name: "CodeSense",
    category: "AI ENGINEERING / FULL STACK",
    date: "MAY 2026",
    description:
      "A second pair of eyes for your code. An AI reviewer that finds bugs, proposes fixes, and puts its own answers to the test.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "LLM evaluation"],
    source: "https://github.com/Ayushy21/CodeSense",
    demo: "https://code-sense-bice.vercel.app/",
    details: [
      {
        title: "The idea",
        text: "A convincing code review is not always a correct one. CodeSense makes the quality of the review part of the product.",
      },
      {
        title: "How I built it",
        text: "An AI agent diagnoses bugs and generates fixes, with a Monaco diff view to inspect the changes. A second evaluation layer combines LLM-as-judge scoring with deterministic rule checks.",
      },
      {
        title: "What it measures",
        text: "Accuracy, clarity, completeness, and hallucination risk. A persisted analytics dashboard tracks review history, score trends, and bug-type distribution.",
      },
    ],
  },
  {
    id: "sentinel",
    number: "02",
    name: "Sentinel",
    category: "FEDERATED LEARNING / NETWORK SECURITY",
    date: "AUG 2026",
    description:
      "Smarter network defense, without sharing raw data. Distributed gateways learn together while keeping their traffic local.",
    stack: ["Python", "PyTorch", "PPO / A2C", "Federated learning"],
    source: "https://github.com/Ayushy21/-Sentinel-FRL",
    demo: "",
    details: [
      {
        title: "The idea",
        text: "Detect and mitigate network anomalies across distributed gateways while preserving the privacy of each gateway’s raw traffic data.",
      },
      {
        title: "How I built it",
        text: "A custom multi-pattern traffic simulator feeds a federated reinforcement learning system using PPO and A2C in PyTorch. Federated aggregation merges local policy updates into a global model.",
      },
      {
        title: "How I evaluated it",
        text: "F1, precision, recall, ROC-AUC, and reward stability across normal, congested, and attack scenarios.",
      },
    ],
  },
  {
    id: "chat",
    number: "03",
    name: "Real-Time Chat",
    category: "REAL-TIME CHAT / FULL STACK",
    date: "JUL 2025",
    description:
      "A real-time chat app that keeps the conversation moving. Instant messages, live presence, and a responsive interface.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Zustand"],
    source: "https://github.com/Ayushy21/fullstack-chat-app",
    demo: "https://fullstack-chat-app-qh5w.onrender.com/",
    details: [
      {
        title: "The idea",
        text: "Make conversations feel immediate, with bidirectional messaging and live presence that do not require a page refresh.",
      },
      {
        title: "How I built it",
        text: "React and Zustand manage the client, Socket.IO delivers real-time events, and Node.js with Express provides REST APIs backed by persistent MongoDB data models.",
      },
      {
        title: "The interface",
        text: "A responsive Tailwind CSS and DaisyUI interface brings messaging and online status into one usable workspace.",
      },
    ],
  },
] as const;

export const toolkit = [
  {
    number: "01",
    title: "Intelligence, applied.",
    description: "From a model response to a system you can evaluate.",
    skills: [
      "Python",
      "LangChain",
      "OpenAI Agents SDK",
      "RAG pipelines",
      "LLM evaluation",
      "PyTorch",
      "Reinforcement learning",
    ],
  },
  {
    number: "02",
    title: "The whole product.",
    description: "Interfaces, APIs, and everything that connects them.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "Express",
      "Socket.IO",
      "Tailwind CSS",
    ],
  },
  {
    number: "03",
    title: "Strong foundations.",
    description: "The data structures and infrastructure underneath.",
    skills: [
      "C / C++",
      "DSA",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "AWS",
      "Git & Linux",
      "Docker basics",
    ],
  },
] as const;

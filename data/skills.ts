/** Scannable stack line for a visitor who only reads the first screen. */
export const coreStack = [
  "Python",
  "TypeScript",
  "Next.js",
  "LangChain / LangGraph",
  "LLM evaluation",
  "PostgreSQL",
  "C++",
] as const;

export const breadth = {
  heading: "Beyond the model",
  message: "AI engineering is still software engineering.",
  body: "A model call is one line in a system that also needs schemas, queues, auth, tests and a UI. These are the layers I work across.",
  areas: [
    {
      id: "systems",
      label: "Systems",
      summary: "C++ / networking / multithreading",
      items: ["C++17", "Multithreading", "Packet parsing", "Flow tracking"],
    },
    {
      id: "backend",
      label: "Backend",
      summary: "Node.js / Express / APIs",
      items: ["Node.js", "Express", "REST APIs", "BullMQ + Redis", "Socket.IO"],
    },
    {
      id: "frontend",
      label: "Frontend",
      summary: "Next.js / React / TypeScript",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Monaco Editor"],
    },
    {
      id: "data",
      label: "Data",
      summary: "PostgreSQL / MongoDB / Prisma",
      items: ["PostgreSQL", "MongoDB", "Prisma", "SQL"],
    },
    {
      id: "ai",
      label: "AI",
      summary: "LangChain / LangGraph / OpenAI SDK / LLM evaluation",
      items: [
        "LangChain",
        "LangGraph",
        "OpenAI SDK",
        "LLM-as-judge evaluation",
        "Agent benchmarking",
        "Prompt engineering",
      ],
    },
    {
      id: "tools",
      label: "Tools",
      summary: "Git / GitHub / Postman / Docker basics",
      items: ["Git", "GitHub", "Postman", "Docker basics", "Jupyter"],
    },
  ],
  languages: ["Python", "C++", "TypeScript", "JavaScript", "SQL"],
  libraries: ["NumPy", "Pandas", "Scikit-learn", "OpenCV", "Matplotlib"],
} as const;

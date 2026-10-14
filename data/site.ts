/**
 * Single source of truth for identity + outbound links.
 * Change a value here and it updates everywhere on the site.
 */

export const site = {
  name: "Ayush Yadav",
  role: "Software Engineer · AI & Full Stack",
  location: "Bengaluru, India",
  tagline: "I build AI systems that are evaluated, tested and shipped.",
  description:
    "Ayush Yadav is a software engineer in Bengaluru building thoughtful AI systems and full-stack products. Explore CodeSense, Sentinel, and his work in LLM evaluation at Xelron.",
  availability: "Open to AI / LLM Engineering opportunities",
  url: "https://ayushyadav.dev",
  email: "ayushyadav893972@gmail.com",
  github: "https://github.com/Ayushy21",
  /** Empty string hides every LinkedIn link instead of rendering a dead one. */
  linkedin: "https://www.linkedin.com/in/ayushy1345/",
  leetcode: "https://leetcode.com/u/Ayush_Yadav1345/",
  geeksforgeeks: "https://www.geeksforgeeks.org/profile/ayushyadahhni",
  resume: "/Ayush-Yadav-Resume.pdf",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
] as const;

/**
 * The recurring system metaphor. Each page region owns one stage, and the
 * left rail advances as the visitor scrolls the story.
 */
export const pipelineStages = [
  "INPUT",
  "GENERATE",
  "EVALUATE",
  "VERIFY",
  "OBSERVE",
  "ITERATE",
  "SHIP",
] as const;

export type PipelineStage = (typeof pipelineStages)[number];

/** Section id -> pipeline stage. Drives the rail and the nav highlight. */
export const sectionMap: { id: string; stage: PipelineStage; nav?: string }[] =
  [
    { id: "top", stage: "INPUT" },
    { id: "approach", stage: "GENERATE" },
    { id: "work", stage: "EVALUATE", nav: "#work" },
    { id: "verification", stage: "VERIFY" },
    { id: "vedaai", stage: "OBSERVE", nav: "#work" },
    { id: "dpi", stage: "ITERATE", nav: "#work" },
    { id: "experience", stage: "OBSERVE", nav: "#experience" },
    { id: "engineering", stage: "ITERATE", nav: "#engineering" },
    { id: "about", stage: "SHIP", nav: "#about" },
    { id: "contact", stage: "SHIP" },
  ];

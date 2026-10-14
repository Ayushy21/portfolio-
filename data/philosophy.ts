export const philosophy = {
  statement: "AI output is not ground truth.",
  intro:
    "Generation is the easy half. Everything that makes an AI system trustworthy happens after the model responds — which is where I spend most of my engineering time.",
  stages: [
    {
      index: "01",
      name: "GENERATE",
      body: "Get the model to solve the task.",
      detail: "Prompting, tools and agent structure that actually attempt real work.",
    },
    {
      index: "02",
      name: "EVALUATE",
      body: "Measure correctness, relevance and completeness.",
      detail: "Scored dimensions instead of a vague sense that the output looks fine.",
    },
    {
      index: "03",
      name: "VERIFY",
      body: "Use deterministic checks where possible.",
      detail: "Rules, oracles and structural validation that cannot be talked out of a verdict.",
    },
    {
      index: "04",
      name: "OBSERVE",
      body: "Inspect traces, failures and unusual behavior.",
      detail: "Execution traces tell you what the model did, not what it claimed.",
    },
    {
      index: "05",
      name: "ITERATE",
      body: "Improve prompts, tools, evaluations and architecture.",
      detail: "Each failure pattern becomes a test, then a fix, then a regression guard.",
    },
    {
      index: "06",
      name: "SHIP",
      body: "Turn the system into something people can actually use.",
      detail: "Auth, database, queues, UI, deploys — the unglamorous half of AI work.",
    },
  ],
} as const;

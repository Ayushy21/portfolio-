export const platforms = [
  {
    id: "codeforces",
    platform: "Codeforces",
    standing: "Specialist",
    metricLabel: "Max rating",
    metricValue: 1401,
  },
  {
    id: "leetcode",
    platform: "LeetCode",
    standing: "500+ problems",
    metricLabel: "Rating",
    metricValue: 1631,
  },
] as const;

export const contests = [
  {
    id: "cf-1033",
    contest: "Codeforces Round 1033",
    rank: 248,
    field: 28431,
  },
  {
    id: "lc-167",
    contest: "LeetCode Biweekly Contest 167",
    rank: 7563,
    field: 31000,
  },
  {
    id: "cc-192",
    contest: "CodeChef Starters 192",
    rank: 258,
    field: 21146,
  },
] as const;

/** Hero telemetry — credentials, not marketing counters. */
export const telemetry = [
  {
    id: "xelron",
    value: "Xelron",
    label: "AI Benchmarking & LLM Evaluation",
    meta: "SDE Intern",
  },
  {
    id: "tests",
    value: "30+",
    label: "Deterministic edge-case tests",
    meta: "Deterministic oracle validation",
  },
  {
    id: "leetcode",
    value: "500+",
    label: "LeetCode problems solved",
    meta: "Peak rating 1631",
  },
  {
    id: "codeforces",
    value: "Specialist",
    label: "Codeforces",
    meta: "Max rating 1401",
  },
] as const;

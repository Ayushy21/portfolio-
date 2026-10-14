export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

/** Percentile position, used for contest standings. */
export function topPercent(rank: number, field: number) {
  const pct = (rank / field) * 100;
  return pct < 1 ? pct.toFixed(2) : pct.toFixed(1);
}

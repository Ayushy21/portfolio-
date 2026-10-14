"use client";

import { useEffect, useState } from "react";
import { useCountUp, useInViewOnce } from "@/lib/hooks";
import { formatNumber } from "@/lib/utils";

/**
 * Counts up when scrolled into view. Values that are already on screen at load
 * render at their final number instead — the first screen should be readable
 * before hydration, and without JavaScript at all.
 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className,
  duration,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>({ amount: 0.6 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const belowFold = node.getBoundingClientRect().top > window.innerHeight * 0.85;
    if (!belowFold) return;
    const frame = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(frame);
  }, [ref]);

  const counted = useCountUp(value, animated && inView, duration);
  const shown = animated ? counted : value;

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">
        {prefix}
        {formatNumber(Math.round(shown))}
      </span>
      {suffix}
    </span>
  );
}

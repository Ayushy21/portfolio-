"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInViewOnce } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type RevealVariant = "fade" | "rise" | "drift" | "clip" | "wipe" | "scale-x" | "scale-y";

type RevealProps = {
  children?: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  /** How far into the viewport the element must travel before revealing. */
  offset?: string;
  /** Skip the observer and animate straight away — for above-the-fold content. */
  immediate?: boolean;
  as?: ElementType;
  className?: string;
  id?: string;
  "aria-hidden"?: boolean;
};

/**
 * Scroll reveal driven by CSS (see globals.css) so the main content stays cheap
 * to animate. Several variants exist on purpose — a page where everything fades
 * upward identically reads as a template.
 */
export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  offset = "0px 0px -12% 0px",
  immediate = false,
  as: Tag = "div",
  className,
  ...rest
}: RevealProps) {
  // Threshold stays at 0: a clip-path on the target zeroes its intersection
  // ratio in Chrome, so timing comes from the root margin instead.
  const { ref, inView } = useInViewOnce<HTMLElement>({ amount: 0, rootMargin: offset });
  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  if (immediate) {
    return (
      <Tag data-reveal-now={variant} style={style} className={cn(className)} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={inView ? "true" : "false"}
      style={style}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

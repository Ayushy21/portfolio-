import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "external" | "down" | "right" | "none";
  download?: boolean;
  className?: string;
  ariaLabel?: string;
};

const base =
  "group inline-flex items-center gap-2 rounded-[5px] font-mono text-[11px] uppercase tracking-[0.13em] transition-colors duration-300 sm:text-[11.5px]";

const variants = {
  primary:
    "border border-accent/35 bg-accent/[0.09] px-4 py-2.5 text-ink hover:bg-accent/[0.16] hover:border-accent/55",
  secondary:
    "border border-line bg-white/[0.015] px-4 py-2.5 text-mute hover:text-ink hover:border-line-strong hover:bg-white/[0.035]",
  ghost: "px-1 py-1 text-mute hover:text-ink",
} as const;

export function Action({
  href,
  children,
  variant = "secondary",
  icon = "none",
  download,
  className,
  ariaLabel,
}: ActionProps) {
  const isExternal = href.startsWith("http");
  const iconClass = "arrow-shift h-3.5 w-3.5 flex-none opacity-70";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      {...(download ? { download: "" } : {})}
      className={cn(base, variants[variant], className)}
    >
      <span>{children}</span>
      {icon === "external" ? <ArrowUpRight aria-hidden className={iconClass} /> : null}
      {icon === "down" ? <ArrowDown aria-hidden data-dir="down" className={iconClass} /> : null}
      {icon === "right" ? <ArrowRight aria-hidden data-dir="right" className={iconClass} /> : null}
    </a>
  );
}

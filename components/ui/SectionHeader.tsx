import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  description?: ReactNode;
  align?: "left" | "wide";
  size?: "md" | "lg";
  className?: string;
  titleId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  description,
  size = "md",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <header className={cn("relative", className)}>
      <Reveal variant="drift" className="flex items-center gap-3">
        <span aria-hidden className="h-px w-6 bg-line-strong" />
        <p className="label text-accent/80">{eyebrow}</p>
      </Reveal>

      <Reveal
        variant="clip"
        delay={80}
        className={cn(
          "headline mt-5 text-ink",
          size === "lg"
            ? "text-[clamp(2.4rem,7vw,4.6rem)]"
            : "text-[clamp(1.9rem,4.6vw,3.1rem)]",
        )}
        as="h2"
        id={titleId}
      >
        {title}
      </Reveal>

      {subtitle ? (
        <Reveal variant="fade" delay={160} as="p" className="mt-3 text-base text-mute sm:text-lg">
          {subtitle}
        </Reveal>
      ) : null}

      {description ? (
        <Reveal
          variant="fade"
          delay={220}
          as="div"
          className="prose-body mt-6 max-w-2xl text-[15px] sm:text-base"
        >
          {description}
        </Reveal>
      ) : null}
    </header>
  );
}

import { cn } from "@/lib/utils";

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return <li className={cn("chip list-none", className)}>{children}</li>;
}

export function ChipRow({
  items,
  label,
  className,
}: {
  items: readonly string[];
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      {label ? <span className="label mr-1">{label}</span> : null}
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </ul>
    </div>
  );
}

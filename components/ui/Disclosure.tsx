import { Plus } from "lucide-react";

export function Disclosure({
  title,
  children,
  meta,
}: {
  title: string;
  children: React.ReactNode;
  meta?: string;
}) {
  return (
    <details className="disclosure group border-b border-line last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center gap-4 py-4 text-left transition-colors duration-300 hover:text-ink">
        <Plus
          aria-hidden
          className="disclosure__icon h-3.5 w-3.5 flex-none text-accent/70 transition-transform duration-400"
        />
        <span className="flex-1 text-[14.5px] leading-snug text-ink/90">{title}</span>
        {meta ? (
          <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.12em] text-ghost sm:block">
            {meta}
          </span>
        ) : null}
      </summary>
      <div className="prose-body pb-5 pl-[30px] pr-2 text-[13.5px]">{children}</div>
    </details>
  );
}

import { breadth } from "@/data/skills";
import { ChipRow } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

export function Breadth() {
  return (
    <section id="engineering" aria-labelledby="engineering-title" className="section">
      <div className="shell">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <p className="label text-accent/80">Engineering breadth</p>
            </Reveal>
            <Reveal
              variant="clip"
              delay={70}
              as="h2"
              id="engineering-title"
              className="display mt-6 text-[clamp(2.1rem,6vw,3.6rem)] text-ink"
            >
              {breadth.heading}
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Reveal variant="fade" delay={120} as="p" className="headline text-lg text-ink/90 sm:text-xl">
              {breadth.message}
            </Reveal>
            <Reveal variant="fade" delay={180} as="p" className="prose-body mt-4 text-[14.5px]">
              {breadth.body}
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {breadth.areas.map((area, index) => (
            <Reveal
              key={area.id}
              variant="fade"
              delay={(index % 3) * 80}
              className="bg-void p-5 transition-colors duration-500 hover:bg-white/[0.018]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                  {area.label}
                </h3>
                <span className="font-mono text-[9px] tracking-[0.16em] text-ghost">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2.5 font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint">
                {area.summary}
              </p>
              <ul className="mt-4 space-y-1.5">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span aria-hidden className="h-px w-2.5 flex-none bg-accent/45" />
                    <span className="text-[13px] text-mute">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal variant="fade" className="border-t border-line pt-5">
            <ChipRow items={breadth.languages} label="Languages" />
          </Reveal>
          <Reveal variant="fade" delay={80} className="border-t border-line pt-5">
            <ChipRow items={breadth.libraries} label="Libraries" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

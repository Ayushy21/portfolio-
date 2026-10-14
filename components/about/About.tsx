import { education } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

const paragraphs = [
  "I enjoy engineering systems where AI output cannot simply be trusted.",
  "My work sits between AI agents, evaluation, backend systems and product engineering. I like understanding why a system fails, designing ways to measure it, and then turning the result into software people can actually use.",
  "Outside AI systems, competitive programming has shaped how I approach debugging, edge cases and problem decomposition.",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal variant="drift" className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <p className="label text-accent/80">About</p>
            </Reveal>

            <Reveal
              variant="clip"
              delay={70}
              as="h2"
              id="about-title"
              className="headline mt-6 max-w-xl text-[clamp(1.55rem,3.6vw,2.3rem)] text-ink"
            >
              {paragraphs[0]}
            </Reveal>

            <div className="mt-7 max-w-xl space-y-5">
              {paragraphs.slice(1).map((paragraph, index) => (
                <Reveal
                  key={index}
                  variant="fade"
                  delay={140 + index * 90}
                  as="p"
                  className="prose-body text-[15px] sm:text-base"
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="fade" delay={140} className="border-t border-line pt-5">
              <p className="label">Education</p>
              <p className="mt-4 text-[14.5px] leading-snug text-ink/90">{education.institution}</p>
              <p className="mt-2 text-[13.5px] text-mute">{education.degree}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ghost">
                {education.period}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={220} className="mt-8 border-t border-line pt-5">
              <p className="label">Interests</p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-mute">
                LLM evaluation, generative AI, machine learning, deep learning, computer vision and
                data science.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

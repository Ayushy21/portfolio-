import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  Code2,
  Cpu,
  Download,
  Globe2,
  GraduationCap,
  MapPin,
  Network,
  Terminal,
  Trophy,
} from "lucide-react";
import { Github, Linkedin } from "@/components/portfolio/BrandIcons";
import { Navbar } from "@/components/navigation/Navbar";
import { OrbitalArt } from "@/components/portfolio/OrbitalArt";
import {
  CodeSensePreview,
  CopyEmail,
} from "@/components/portfolio/Interactions";
import {
  ChatPreview,
  SentinelPreview,
} from "@/components/portfolio/ProjectPreviews";
import { Reveal } from "@/components/ui/Reveal";
import { selectedProjects, toolkit } from "@/data/portfolio";
import { site } from "@/data/site";
import { experience } from "@/data/experience";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="section-index">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function ProjectInfo({ index }: { index: number }) {
  const project = selectedProjects[index];
  return (
    <div className="project-info">
      <div className="project-meta mono">
        <span>
          {project.number} / {project.category}
        </span>
        <span>{project.date}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-stack" aria-label="Technologies">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live project <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only">
              {" "}
              — {project.name} (opens in a new tab)
            </span>
          </a>
        )}
        <a href={project.source} target="_blank" rel="noopener noreferrer">
          <Github size={15} aria-hidden="true" /> Source code
          <span className="sr-only">
            {" "}
            — {project.name} (opens in a new tab)
          </span>
        </a>
      </div>
      <details className="project-details">
        <summary>
          Behind the build{" "}
          <span className="detail-plus" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="project-detail-body">
          {project.details.map((detail) => (
            <div key={detail.title}>
              <h4>{detail.title}</h4>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section
          id="top"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-topline mono">
            <span className="availability">
              <span className="status-dot" /> OPEN TO OPPORTUNITIES
            </span>
            <span className="hero-location">
              <MapPin size={12} aria-hidden="true" /> BENGALURU, INDIA
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal immediate variant="rise">
                <p className="hero-intro">
                  Hey, I’m Ayush{" "}
                  <span className="greeting-mark" aria-hidden="true">
                    ✳
                  </span>
                </p>
                <h1 id="hero-title">
                  Engineering
                  <br />
                  <em>what’s next.</em>
                </h1>
              </Reveal>
              <Reveal immediate variant="rise" delay={100}>
                <p className="hero-description">
                  I turn curious ideas into thoughtful software.
                  <br className="desktop-break" /> Building at the intersection
                  of <strong>AI, full stack,</strong>
                  <br className="desktop-break" /> and a healthy obsession with{" "}
                  <strong>“what if?”</strong>
                </p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#work">
                    Explore my work{" "}
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </a>
                  <a className="button button-text" href={site.resume} download>
                    Download CV <Download size={16} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
              <div className="hero-footnote mono">
                <span className="mini-line" /> ENGINEER BY TRAINING. BUILDER BY
                INSTINCT.
              </div>
            </div>
            <Reveal immediate variant="fade" delay={180} className="hero-art">
              <OrbitalArt />
            </Reveal>
          </div>
          <div className="hero-bottom">
            <span className="mono">GOOD IDEAS DESERVE GREAT EXECUTION.</span>
            <a href="#work" className="scroll-cue mono">
              A FEW THINGS I’VE BUILT <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="stack-strip">
          <div className="container stack-strip-inner">
            <span className="mono strip-label">MY EVERYDAY TOOLKIT</span>
            <span>
              <Braces size={18} /> Python
            </span>
            <span>
              <Code2 size={18} /> TypeScript
            </span>
            <span>
              <Globe2 size={18} /> Next.js
            </span>
            <span>
              <Network size={18} /> Node.js
            </span>
            <span>
              <Cpu size={18} /> PyTorch
            </span>
            <span>
              <Terminal size={18} /> C++
            </span>
            <Asterisk className="strip-asterisk" size={24} aria-hidden="true" />
          </div>
        </div>

        <section
          id="work"
          className="section-work container section-space"
          aria-labelledby="work-title"
        >
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel number="01">SELECTED WORK</SectionLabel>
                <h2 id="work-title">
                  Less talk.
                  <br />
                  <em>More building.</em>
                </h2>
              </div>
              <p>
                A few ideas I took from “what if” to working.
                <br />
                Each one, a different kind of challenge.
              </p>
            </div>
          </Reveal>
          <article className="featured-project" aria-label="CodeSense project">
            <div className="featured-visual">
              <div className="visual-topline mono">
                <span>
                  <Asterisk size={14} /> FEATURED PROJECT
                </span>
                <span>01 — CODE THAT CHECKS ITSELF</span>
              </div>
              <CodeSensePreview />
              <div className="visual-bottomline">
                <span>
                  GENERATE <ArrowRight size={11} /> EVALUATE{" "}
                  <ArrowRight size={11} /> VERIFY
                </span>
                <span className="project-visual-mark">c/</span>
              </div>
            </div>
            <ProjectInfo index={0} />
          </article>
          <div className="project-grid">
            <article className="standard-project" aria-label="Sentinel project">
              <SentinelPreview />
              <ProjectInfo index={1} />
            </article>
            <article
              className="standard-project"
              aria-label="Real-Time Chat Application project"
            >
              <ChatPreview />
              <ProjectInfo index={2} />
            </article>
          </div>
          <div className="github-note">
            <span>Always experimenting. Occasionally breaking things.</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          id="experience"
          className="experience-section section-space"
          aria-labelledby="experience-title"
        >
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <div>
                  <SectionLabel number="02">IN THE REAL WORLD</SectionLabel>
                  <h2 id="experience-title">
                    Where curiosity
                    <br />
                    <em>meets responsibility.</em>
                  </h2>
                </div>
                <span className="experience-margin-note mono">
                  REAL TASKS.
                  <br />
                  REAL EDGE CASES.
                  <br />
                  BETTER SYSTEMS.
                </span>
              </div>
            </Reveal>
            <div className="experience-layout">
              <div className="experience-company">
                <div className="company-symbol" aria-hidden="true">
                  x<span>↗</span>
                </div>
                <h3>{experience.company}</h3>
                <span className="mono">FEB — JUL 2026</span>
                <p>
                  <MapPin size={13} aria-hidden="true" /> Bengaluru, India
                </p>
                <a href={site.resume} download className="text-link">
                  The full story in my CV{" "}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <div className="experience-story">
                <div className="role-topline">
                  <h4>{experience.role}</h4>
                  <span className="focus-pill">AI / LLM EVALUATION</span>
                </div>
                <p className="experience-lead">
                  Helping answer a deceptively simple question:
                  <br />
                  <strong>did the AI agent actually solve the task?</strong>
                </p>
                <ul className="experience-points">
                  <li>
                    <Check size={16} />
                    <span>
                      Built real developer scenarios for{" "}
                      <strong>Terminal-Bench, Finch, and Terminus</strong> —
                      from debugging to CLI execution and error handling.
                    </span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>
                      Designed{" "}
                      <strong>
                        30+ deterministic, oracle-validated edge-case tests
                      </strong>{" "}
                      to make evaluation signals more reliable.
                    </span>
                  </li>
                  <li>
                    <Check size={16} />
                    <span>
                      Traced agent failures back to their source, then worked
                      with senior engineers to improve task specs and validation
                      pipelines.
                    </span>
                  </li>
                </ul>
                <div className="experience-process mono">
                  <span>DESIGN A TASK</span>
                  <ArrowRight size={13} />
                  <span>RUN THE AGENT</span>
                  <ArrowRight size={13} />
                  <span>VERIFY THE RESULT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="engineering"
          className="toolkit-section container section-space"
          aria-labelledby="toolkit-title"
        >
          <Reveal>
            <div className="section-heading">
              <div>
                <SectionLabel number="03">THE TOOLKIT</SectionLabel>
                <h2 id="toolkit-title">
                  Different layers.
                  <br />
                  <em>One builder.</em>
                </h2>
              </div>
              <p>
                The best tool is the one that solves the problem.
                <br />
                These are some I reach for.
              </p>
            </div>
          </Reveal>
          <div className="toolkit-grid">
            {toolkit.map((area, i) => (
              <div className="toolkit-card" key={area.number}>
                <div className="toolkit-card-top">
                  {i === 0 ? (
                    <Cpu size={29} strokeWidth={1.3} />
                  ) : i === 1 ? (
                    <Braces size={29} strokeWidth={1.3} />
                  ) : (
                    <Network size={29} strokeWidth={1.3} />
                  )}
                  <span className="mono">/{area.number}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul>
                  {area.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="about-section container"
          aria-labelledby="about-title"
        >
          <div className="about-grid">
            <div className="about-art">
              <div className="about-art-top mono">
                <span>A LITTLE ABOUT ME</span>
                <span>AY / 26</span>
              </div>
              <div className="typographic-portrait" aria-hidden="true">
                <span>a</span>
                <span>y</span>
                <Asterisk />
              </div>
              <div className="about-art-bottom">
                <span className="handwritten">Stay curious.</span>
                <span className="mono">
                  BASED IN INDIA.
                  <br />
                  BUILDING FOR EVERYWHERE.
                </span>
              </div>
            </div>
            <div className="about-copy">
              <SectionLabel number="04">BEYOND THE EDITOR</SectionLabel>
              <h2 id="about-title">
                A builder’s mind.
                <br />
                <em>A beginner’s curiosity.</em>
              </h2>
              <p>
                I’m Ayush, a Computer Science graduate from{" "}
                <strong>MNNIT Allahabad</strong>. I like taking things apart,
                understanding why they work, and putting them back together a
                little better.
              </p>
              <p>
                That instinct takes me from AI agents and distributed learning
                to full-stack apps. Competitive programming keeps me sharp;
                building things people can use keeps me grounded.
              </p>
              <p>
                Outside the code, I’ve served as an{" "}
                <strong>NCC Lance Corporal</strong> and coordinated with the{" "}
                <strong>Nepathaya Committee</strong>. Different settings, the
                same lesson: show up, take ownership, and work well with people.
              </p>
              <div className="education-note">
                <GraduationCap size={24} strokeWidth={1.3} />
                <div>
                  <strong>
                    Motilal Nehru National Institute of Technology Allahabad
                  </strong>
                  <span>
                    B.Tech, Computer Science & Engineering · 2022–2026
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="achievement-band">
            <div className="achievement-intro">
              <Trophy size={21} strokeWidth={1.3} />
              <span className="mono">
                A FEW HARD-EARNED
                <br />
                CHECKPOINTS
              </span>
            </div>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement"
            >
              <strong>
                500<span>+</span>
              </strong>
              <span>
                DSA problems solved <ArrowUpRight size={12} />
              </span>
            </a>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement"
            >
              <strong>1631</strong>
              <span>
                LeetCode peak rating <ArrowUpRight size={12} />
              </span>
            </a>
            <div className="achievement">
              <strong>1401</strong>
              <span>Codeforces · Specialist</span>
            </div>
            <div className="achievement">
              <strong>Alpha</strong>
              <span>NCC ‘C’ Certificate</span>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <div className="contact-topline">
              <SectionLabel number="05">WHAT’S NEXT?</SectionLabel>
              <span className="availability mono">
                <span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY
              </span>
            </div>
            <div className="contact-main">
              <div>
                <h2 id="contact-title">
                  Let’s build
                  <br />
                  <em>something good.</em>
                  <span className="contact-period">*</span>
                </h2>
                <p>
                  Have a problem worth solving, a role in mind,
                  <br />
                  or just a good conversation? I’m all ears.
                </p>
              </div>
              <a
                className="contact-arrow"
                href={`mailto:${site.email}`}
                aria-label="Email Ayush Yadav"
              >
                <ArrowUpRight strokeWidth={1} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-bottom">
              <div className="contact-email">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <CopyEmail />
              </div>
              <div className="social-links">
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub <ArrowUpRight size={13} />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
                </a>
                <a href={site.resume} download>
                  Resume <Download size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a href="#top" className="wordmark" aria-label="Ayush Yadav home">
          <Asterisk aria-hidden="true" className="brand-mark" /> ayush
          <span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Ayush Yadav. Built with intent.</p>
        <a href="#top" className="back-to-top mono">
          BACK TO TOP <ArrowUp size={14} />
        </a>
      </footer>
    </>
  );
}

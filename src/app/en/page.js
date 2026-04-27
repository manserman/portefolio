"use client";
import Header from "../Components/Header";
import Experience from "../Components/Experience";
import data_exp from "../Data/data_experience_en";
import data_form from "../Data/data_formations_en";
import data_comp from "../Data/data_competences_en";

const STACK = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Prisma", "BullMQ"],
  },
  {
    label: "Generative AI",
    items: ["OpenAI", "Anthropic Claude", "Whisper", "Prompt engineering", "Zod schemas"],
  },
  {
    label: "Mobile & Web",
    items: ["React Native", "Expo", "React", "Reanimated", "Next.js"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Caddy", "Hetzner", "GitHub Actions", "GHCR", "Vercel"],
  },
  {
    label: "Payments & Auth",
    items: ["Stripe", "Apple StoreKit 2", "Google Play RTDN", "RevenueCat", "JWT (jose)"],
  },
  {
    label: "Methods",
    items: ["Tests (Vitest, Mockito)", "CI/CD", "Distributed architecture", "AMQP 1.0", "REST · WebSockets"],
  },
];

export default function HomeEn() {
  let experiences = [];
  let formations = [];
  let skillGroups = [];
  try {
    experiences = data_exp() || [];
  } catch (e) {
    console.error("Error loading experiences:", e);
  }
  try {
    formations = data_form() || [];
  } catch (e) {
    console.error("Error loading formations:", e);
  }
  try {
    skillGroups = data_comp() || [];
  } catch (e) {
    console.error("Error loading skills:", e);
  }
  if (!Array.isArray(experiences)) experiences = [];
  if (!Array.isArray(formations)) formations = [];
  if (!Array.isArray(skillGroups)) skillGroups = [];

  return (
    <>
      <Header />

      <main>
        {/* ═══ HERO ═══ */}
        <section id="accueil" className="hero">
          <div className="container">
            <div className="hero-inner">
              <div>
                <div className="hero-eyebrow reveal">
                  <span className="eyebrow">
                    <span className="eyebrow-dot"></span>
                    Building Ascelyo · AI life coach
                  </span>
                </div>

                <h1 className="reveal">
                  <span className="line">Mohamadou Mansour</span>
                  <span className="line italic-accent">Habibou Hamani</span>
                </h1>

                <p className="hero-sub reveal">
                  Software engineer — Java backend, distributed systems,
                  generative AI and mobile. I build systems that last,
                  and a product to help people last:{" "}
                  <a
                    href="https://ascelyo.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ascelyo
                  </a>.
                </p>

                <div className="hero-ctas reveal">
                  <a href="#experiences" className="btn btn-primary">
                    See my experience
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="../files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    Download résumé
                  </a>
                </div>

                <div className="hero-meta reveal">
                  <div className="meta-item">
                    <div className="meta-value">3+ years</div>
                    <div className="meta-label">Pro experience</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">Ascelyo</div>
                    <div className="meta-label">Founder · 2026</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">FR · EN</div>
                    <div className="meta-label">Languages</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">Île-de-France</div>
                    <div className="meta-label">Location</div>
                  </div>
                </div>
              </div>

              {/* Now-card (right column) */}
              <aside className="now-card reveal">
                <header className="now-header">
                  <span className="now-title">Currently building</span>
                  <span className="now-status">Live</span>
                </header>

                <div className="now-rows">
                  <div className="now-row">
                    <div className="now-row-label">Product</div>
                    <div className="now-row-value">
                      <span className="accent">Ascelyo</span> — AI life coach (mobile).
                    </div>
                  </div>
                  <div className="now-row">
                    <div className="now-row-label">Stack</div>
                    <div className="now-row-value">
                      NestJS · React Native · OpenAI · Anthropic · Stripe.
                    </div>
                  </div>
                  <div className="now-row">
                    <div className="now-row-label">Phase</div>
                    <div className="now-row-value">
                      Landing live, app in active development.
                    </div>
                  </div>
                </div>

                <div className="now-cta">
                  <span>Visit the product</span>
                  <a
                    href="https://ascelyo.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ascelyo.app
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section id="apropos" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>About
              </span>
              <h2>
                Backend, AI, mobile —{" "}
                <span className="italic-accent">end to end</span>.
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-text reveal">
                <p>
                  Holder of a <strong>Master&apos;s in MIAGE</strong> (Computer
                  Methods Applied to Business Management) with a specialization
                  in Data Engineering and Decision Science (mention Bien — honors).
                </p>
                <p>
                  Over <strong>three years of experience</strong> in Java backend
                  and distributed systems — at <strong>Autoliv</strong>{" "}
                  (modernization of a safety-critical traceability system,
                  Java 6 → 17), then on the <strong>ORCI project</strong>, a
                  European initiative for AI-driven air-traffic optimization,
                  with a multi-protocol middleware (REST · AMQP 1.0 · RPC).
                </p>
                <p>
                  In parallel, I design and build{" "}
                  <a
                    href="https://ascelyo.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ascelyo
                  </a>{" "}
                  — an AI life coach (mobile) that turns long-term goals into
                  daily actions. From backend (NestJS, Prisma) to mobile (React
                  Native, Expo), through generative AI (OpenAI, Anthropic,
                  Whisper), multi-provider payments and the editorial landing
                  page, I carry the product end to end.
                </p>
              </div>

              <figure className="about-portrait reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="../img/photo_profil.JPG"
                  alt="Mohamadou Mansour Habibou Hamani"
                />
                <figcaption className="about-portrait-tag">
                  Mansour · Île-de-France
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE ═══ */}
        <section id="experiences" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Experience
              </span>
              <h2>
                Four years,{" "}
                <span className="italic-accent">multiple contexts</span>.
              </h2>
              <p>
                From a safety-critical automotive traceability system to a
                mobile AI coach, with a European air-traffic optimization
                project in between.
              </p>
            </div>

            <div className="exp-list">
              {experiences.map((exp, i) => (
                <Experience key={i} exp={exp} imgPrefix="../img/" />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ STACK ═══ */}
        <section id="stack" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Stack
              </span>
              <h2>
                Daily <span className="italic-accent">toolbox</span>.
              </h2>
              <p>
                A selection of what I actually use in production —
                not the full list, just the parts that matter.
              </p>
            </div>

            <div className="stack-grid reveal">
              {STACK.map((row) => (
                <div key={row.label} className="stack-row">
                  <div className="stack-label">{row.label}</div>
                  <div className="stack-tags">
                    {row.items.map((item) => (
                      <span key={item} className="stack-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SKILLS ═══ */}
        <section id="competences" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Skills
              </span>
              <h2>
                From code <span className="italic-accent">to product</span>.
              </h2>
              <p>
                Six articulated domains — from software-engineering
                fundamentals to project management and soft skills.
              </p>
            </div>

            <div className="skills-grid reveal">
              {skillGroups.map((g, i) => (
                <div key={i} className="skills-group">
                  <span className="skills-group-label">
                    {String(i + 1).padStart(2, "0")} · {g.titre}
                  </span>
                  <h3 className="skills-group-title">{g.titre}</h3>
                  {g.summary && (
                    <p className="skills-group-summary">{g.summary}</p>
                  )}
                  <ul className="skills-list">
                    {(g.competences || []).map((c, k) => (
                      <li key={k}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EDUCATION ═══ */}
        <section id="formation" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Education
              </span>
              <h2>
                Bac+5 MIAGE,{" "}
                <span className="italic-accent">dual expertise</span>.
              </h2>
              <p>
                University training in computer science and information
                systems — from algorithmic foundations to decision-system
                architecture.
              </p>
            </div>

            <div className="exp-list">
              {formations.map((f, i) => (
                <article key={i} className="exp-item reveal">
                  <div className="exp-years">
                    <span className="exp-year-from">{f.debut}</span>
                    <span className="exp-year-to">→ {f.fin}</span>
                  </div>
                  <div className="exp-body">
                    <header className="exp-header">
                      <div>
                        <div className="exp-role">{f.intitule_s}</div>
                        <div className="exp-company">
                          {f.institut} · {f.lieu}
                        </div>
                      </div>
                    </header>
                    <p className="exp-detail">{f.detail}</p>
                    {Array.isArray(f.acquis) && f.acquis.length > 0 && (
                      <ul className="exp-missions">
                        {f.acquis.map((a, k) => (
                          <li key={k}>{a}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Contact
              </span>
              <h2>
                Stay <span className="italic-accent">in touch</span>.
              </h2>
              <p>
                To talk about Ascelyo, backend, generative AI — or just to
                say hi.
              </p>
            </div>

            <div className="contact-grid reveal">
              <a href="mailto:mansourh923@gmail.com" className="contact-card">
                <div className="contact-label">Email</div>
                <div className="contact-value">mansourh923@gmail.com</div>
              </a>
              <div className="contact-card">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+33 6 65 15 40 90</div>
              </div>
              <div className="contact-card">
                <div className="contact-label">Location</div>
                <div className="contact-value">Île-de-France, France</div>
              </div>
            </div>

            <div className="contact-cta reveal">
              <a
                href="../files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download résumé
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M12 3v14m0 0l-5-5m5 5l5-5M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://github.com/manserman"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
              <a
                href="https://ascelyo.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Ascelyo →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <strong>Mohamadou Mansour Habibou Hamani</strong> — Software Engineer · Founder of{" "}
            <a
              href="https://ascelyo.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}
            >
              Ascelyo
            </a>
          </div>
          <div className="footer-meta">© 2026 · All rights reserved</div>
        </div>
      </footer>
    </>
  );
}

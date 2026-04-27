"use client";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import data_exp from "./Data/data_experience";
import data_form from "./Data/data_formations";
import data_comp from "./Data/data_competences";

const STACK = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Prisma", "BullMQ"],
  },
  {
    label: "IA générative",
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
    label: "Paiement & Auth",
    items: ["Stripe", "Apple StoreKit 2", "Google Play RTDN", "RevenueCat", "JWT (jose)"],
  },
  {
    label: "Méthodes",
    items: ["Tests (Vitest, Mockito)", "CI/CD", "Architecture distribuée", "AMQP 1.0", "REST · WebSockets"],
  },
];

export default function Home() {
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
    console.error("Error loading competences:", e);
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
                    Building Ascelyo · Coach de vie IA
                  </span>
                </div>

                <h1 className="reveal">
                  <span className="line">Mohamadou Mansour</span>
                  <span className="line italic-accent">Habibou Hamani</span>
                </h1>

                <p className="hero-sub reveal">
                  Ingénieur logiciel — backend Java, systèmes distribués,
                  IA générative et mobile. Je construis des systèmes qui durent,
                  et un produit qui aide à durer :{" "}
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
                    Voir mes expériences
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="./files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    Télécharger le CV
                  </a>
                </div>

                <div className="hero-meta reveal">
                  <div className="meta-item">
                    <div className="meta-value">3+ ans</div>
                    <div className="meta-label">Expérience pro</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">Ascelyo</div>
                    <div className="meta-label">Fondateur · 2026</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">FR · EN</div>
                    <div className="meta-label">Langues</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-value">Île-de-France</div>
                    <div className="meta-label">Localisation</div>
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
                    <div className="now-row-label">Produit</div>
                    <div className="now-row-value">
                      <span className="accent">Ascelyo</span> — coach de vie IA mobile.
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
                      Landing live, app en développement actif.
                    </div>
                  </div>
                </div>

                <div className="now-cta">
                  <span>Voir le produit</span>
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
                <span className="eyebrow-dot"></span>À propos
              </span>
              <h2>
                Backend, IA, mobile —{" "}
                <span className="italic-accent">de bout en bout</span>.
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-text reveal">
                <p>
                  Diplômé d'un <strong>Master MIAGE</strong> (Méthodes Informatiques
                  Appliquées à la Gestion des Entreprises) avec spécialisation
                  Ingénierie des Données et de la Décision, mention Bien.
                </p>
                <p>
                  Plus de <strong>trois années d'expérience</strong> en backend Java
                  et systèmes distribués — chez{" "}
                  <strong>Autoliv</strong> (modernisation d'un système de
                  traçabilité critique pour la sécurité automobile, Java 6 → 17),
                  puis sur le <strong>projet ORCI</strong>, initiative européenne
                  d'optimisation du trafic aérien par IA, avec un middleware
                  multi-protocole (REST · AMQP 1.0 · RPC).
                </p>
                <p>
                  En parallèle, je conçois et développe{" "}
                  <a
                    href="https://ascelyo.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ascelyo
                  </a>{" "}
                  — un coach de vie IA mobile qui transforme des objectifs long
                  terme en actions quotidiennes. Du backend (NestJS, Prisma) au
                  mobile (React Native, Expo), en passant par l'IA générative
                  (OpenAI, Anthropic, Whisper), les paiements multi-provider et la
                  landing éditoriale, je porte le produit de bout en bout.
                </p>
              </div>

              <figure className="about-portrait reveal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="./img/photo_profil.JPG"
                  alt="Mohamadou Mansour Habibou Hamani"
                />
                <figcaption className="about-portrait-tag">
                  Mansour · Île-de-France
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ═══ FORMATION ═══ */}
        <section id="formation" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Formation
              </span>
              <h2>
                Bac+5 MIAGE,{" "}
                <span className="italic-accent">double compétence</span>.
              </h2>
              <p>
                Formation universitaire en informatique et systèmes
                d&apos;information — du fondement algorithmique à
                l&apos;architecture décisionnelle.
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

        {/* ═══ EXPERIENCES ═══ */}
        <section id="experiences" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Expériences
              </span>
              <h2>
                Quatre années,{" "}
                <span className="italic-accent">plusieurs contextes</span>.
              </h2>
              <p>
                D'un système de traçabilité de sécurité automobile à un coach IA
                mobile, en passant par un projet européen d'optimisation du trafic
                aérien.
              </p>
            </div>

            <div className="exp-list">
              {experiences.map((exp, i) => (
                <Experience key={i} exp={exp} />
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
                Outillage <span className="italic-accent">au quotidien</span>.
              </h2>
              <p>
                Sélection de ce que j'utilise effectivement en production —
                pas la liste complète, juste ce qui compte.
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

        {/* ═══ COMPÉTENCES ═══ */}
        <section id="competences" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Compétences
              </span>
              <h2>
                Du code <span className="italic-accent">au produit</span>.
              </h2>
              <p>
                Six domaines, articulés — des fondamentaux du génie logiciel à
                la conduite de projet et au savoir-être.
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

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="section">
          <div className="container section-inner">
            <div className="section-header reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Contact
              </span>
              <h2>
                Garder <span className="italic-accent">le lien</span>.
              </h2>
              <p>
                Pour échanger sur Ascelyo, le backend, l'IA générative — ou
                simplement dire bonjour.
              </p>
            </div>

            <div className="contact-grid reveal">
              <a href="mailto:mansourh923@gmail.com" className="contact-card">
                <div className="contact-label">Email</div>
                <div className="contact-value">mansourh923@gmail.com</div>
              </a>
              <div className="contact-card">
                <div className="contact-label">Téléphone</div>
                <div className="contact-value">06 65 15 40 90</div>
              </div>
              <div className="contact-card">
                <div className="contact-label">Localisation</div>
                <div className="contact-value">Île-de-France</div>
              </div>
            </div>

            <div className="contact-cta reveal">
              <a
                href="./files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Télécharger mon CV
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
            <strong>Mohamadou Mansour Habibou Hamani</strong> — Ingénieur Logiciel · Fondateur d'
            <a
              href="https://ascelyo.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}
            >
              Ascelyo
            </a>
          </div>
          <div className="footer-meta">© 2026 · Tous droits réservés</div>
        </div>
      </footer>
    </>
  );
}

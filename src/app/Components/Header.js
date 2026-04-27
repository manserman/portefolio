"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COPY = {
  fr: {
    apropos: "À propos",
    experiences: "Expériences",
    stack: "Stack",
    competences: "Compétences",
    formation: "Formation",
    contact: "Contact",
    cta: "Voir Ascelyo →",
    altLocaleLabel: "EN",
    altLocaleHref: "/en",
    altLocaleAria: "Switch to English",
  },
  en: {
    apropos: "About",
    experiences: "Experience",
    stack: "Stack",
    competences: "Skills",
    formation: "Education",
    contact: "Contact",
    cta: "Visit Ascelyo →",
    altLocaleLabel: "FR",
    altLocaleHref: "/",
    altLocaleAria: "Passer en français",
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const t = isEn ? COPY.en : COPY.fr;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeHref = isEn ? "/en#accueil" : "#accueil";
  const link = (anchor) => (isEn ? `/en#${anchor}` : `#${anchor}`);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href={homeHref} className="nav-logo">
          <span className="nav-logo-mark">M</span>
          <span>Mansour</span>
        </a>
        <nav className="nav-links">
          <a href={link("apropos")} className="nav-link">{t.apropos}</a>
          <a href={link("experiences")} className="nav-link">{t.experiences}</a>
          <a href={link("stack")} className="nav-link">{t.stack}</a>
          <a href={link("competences")} className="nav-link">{t.competences}</a>
          <a href={link("formation")} className="nav-link">{t.formation}</a>
          <a href={link("contact")} className="nav-link">{t.contact}</a>
          <a
            href={t.altLocaleHref}
            className="nav-locale"
            aria-label={t.altLocaleAria}
          >
            {t.altLocaleLabel}
          </a>
          <a
            href="https://ascelyo.app"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            {t.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

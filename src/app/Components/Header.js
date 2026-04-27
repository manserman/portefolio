"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#accueil" className="nav-logo">
          <span className="nav-logo-mark">M</span>
          <span>Mansour</span>
        </a>
        <nav className="nav-links">
          <a href="#apropos" className="nav-link">À propos</a>
          <a href="#experiences" className="nav-link">Expériences</a>
          <a href="#stack" className="nav-link">Stack</a>
          <a href="#competences" className="nav-link">Compétences</a>
          <a href="#formation" className="nav-link">Formation</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href="https://ascelyo.app"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Voir Ascelyo →
          </a>
        </nav>
      </div>
    </header>
  );
}

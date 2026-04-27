"use client";
import { useEffect } from "react";

export default function RevealClient() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}

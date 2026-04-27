"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealClient() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(".reveal:not(.visible)");
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
  }, [pathname]);

  return null;
}

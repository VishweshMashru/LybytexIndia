"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // On every route change: reset all reveal elements then re-observe
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");

    // First strip the visible class so elements that came from another page reset
    els.forEach(el => el.classList.remove("visible"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay so the DOM has settled after navigation
    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
        .forEach(el => obs.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, [pathname]); // re-run every time the route changes

  return null;
}

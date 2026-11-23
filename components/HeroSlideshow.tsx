"use client";

import { useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

const INTERVAL_MS = 6000;

/**
 * Full-bleed background slideshow for the hero: crossfades between images one by one,
 * with a slow zoom on the visible slide. The first image is server-rendered and loads
 * eagerly (it's the LCP element); the rest load lazily. Holds on the first slide for
 * reduced-motion users and pauses while the tab is hidden.
 */
export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;

    const stop = () => clearInterval(timer);
    const start = () => {
      stop();
      if (reduce.matches || document.hidden) return;
      timer = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL_MS);
    };

    start();
    reduce.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);
    return () => {
      stop();
      reduce.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
    };
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-roledescription="slideshow">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === active ? s.alt : ""}
          aria-hidden={i !== active}
          width={1672}
          height={941}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          className={`hero-slide absolute inset-0 h-full w-full object-cover ${i === active ? "is-active" : ""}`}
        />
      ))}
    </div>
  );
}

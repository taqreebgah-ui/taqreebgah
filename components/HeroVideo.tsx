"use client";

import { useEffect, useRef, useState } from "react";

const SOURCES = [
  { minWidth: 1280, src: "/video/hero-1080.mp4" },
  { minWidth: 768, src: "/video/hero-720.mp4" },
  { minWidth: 0, src: "/video/hero-540.mp4" },
];

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Cinematic background video for the hero.
 * The static fallback image (rendered by the page) paints first and stays as the LCP element;
 * the video is only attached after mount, sized to the viewport, and faded in once playing.
 * Skipped entirely for reduced-motion users and data-saver / very slow connections.
 */
export function HeroVideo({ poster }: { poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const constrained = conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "");

    const pick = () => {
      if (reduce.matches || constrained) {
        setSrc(null);
        setPlaying(false);
        return;
      }
      const w = window.innerWidth * Math.min(window.devicePixelRatio || 1, 1.5);
      setSrc(SOURCES.find((s) => w >= s.minWidth)!.src);
    };

    pick();
    reduce.addEventListener("change", pick);
    return () => reduce.removeEventListener("change", pick);
  }, []);

  // Pause while the hero is off-screen to save battery/CPU.
  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  if (!src) return null;

  return (
    <video
      ref={ref}
      key={src}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={`hero-media absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-out ${
        playing ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

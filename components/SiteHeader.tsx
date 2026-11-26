"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavSearch } from "@/components/NavSearch";

/* Each curve = two strings from same start/end, deeper string droops more. 13 bulbs each */
const FAIRY_LIGHTS: [string, number][] = [
  // Left curve — shallow string (0%–50%)
  ["0%", 1], ["4%", 4], ["8%", 7], ["12.5%", 10], ["17%", 12], ["21%", 13], ["25%", 14], ["29%", 13], ["33%", 12], ["37.5%", 10], ["42%", 7], ["46%", 4], ["50%", 1],
  // Left curve — deep string (bulbs centred on curve)
  ["0%", 1], ["4%", 9], ["8%", 16], ["12.5%", 22], ["17%", 26], ["21%", 28], ["25%", 29], ["29%", 28], ["33%", 26], ["37.5%", 22], ["42%", 16], ["46%", 9], ["50%", 1],
  // Right curve — shallow string (50%–100%)
  ["50%", 1], ["54%", 4], ["58%", 7], ["62.5%", 10], ["67%", 12], ["71%", 13], ["75%", 14], ["79%", 13], ["83%", 12], ["87.5%", 10], ["92%", 7], ["96%", 4], ["100%", 1],
  // Right curve — deep string (bulbs centred on curve)
  ["50%", 1], ["54%", 9], ["58%", 16], ["62.5%", 22], ["67%", 26], ["71%", 28], ["75%", 29], ["79%", 28], ["83%", 26], ["87.5%", 22], ["92%", 16], ["96%", 9], ["100%", 1],
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore Venues" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "fixed inset-x-0" : "sticky"} header-solid top-0 z-50 border-b`}>
      <div className="px-5 py-1 sm:px-8 lg:px-12">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="shrink-0" aria-label="Taqreebgah home">
            <Image
              src="/brand_name.png"
              alt="Taqreebgah"
              width={180}
              height={50}
              className="h-10 w-auto md:h-11"
              priority
              unoptimized
            />
          </Link>
          <nav className="hidden justify-center gap-10 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                className={`text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  pathname === n.to ? "text-terracotta" : "text-foreground/80 hover:text-terracotta"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 justify-self-end">
            <NavSearch className="hidden w-80 py-1.5! sm:flex xl:w-96" />
            <button className="text-cocoa lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-border/60 px-5 py-6 sm:px-8 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} href={n.to} onClick={() => setOpen(false)} className="font-serif text-2xl text-cocoa">
              {n.label}
            </Link>
          ))}
          <NavSearch onSearch={() => setOpen(false)} className="sm:hidden" />
        </nav>
      )}
      {/* Fairy lights hanging below navbar */}
      <div className="header-fairy-lights" aria-hidden="true">
        <svg className="header-fairy-svg" viewBox="0 0 100 36" preserveAspectRatio="none">
          {/* Left curve — shallow + deep strings from same endpoints */}
          <path d="M 0,1 Q 25,27 50,1" stroke="#a08866" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
          <path d="M 0,1 Q 25,57 50,1" stroke="#a08866" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
          {/* Right curve — shallow + deep strings from same endpoints */}
          <path d="M 50,1 Q 75,27 100,1" stroke="#a08866" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
          <path d="M 50,1 Q 75,57 100,1" stroke="#a08866" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        </svg>
        {FAIRY_LIGHTS.map(([left, top], i) => (
          <span key={i} className="fairy-bulb" style={{ left, top }} />
        ))}
      </div>
    </header>
  );
}

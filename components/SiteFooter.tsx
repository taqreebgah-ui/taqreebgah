"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Sparkle } from "./Botanical";
import { categories, exploreHref, EVENT_PLANNERS } from "@/lib/venues";

export function SiteFooter() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="mt-16 border-t border-border bg-card md:mt-24">
      <div className="grid gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 md:gap-12 md:py-16 lg:grid-cols-5 lg:px-12">
        <div>
          <Image
            src="/brand_name.png"
            alt="Taqreebgah"
            width={180}
            height={50}
            className="h-10 w-auto"
            unoptimized
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Taqreebgah — Discover venues and event planners across Karachi for every celebration.
          </p>
          <div className="mt-6 flex gap-4 text-olive">
            <a href="#" aria-label="Instagram" className="hover:text-terracotta"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-terracotta"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Categories</p>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.label}>
                <Link href={exploreHref({ category: c.label })} className="hover:text-terracotta">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Discover</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/explore" className="hover:text-terracotta">Explore Venues</Link></li>
            <li><Link href={exploreHref({ category: EVENT_PLANNERS })} className="hover:text-terracotta">Explore Event Planners</Link></li>
            <li><Link href="/#occasions" className="hover:text-terracotta">Browse by Occasion</Link></li>
            <li><Link href="/#areas" className="hover:text-terracotta">Browse by Area</Link></li>
            <li><Link href="/about" className="hover:text-terracotta">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-terracotta">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-olive" /> taqreebgah@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-olive" /> 03311347822</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-olive" /> 03334706676</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-5 text-sm text-muted-foreground">New venues, planners and planning notes from across Karachi, sent gently.</p>
          <form className="mt-4 flex border-b border-olive" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="text-xs uppercase tracking-[0.2em] text-olive">Join</button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-border px-5 py-6 text-xs text-muted-foreground">
        <Sparkle className="h-2.5 w-2.5 text-terracotta" /> © {year} Taqreebgah <Sparkle className="h-2.5 w-2.5 text-terracotta" />
      </div>
    </footer>
  );
}

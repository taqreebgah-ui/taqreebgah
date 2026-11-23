"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Sparkle } from "./Botanical";

export function SiteFooter() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="grid gap-12 px-12 py-16 md:grid-cols-2 lg:grid-cols-4">
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
            A curated home for Pakistan's most beautiful wedding and celebration venues.
          </p>
          <div className="mt-6 flex gap-4 text-olive">
            <a href="#" aria-label="Instagram" className="hover:text-terracotta"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-terracotta"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/explore" className="hover:text-terracotta">All Venues</Link></li>
            <li><Link href="/about" className="hover:text-terracotta">About Us</Link></li>
            <li><Link href="/list-your-venue" className="hover:text-terracotta">List Your Venue</Link></li>
            <li><Link href="/contact" className="hover:text-terracotta">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-olive" /> taqreebgah@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-olive" /> 03311347822</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-olive" /> 03334706676</li>
            <li>Lahore · Karachi · Islamabad</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-5 text-sm text-muted-foreground">Seasonal venue edits and planning notes, sent gently.</p>
          <form className="mt-4 flex border-b border-olive" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="text-xs uppercase tracking-[0.2em] text-olive">Join</button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-border py-6 text-xs text-muted-foreground">
        <Sparkle className="h-2.5 w-2.5 text-terracotta" /> © {year} Taqreebgah <Sparkle className="h-2.5 w-2.5 text-terracotta" />
      </div>
    </footer>
  );
}

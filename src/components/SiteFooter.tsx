import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/taqreebgah-logo.png.asset.json";
import { Sparkle } from "./Botanical";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <img src={logo.url} alt="Taqreebgah" className="h-14 w-auto mix-blend-multiply" loading="lazy" width={1270} height={450} />
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
            <li><Link to="/explore" className="hover:text-terracotta">All Venues</Link></li>
            <li><Link to="/about" className="hover:text-terracotta">About Us</Link></li>
            <li><Link to="/list-your-venue" className="hover:text-terracotta">List Your Venue</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-olive" /> hello@taqreebgah.pk</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-olive" /> +92 300 0000000</li>
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
        <Sparkle className="h-2.5 w-2.5 text-terracotta" /> © {new Date().getFullYear()} Taqreebgah <Sparkle className="h-2.5 w-2.5 text-terracotta" />
      </div>
    </footer>
  );
}

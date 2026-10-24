import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/taqreebgah-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore Venues" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-2 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Link to="/" className="shrink-0" aria-label="Taqreebgah home">
          <img src={logo.url} alt="Taqreebgah" className="h-12 w-auto md:h-14" width={1270} height={450} />
        </Link>
        <nav className="hidden justify-center gap-10 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-terracotta data-[status=active]:text-terracotta"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/list-your-venue" className="btn-olive hidden sm:inline-flex">
            List Your Venue
          </Link>
          <button className="text-cocoa lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-border/60 px-6 py-6 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-serif text-2xl text-cocoa">
              {n.label}
            </Link>
          ))}
          <Link to="/list-your-venue" onClick={() => setOpen(false)} className="btn-olive w-fit">
            List Your Venue
          </Link>
        </nav>
      )}
    </header>
  );
}

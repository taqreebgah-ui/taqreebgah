"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavSearch } from "@/components/NavSearch";

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
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
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
                className={`text-[0.78rem] uppercase tracking-[0.18em] transition-colors ${
                  pathname === n.to ? "text-terracotta" : "text-foreground/80 hover:text-terracotta"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <NavSearch className="hidden w-64 py-1.5! sm:flex xl:w-72" />
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
    </header>
  );
}

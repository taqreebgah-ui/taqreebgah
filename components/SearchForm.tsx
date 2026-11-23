"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { SelectField } from "@/components/SelectField";
import { availableAreas, occasionTypes } from "@/lib/venues";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 bg-card px-6 py-4">
      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">{label}</span>
      {children}
    </label>
  );
}

export function SearchForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative z-10 mx-auto -mt-16 grid max-w-5xl gap-px overflow-hidden rounded-sm border border-border bg-border shadow-soft md:grid-cols-[1fr_1fr_1fr_auto] mx-5 md:mx-auto"
    >
      <SelectField label="Preferred Area" placeholder="Any area in Karachi" options={availableAreas.map((a) => a.area)} />
      <SelectField label="Your Occasion" placeholder="Any occasion" options={occasionTypes} />
      <Field label="Number of Guests">
        <input
          type="number"
          placeholder="e.g. 300"
          className="h-7 w-full border-b border-border/70 bg-transparent font-serif text-lg text-cocoa outline-none transition-colors placeholder:font-sans placeholder:text-sm placeholder:text-muted-foreground focus:border-terracotta"
        />
      </Field>
      <Link href="/explore" className="btn-olive rounded-none py-6">
        <Search className="h-4 w-4" /> Explore Venues
      </Link>
    </form>
  );
}

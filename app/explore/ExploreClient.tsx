"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import {
  venues,
  eventPlanners,
  categories,
  findCategory,
  areaOf,
  areaInfo,
  occasionInfo,
  formatPKR,
  EVENT_PLANNERS,
  type Category,
  type Venue,
  type EventPlanner,
} from "@/lib/venues";
import { VenueCard } from "@/components/VenueCard";
import { EventPlannerCard } from "@/components/EventPlannerCard";
import { ExploreFilters, defaultFilters, BUDGET_MAX, CAPACITY_MAX, type Filters } from "@/components/ExploreFilters";
import { Sparkle } from "@/components/Botanical";
import Link from "next/link";

function matchesQuery(fields: (string | string[])[], q: string) {
  if (!q) return true;
  const haystack = fields.flat().join(" ").toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((term) => haystack.includes(term));
}

function inBudget(price: number, f: Filters) {
  return price >= f.budgetMin && price <= f.budgetMax;
}

const ALL = "All";

const range = (values: number[], fmt: (n: number) => string) => {
  if (!values.length) return "";
  const [lo, hi] = [Math.min(...values), Math.max(...values)];
  return lo === hi ? fmt(lo) : `${fmt(lo)} – ${fmt(hi)}`;
};

type Fact = { label: string; value: string };

type Detail = {
  key: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  chipsLabel: string;
  chips: { label: string; onClick?: () => void }[];
  facts: Fact[];
  emptyText: string;
};

/** Facts derived from a set of venue listings (and optionally planners). Empty values are dropped. */
function listingFacts(list: Venue[], planners: EventPlanner[] = []): Fact[] {
  const facts: Fact[] = [
    { label: "Venues listed", value: list.length ? String(list.length) : "" },
    { label: "Planners listed", value: planners.length ? String(planners.length) : "" },
    { label: "Areas", value: [...new Set(list.map(areaOf))].join(", ") },
    { label: "Guest capacity", value: range(list.flatMap((v) => [v.capacity.min, v.capacity.max]), (n) => n.toLocaleString("en-US")) },
    { label: "Indicative prices", value: range(list.map((v) => v.price), formatPKR) },
  ];
  return facts.filter((f) => f.value);
}

function categoryDetail(category: Category): Detail {
  const isPlanners = category.label === EVENT_PLANNERS;
  return {
    key: `category-${category.label}`,
    image: category.image,
    imageAlt: `${category.label} in Karachi`,
    eyebrow: category.tagline,
    title: `${category.label} in Karachi`,
    description: category.description,
    chipsLabel: "Popular for",
    chips: category.popularFor.map((label) => ({ label })),
    facts: isPlanners
      ? [
          { label: "Planners listed", value: String(eventPlanners.length) },
          { label: "Indicative starting prices", value: range(eventPlanners.map((p) => p.price), formatPKR) },
          { label: "Services include", value: [...new Set(eventPlanners.flatMap((p) => p.services))].slice(0, 6).join(", ") },
        ].filter((f) => f.value && f.value !== "0")
      : listingFacts(venues.filter((v) => v.type === category.type)),
    emptyText: `Listings for ${category.label.toLowerCase()} are coming soon.`,
  };
}

function occasionDetail(occasion: string, pickCategory: (c: string) => void): Detail {
  const info = occasionInfo[occasion];
  return {
    key: `occasion-${occasion}`,
    image: info.image,
    imageAlt: `${occasion} setting`,
    eyebrow: "Your occasion",
    title: occasion,
    description: info.description,
    chipsLabel: "Often planned at",
    chips: info.popularCategories.map((label) => ({ label, onClick: () => pickCategory(label) })),
    facts: listingFacts(
      venues.filter((v) => v.eventTypes.includes(occasion)),
      eventPlanners.filter((p) => p.specialties.includes(occasion)),
    ),
    emptyText: `We don't have listings for ${occasion.toLowerCase()} yet — try “Any occasion” to see every venue and planner.`,
  };
}

function areaDetail(area: string): Detail {
  const listed = venues.filter((v) => areaOf(v) === area);
  const info = areaInfo(area);
  return {
    key: `area-${area}`,
    image: info.image,
    imageAlt: `A venue in ${area}, Karachi`,
    eyebrow: "Preferred area",
    title: `${area}, Karachi`,
    description: info.description,
    chipsLabel: "Venue types here",
    chips: [...new Set(listed.map((v) => v.type))].map((label) => ({ label })),
    facts: listingFacts(listed).filter((f) => f.label !== "Areas"),
    emptyText: `No venues are listed in ${area} yet.`,
  };
}

/** A filter's details: photo, description, related tags and facts from current listings. */
function DetailBlock({ d, compact }: { d: Detail; compact: boolean }) {
  return (
    <div className={`overflow-hidden border border-border bg-card ${compact ? "flex flex-col" : "flex flex-col md:grid md:grid-cols-[14rem_1fr] xl:grid-cols-[18rem_1fr]"}`}>
      <img src={d.image} alt={d.imageAlt} loading="lazy" className={`w-full object-cover ${compact ? "h-40" : "h-44 md:h-full md:min-h-48"}`} />
      <div className={compact ? "p-5" : "p-5 md:p-6"}>
        <p className="eyebrow">{d.eyebrow}</p>
        <h2 className={`mt-2 font-serif text-cocoa ${compact ? "text-2xl" : "text-2xl md:text-3xl"}`}>{d.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{d.description}</p>

        {d.chips.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-xs font-medium text-cocoa">{d.chipsLabel}:</span>
            {d.chips.map((c) =>
              c.onClick ? (
                <button
                  key={c.label}
                  onClick={c.onClick}
                  className="rounded bg-peach/40 px-2 py-0.5 text-xs text-cocoa transition-colors hover:bg-terracotta hover:text-white"
                >
                  {c.label}
                </button>
              ) : (
                <span key={c.label} className="rounded bg-peach/40 px-2 py-0.5 text-xs text-cocoa">{c.label}</span>
              ),
            )}
          </div>
        )}

        {d.facts.length > 0 ? (
          <dl className={`mt-5 grid gap-4 border-t border-border pt-4 ${compact ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4"}`}>
            {d.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[0.65rem] uppercase tracking-[0.15em] text-terracotta">{f.label}</dt>
                <dd className="mt-1 text-sm text-cocoa">{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mt-5 border-t border-border pt-4 text-sm text-cocoa">{d.emptyText}</p>
        )}
      </div>
    </div>
  );
}

export function ExploreClient({
  query = "",
  initialCategory = ALL,
  initialOccasion = ALL,
  initialArea = ALL,
}: {
  query?: string;
  initialCategory?: string;
  initialOccasion?: string;
  initialArea?: string;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({ ...defaultFilters, occasion: initialOccasion, area: initialArea });

  const selected = findCategory(category);
  const showPlanners = category === ALL || category === EVENT_PLANNERS;
  const showVenues = category !== EVENT_PLANNERS;

  const filteredVenues = useMemo(() => {
    if (!showVenues) return [];
    return venues.filter((venue) => {
      const cat = categories.find((c) => c.type === venue.type);
      if (
        !matchesQuery(
          [venue.name, venue.area, areaOf(venue), "Karachi", venue.type, cat?.label ?? "", venue.vibe, venue.eventTypes, venue.amenities],
          query,
        )
      ) {
        return false;
      }
      if (selected && venue.type !== selected.type) return false;
      if (filters.occasion !== ALL && !venue.eventTypes.includes(filters.occasion)) return false;
      if (filters.area !== ALL && areaOf(venue) !== filters.area) return false;
      if (!inBudget(venue.price, filters)) return false;
      if (venue.capacity.max < filters.capacityMin || venue.capacity.min > filters.capacityMax) return false;
      if (filters.vibes.length > 0 && !filters.vibes.some((v) => venue.vibe.includes(v))) return false;
      return true;
    });
  }, [showVenues, selected, filters, query]);

  // Guest capacity and ambiance don't apply to planners. Planners have no area data yet,
  // so they're only shown when no specific area is selected.
  const filteredEventPlanners = useMemo(() => {
    if (!showPlanners) return [];
    return eventPlanners.filter((planner) => {
      if (!matchesQuery([planner.name, "Karachi", "Event Planner", planner.services, planner.specialties], query)) return false;
      if (filters.occasion !== ALL && !planner.specialties.includes(filters.occasion)) return false;
      if (filters.area !== ALL) return false;
      if (!inBudget(planner.price, filters)) return false;
      return true;
    });
  }, [showPlanners, filters, query]);

  const totalResults = filteredVenues.length + filteredEventPlanners.length;
  const heading = category === ALL ? "Venues & Planners" : category;
  const noun = category === ALL ? "listings" : category.toLowerCase();

  // A category with no listings at all (not just filtered out) gets an honest "coming soon" message.
  const categoryIsEmpty =
    !!selected &&
    (selected.label === EVENT_PLANNERS ? eventPlanners.length === 0 : !venues.some((v) => v.type === selected.type));

  // Range and style filters are summarised in text rather than given their own blocks.
  const k = (n: number) => `PKR ${(n / 1000).toFixed(0)}K`;
  const refinements = [
    (filters.budgetMin > 0 || filters.budgetMax < BUDGET_MAX) && `Budget ${k(filters.budgetMin)}–${k(filters.budgetMax)}`,
    (filters.capacityMin > 0 || filters.capacityMax < CAPACITY_MAX) && `${filters.capacityMin}–${filters.capacityMax} guests (venues)`,
    filters.vibes.length > 0 && `Ambiance: ${filters.vibes.join(", ")}`,
  ].filter(Boolean) as string[];

  // One details block per active "subject" filter: category, occasion and area.
  const details: Detail[] = [
    ...(selected ? [categoryDetail(selected)] : []),
    ...(filters.occasion !== ALL && occasionInfo[filters.occasion] ? [occasionDetail(filters.occasion, setCategory)] : []),
    ...(filters.area !== ALL ? [areaDetail(filters.area)] : []),
  ];

  const activeFilterCount = [
    filters.area !== ALL,
    filters.occasion !== ALL,
    filters.budgetMin > 0 || filters.budgetMax < BUDGET_MAX,
    filters.capacityMin > 0 || filters.capacityMax < CAPACITY_MAX,
    filters.vibes.length > 0,
  ].filter(Boolean).length;

  const resetAll = () => {
    setCategory(ALL);
    setFilters(defaultFilters);
  };

  return (
    <div className="min-h-screen">
      {/* Compact Header */}
      <section className="border-b border-border/40 bg-gradient-to-b from-peach/20 to-background">
        <div className="px-5 py-5 sm:px-8 md:py-6 lg:px-12">
          <div className="flex flex-col gap-4 xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-8">
            <div>
              <h1 className="font-serif text-2xl text-cocoa sm:text-3xl">
                Explore <span className="text-terracotta">{heading}</span>
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {totalResults} {totalResults === 1 ? "listing" : "listings"} in Karachi
                {query && (
                  <>
                    {" "}for <span className="text-cocoa">“{query}”</span>{" "}
                    <Link href="/explore" className="ml-1 text-terracotta underline-offset-2 hover:underline">
                      Clear
                    </Link>
                  </>
                )}
              </p>
            </div>

            {/* Category Pills - Centered */}
            <div
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 xl:mx-0 xl:justify-center xl:overflow-visible xl:px-0 xl:pb-0 [&::-webkit-scrollbar]:hidden"
              role="group" aria-label="What are you looking for?">
              {[ALL, ...categories.map((c) => c.label)].map((label) => (
                <button
                  key={label}
                  onClick={() => setCategory(label)}
                  aria-pressed={category === label}
                  className={`shrink-0 cursor-pointer whitespace-nowrap px-4 py-1.5 text-sm font-medium transition-all ${
                    category === label
                      ? "bg-terracotta text-white"
                      : "border border-border bg-background text-muted-foreground hover:border-terracotta hover:text-cocoa"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="hidden xl:block"></div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="flex px-5 sm:px-8 lg:px-12">
        {/* Left Sidebar - Filters (desktop) */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-border bg-background py-4 pr-4 lg:block xl:w-72">
          <ExploreFilters filters={filters} onFiltersChange={setFilters} category={category} />
        </aside>

        {/* Filters drawer (mobile & tablet) */}
        {filtersOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
            <button
              aria-label="Close filters"
              className="absolute inset-0 bg-cocoa/40 backdrop-blur-[2px]"
              onClick={() => setFiltersOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 flex w-[85vw] max-w-sm flex-col bg-background shadow-soft">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-serif text-xl text-cocoa">Refine results</span>
                <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="text-cocoa">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                <ExploreFilters filters={filters} onFiltersChange={setFilters} category={category} />
              </div>
              <div className="border-t border-border p-4">
                <button onClick={() => setFiltersOpen(false)} className="btn-olive w-full">
                  Show {totalResults} {totalResults === 1 ? "result" : "results"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="min-w-0 flex-1 py-4 lg:pl-6">
          {details.length > 0 && (
            <div className={`mb-6 grid gap-4 ${details.length === 2 ? "md:grid-cols-2" : details.length === 3 ? "md:grid-cols-2 2xl:grid-cols-3" : ""}`}>
              {details.map((d) => (
                <DetailBlock key={d.key} d={d} compact={details.length > 1} />
              ))}
            </div>
          )}

          {/* Results Bar */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="max-w-3xl text-sm text-muted-foreground">
              <p>
                {details.length === 0
                  ? "Banquet halls, marquees, restaurants, farmhouses and event planners across Karachi."
                  : `Showing ${totalResults} ${totalResults === 1 ? "match" : "matches"}`}
                {refinements.length > 0 && <> · {refinements.join(" · ")}</>}
              </p>
              <p className="mt-1 text-xs">
                Prices shown are indicative and may cover different services. Please confirm the latest pricing,
                packages and availability directly with the venue or event planner.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={() => setFiltersOpen(true)}
                className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-xs text-cocoa transition-colors hover:border-terracotta lg:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-terracotta px-1.5 text-[0.6rem] text-white">{activeFilterCount}</span>
                )}
              </button>
              <select className="border border-border bg-card px-3 py-1.5 text-xs text-cocoa transition-colors hover:border-terracotta focus:border-terracotta focus:outline-none">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
            </div>
          </div>

          {/* Results grid */}
          {totalResults > 0 ? (
            <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 min-[480px]:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {filteredVenues.map((venue) => (
                <VenueCard key={venue.name} v={venue} />
              ))}
              {filteredEventPlanners.map((planner) => (
                <EventPlannerCard key={planner.name} planner={planner} />
              ))}
            </div>
          ) : categoryIsEmpty ? (
            <div className="border border-border bg-card px-6 py-20 text-center">
              <Sparkle className="mx-auto mb-4 h-10 w-10 text-terracotta/60" />
              <h3 className="font-serif text-xl text-cocoa">No {noun} listed yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We're adding {noun} across Karachi. In the meantime, explore the other categories.
              </p>
              <button
                onClick={resetAll}
                className="mt-6 border border-border px-4 py-2 text-sm transition-colors hover:border-terracotta hover:text-terracotta"
              >
                View all listings
              </button>
            </div>
          ) : (
            <div className="border border-border bg-card px-6 py-20 text-center">
              <Sparkle className="mx-auto mb-4 h-10 w-10 text-terracotta/60" />
              <h3 className="font-serif text-xl text-cocoa">No {noun} found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your area, occasion, budget or guest count to discover more options.
              </p>
              <button
                onClick={resetAll}
                className="mt-6 border border-border px-4 py-2 text-sm transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { cities, vibes, venueTypes } from "@/lib/venues";

export type Filters = {
  eventType: string;
  city: string;
  budgetMin: number;
  budgetMax: number;
  capacityMin: number;
  capacityMax: number;
  vibes: string[];
  venueType: string;
};

type ExploreFiltersProps = {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
};

export function ExploreFilters({ filters, onFiltersChange }: ExploreFiltersProps) {
  const updateFilter = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleVibe = (vibe: string) => {
    const newVibes = filters.vibes.includes(vibe)
      ? filters.vibes.filter((v) => v !== vibe)
      : [...filters.vibes, vibe];
    updateFilter("vibes", newVibes);
  };

  const resetFilters = () => {
    onFiltersChange({
      eventType: "All",
      city: "All",
      budgetMin: 0,
      budgetMax: 2000000,
      capacityMin: 0,
      capacityMax: 2000,
      vibes: [],
      venueType: "All",
    });
  };

  const activeFilterCount = [
    filters.city !== "All",
    filters.budgetMin > 0 || filters.budgetMax < 2000000,
    filters.capacityMin > 0 || filters.capacityMax < 2000,
    filters.vibes.length > 0,
    filters.venueType !== "All",
  ].filter(Boolean).length;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <h3 className="text-sm font-semibold text-cocoa">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-xs text-terracotta hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* City Filter */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Location</label>
        <select
          value={filters.city}
          onChange={(e) => updateFilter("city", e.target.value)}
          className="w-full rounded border border-border bg-background px-2.5 py-1.5 text-xs text-cocoa focus:border-terracotta focus:outline-none"
        >
          <option value="All">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Budget Range */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Price Range</label>
        <div className="space-y-3">
          <div>
            <input
              type="range"
              min="0"
              max="2000000"
              step="50000"
              value={filters.budgetMin}
              onChange={(e) => updateFilter("budgetMin", parseInt(e.target.value))}
              className="w-full accent-terracotta"
            />
            <div className="mt-1 text-xs text-muted-foreground">
              <span>Min: PKR {(filters.budgetMin / 1000).toFixed(0)}K</span>
            </div>
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="2000000"
              step="50000"
              value={filters.budgetMax}
              onChange={(e) => updateFilter("budgetMax", parseInt(e.target.value))}
              className="w-full accent-terracotta"
            />
            <div className="mt-1 text-xs text-muted-foreground">
              <span>Max: PKR {(filters.budgetMax / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Capacity */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Guest Capacity</label>
        <div className="space-y-3">
          <div>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={filters.capacityMin}
              onChange={(e) => updateFilter("capacityMin", parseInt(e.target.value))}
              className="w-full accent-terracotta"
            />
            <div className="mt-1 text-xs text-muted-foreground">
              <span>Min: {filters.capacityMin} guests</span>
            </div>
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={filters.capacityMax}
              onChange={(e) => updateFilter("capacityMax", parseInt(e.target.value))}
              className="w-full accent-terracotta"
            />
            <div className="mt-1 text-xs text-muted-foreground">
              <span>Max: {filters.capacityMax} guests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vibe */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Ambiance</label>
        <div className="flex flex-wrap gap-1.5">
          {vibes.map((vibe) => (
            <button
              key={vibe}
              onClick={() => toggleVibe(vibe)}
              className={`rounded px-2 py-1 text-xs transition-all ${
                filters.vibes.includes(vibe)
                  ? "bg-terracotta text-white"
                  : "bg-peach/30 text-cocoa hover:bg-peach/50"
              }`}
            >
              {vibe}
            </button>
          ))}
        </div>
      </div>

      {/* Venue Type */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Venue Type</label>
        <select
          value={filters.venueType}
          onChange={(e) => updateFilter("venueType", e.target.value)}
          className="w-full rounded border border-border bg-background px-2.5 py-1.5 text-xs text-cocoa focus:border-terracotta focus:outline-none"
        >
          <option value="All">All Types</option>
          {venueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

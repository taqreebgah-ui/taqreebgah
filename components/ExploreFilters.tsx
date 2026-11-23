"use client";

import { availableAreas, occasionTypes, vibes, EVENT_PLANNERS } from "@/lib/venues";

export type Filters = {
  occasion: string;
  area: string;
  budgetMin: number;
  budgetMax: number;
  capacityMin: number;
  capacityMax: number;
  vibes: string[];
};

export const BUDGET_MAX = 2000000;
export const CAPACITY_MAX = 2000;

export const defaultFilters: Filters = {
  occasion: "All",
  area: "All",
  budgetMin: 0,
  budgetMax: BUDGET_MAX,
  capacityMin: 0,
  capacityMax: CAPACITY_MAX,
  vibes: [],
};

type ExploreFiltersProps = {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  /** Selected category; guest capacity and ambiance only apply to physical venues. */
  category: string;
};

export function ExploreFilters({ filters, onFiltersChange, category }: ExploreFiltersProps) {
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleVibe = (vibe: string) => {
    const newVibes = filters.vibes.includes(vibe)
      ? filters.vibes.filter((v) => v !== vibe)
      : [...filters.vibes, vibe];
    updateFilter("vibes", newVibes);
  };

  const plannersOnly = category === EVENT_PLANNERS;

  const activeFilterCount = [
    filters.area !== "All",
    filters.occasion !== "All",
    filters.budgetMin > 0 || filters.budgetMax < BUDGET_MAX,
    filters.capacityMin > 0 || filters.capacityMax < CAPACITY_MAX,
    filters.vibes.length > 0,
  ].filter(Boolean).length;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <h3 className="text-sm font-semibold text-cocoa">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={() => onFiltersChange(defaultFilters)}
            className="text-xs text-terracotta hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Area Filter — only Karachi areas that currently have listings */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Preferred Area</label>
        <select
          value={filters.area}
          onChange={(e) => updateFilter("area", e.target.value)}
          className="w-full rounded border border-border bg-background px-2.5 py-1.5 text-xs text-cocoa focus:border-terracotta focus:outline-none"
        >
          <option value="All">All areas in Karachi</option>
          {availableAreas.map(({ area }) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Occasion Filter */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Your Occasion</label>
        <select
          value={filters.occasion}
          onChange={(e) => updateFilter("occasion", e.target.value)}
          className="w-full rounded border border-border bg-background px-2.5 py-1.5 text-xs text-cocoa focus:border-terracotta focus:outline-none"
        >
          <option value="All">Any occasion</option>
          {occasionTypes.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Budget Range */}
      <div>
        <label className="mb-2 block text-xs font-medium text-cocoa">Your Budget (PKR)</label>
        <div className="space-y-3">
          <div>
            <input
              type="range"
              min="0"
              max={BUDGET_MAX}
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
              max={BUDGET_MAX}
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

      {/* Guest Capacity — physical venues only */}
      {!plannersOnly && (
        <div>
          <label className="mb-2 block text-xs font-medium text-cocoa">Number of Guests</label>
          <div className="space-y-3">
            <div>
              <input
                type="range"
                min="0"
                max={CAPACITY_MAX}
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
                max={CAPACITY_MAX}
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
      )}

      {/* Vibe — physical venues only */}
      {!plannersOnly && (
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
      )}
    </div>
  );
}

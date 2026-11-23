"use client";

import { useState, useMemo } from "react";
import { venues, occasions, eventPlanners } from "@/lib/venues";
import { VenueCard } from "@/components/VenueCard";
import { EventPlannerCard } from "@/components/EventPlannerCard";
import { ExploreFilters, type Filters } from "@/components/ExploreFilters";
import { Divider, Sparkle, FloralCorner } from "@/components/Botanical";

export default function ExplorePage() {
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [filters, setFilters] = useState<Filters>({
    eventType: "All",
    city: "All",
    budgetMin: 0,
    budgetMax: 2000000,
    capacityMin: 0,
    capacityMax: 2000,
    vibes: [],
    venueType: "All",
  });

  const isEventPlannersView = selectedEvent === "Event planners";

  const filteredVenues = useMemo(() => {
    if (isEventPlannersView) return [];
    return venues.filter((venue) => {
      if (selectedEvent !== "All" && !venue.eventTypes.includes(selectedEvent)) {
        return false;
      }
      if (filters.city !== "All" && venue.city !== filters.city) {
        return false;
      }
      if (venue.price < filters.budgetMin || venue.price > filters.budgetMax) {
        return false;
      }
      if (venue.capacity.max < filters.capacityMin || venue.capacity.min > filters.capacityMax) {
        return false;
      }
      if (filters.vibes.length > 0 && !filters.vibes.some((v) => venue.vibe.includes(v))) {
        return false;
      }
      if (filters.venueType !== "All" && venue.type !== filters.venueType) {
        return false;
      }
      return true;
    });
  }, [selectedEvent, filters, isEventPlannersView]);

  const filteredEventPlanners = useMemo(() => {
    if (!isEventPlannersView) return [];
    return eventPlanners.filter((planner) => {
      if (filters.city !== "All" && planner.city !== filters.city) {
        return false;
      }
      return true;
    });
  }, [filters, isEventPlannersView]);

  const totalResults = isEventPlannersView ? filteredEventPlanners.length : filteredVenues.length;
  const eventTypes = ["All", ...occasions];

  return (
    <div className="min-h-screen">
      {/* Compact Header */}
      <section className="border-b border-border/40 bg-gradient-to-b from-peach/20 to-background">
        <div className="px-12 py-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
            <div>
              <h1 className="font-serif text-3xl text-cocoa">
                Explore <span className="text-terracotta">{isEventPlannersView ? "Event Planners" : "Venues"}</span>
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {totalResults} {isEventPlannersView ? "event planners" : "venues"} available
              </p>
            </div>

            {/* Event Type Pills - Centered */}
            <div className="flex justify-center gap-2">
              {eventTypes.map((event) => (
                <button
                  key={event}
                  onClick={() => setSelectedEvent(event)}
                  className={`cursor-pointer px-4 py-1.5 text-sm font-medium transition-all ${
                    selectedEvent === event
                      ? "bg-terracotta text-white"
                      : "border border-border bg-background text-muted-foreground hover:border-terracotta hover:text-cocoa"
                  }`}
                >
                  {event}
                </button>
              ))}
            </div>

            <div></div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="flex px-12">
        {/* Left Sidebar - Filters */}
        <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r border-border bg-background py-4 pr-4">
          <ExploreFilters filters={filters} onFiltersChange={setFilters} />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 pl-6">
          {/* Results Bar */}
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {selectedEvent !== "All" && !isEventPlannersView && `${selectedEvent} celebrations`}
              {filters.city !== "All" && ` in ${filters.city}`}
            </div>

            <select className="border border-border bg-card px-3 py-1.5 text-xs text-cocoa transition-colors hover:border-terracotta focus:border-terracotta focus:outline-none">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>

          {/* Grid - 5 columns */}
          {totalResults > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {isEventPlannersView
                ? filteredEventPlanners.map((planner) => (
                    <EventPlannerCard key={planner.name} planner={planner} />
                  ))
                : filteredVenues.map((venue) => (
                    <VenueCard key={venue.name} v={venue} />
                  ))}
            </div>
          ) : (
            <div className="border border-border bg-card px-6 py-20 text-center">
              <Sparkle className="mx-auto mb-4 h-10 w-10 text-terracotta/60" />
              <h3 className="font-serif text-xl text-cocoa">
                No {isEventPlannersView ? "event planners" : "venues"} found
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Adjust your filters to discover more {isEventPlannersView ? "event planners" : "venues"}
              </p>
              <button
                onClick={() => {
                  setSelectedEvent("All");
                  setFilters({
                    eventType: "All",
                    city: "All",
                    budgetMin: 0,
                    budgetMax: 2000000,
                    capacityMin: 0,
                    capacityMax: 2000,
                    vibes: [],
                    venueType: "All",
                  });
                }}
                className="mt-6 border border-border px-4 py-2 text-sm transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

import Link from "next/link";
import { MapPin, Star, Briefcase } from "lucide-react";
import type { EventPlanner } from "@/lib/venues";

export function EventPlannerCard({ planner }: { planner: EventPlanner }) {
  return (
    <article className="group cursor-pointer">
      <Link href="/explore" className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card">
          <img
            src={planner.image}
            alt={planner.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Rating Badge */}
          {planner.rating && (
            <div className="absolute right-2 top-2 flex items-center gap-0.5 rounded-md bg-white px-2 py-1 shadow-sm">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-gray-900">{planner.rating}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-2">
          {/* Location & Badge */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Karachi
            </span>
            <span className="rounded bg-terracotta/10 px-2 py-0.5 text-xs text-terracotta">Event Planner</span>
          </div>

          {/* Title */}
          <h3 className="mt-1 font-semibold text-sm text-cocoa line-clamp-1 group-hover:text-terracotta transition-colors">
            {planner.name}
          </h3>

          {/* Services */}
          <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <Briefcase className="h-3 w-3" />
            <span className="line-clamp-1">{planner.services.slice(0, 2).join(", ")}</span>
          </div>

          {/* Price & Portfolio */}
          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-muted-foreground">From approx. </span>
              <span className="font-semibold text-sm text-cocoa">{planner.priceDisplay}</span>
            </div>
            {planner.portfolioCount && (
              <span className="text-xs text-muted-foreground">
                {planner.portfolioCount}+ events
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

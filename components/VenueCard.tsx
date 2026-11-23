import Link from "next/link";
import { MapPin, Users, Star } from "lucide-react";
import { venueSlug, type Venue } from "@/lib/venues";

export function VenueCard({ v }: { v: Venue }) {
  return (
    <article className="group cursor-pointer">
      <Link href={`/venues/${venueSlug(v)}`} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card">
          <img
            src={v.image}
            alt={v.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Rating Badge */}
          {v.rating && (
            <div className="absolute right-2 top-2 flex items-center gap-0.5 rounded-md bg-white px-2 py-1 shadow-sm">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-gray-900">{v.rating}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-2">
          {/* Location & Type */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {v.area}, Karachi
            </span>
            <span>{v.type}</span>
          </div>

          {/* Title */}
          <h3 className="mt-1 font-semibold text-sm text-cocoa line-clamp-1 group-hover:text-terracotta transition-colors">
            {v.name}
          </h3>

          {/* Capacity */}
          <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{v.capacity.min}–{v.capacity.max} guests</span>
          </div>

          {/* Price & Reviews */}
          <div className="mt-2 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-muted-foreground">Approx. </span>
              <span className="font-semibold text-sm text-cocoa">{v.priceDisplay}</span>
            </div>
            {v.reviewCount && (
              <span className="text-xs text-muted-foreground">
                {v.reviewCount} reviews
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

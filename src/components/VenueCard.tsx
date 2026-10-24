import { Link } from "@tanstack/react-router";
import { MapPin, Users } from "lucide-react";
import type { Venue } from "@/lib/venues";

export function VenueCard({ v }: { v: Venue }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-sm">
        <img src={v.image} alt={v.name} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
        <span className="absolute left-4 top-4 bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-cocoa">{v.type}</span>
      </div>
      <div className="pt-5">
        <h3 className="text-2xl">{v.name}</h3>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-terracotta" />{v.area}, {v.city}</span>
          <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-terracotta" />{v.capacity}</span>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Starting from</p>
            <p className="font-serif text-xl text-cocoa">{v.price}</p>
          </div>
          <Link to="/explore" className="text-xs uppercase tracking-[0.2em] text-olive underline-offset-4 hover:text-terracotta hover:underline">View Details</Link>
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone, Star, Users, MapPin, Wallet, Building2 } from "lucide-react";
import { venues, venueSlug, findVenue, areaOf, categories, exploreHref } from "@/lib/venues";
import { VenueCard } from "@/components/VenueCard";
import { Divider } from "@/components/Botanical";

const PHONE = "03311347822";
const EMAIL = "taqreebgah@gmail.com";

export function generateStaticParams() {
  return venues.map((v) => ({ slug: venueSlug(v) }));
}

export async function generateMetadata({ params }: PageProps<"/venues/[slug]">) {
  const venue = findVenue((await params).slug);
  if (!venue) return { title: "Venue not found — Taqreebgah" };
  const title = `${venue.name} — ${venue.type} in ${venue.area}, Karachi | Taqreebgah`;
  return {
    title,
    description: venue.description,
    openGraph: { title, description: venue.description, type: "website", images: [venue.image] },
  };
}

export default async function VenuePage({ params }: PageProps<"/venues/[slug]">) {
  const venue = findVenue((await params).slug);
  if (!venue) notFound();

  const category = categories.find((c) => c.type === venue.type);
  const others = venues.filter((v) => v !== venue).slice(0, 4);
  const inquiry = `mailto:${EMAIL}?subject=${encodeURIComponent(`Inquiry about ${venue.name} (Taqreebgah)`)}&body=${encodeURIComponent(
    `Venue: ${venue.name}, ${venue.area}\nOccasion:\nPreferred date:\nNumber of guests:\nYour name and phone number:\n`,
  )}`;

  const facts = [
    { icon: Users, label: "Guest capacity", value: `${venue.capacity.min.toLocaleString("en-US")}–${venue.capacity.max.toLocaleString("en-US")} guests` },
    { icon: Wallet, label: "Indicative price", value: `Approx. ${venue.priceDisplay}` },
    { icon: MapPin, label: "Location", value: `${venue.area}, Karachi` },
    { icon: Building2, label: "Venue type", value: venue.type },
  ];

  return (
    <>
      <div className="px-5 pt-6 sm:px-8 md:pt-10 lg:px-12">
        <Link href={category ? exploreHref({ category: category.label }) : "/explore"} className="inline-flex items-center gap-2 text-sm text-terracotta hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to {category ? category.label : "Explore"}
        </Link>
      </div>

      {/* Overview */}
      <section className="grid gap-8 px-5 pt-6 sm:px-8 md:pt-8 lg:gap-12 lg:px-12 lg:grid-cols-[1.3fr_1fr]">
        <img
          src={venue.image}
          alt={`${venue.name}, ${venue.type.toLowerCase()} in ${venue.area}, Karachi`}
          width={1280}
          height={960}
          fetchPriority="high"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
        <div>
          <p className="eyebrow">
            {venue.type} · {areaOf(venue)}, Karachi
          </p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-5xl md:text-6xl">{venue.name}</h1>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-cocoa">{venue.rating}</span> · {venue.reviewCount} reviews
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{venue.description}</p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 min-[420px]:grid-cols-2 border-t border-border pt-6">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.15em] text-terracotta">{label}</dt>
                  <dd className="mt-1 text-sm text-cocoa">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={inquiry} className="btn-olive">
              <Mail className="h-4 w-4" /> Send Inquiry
            </a>
            <a href={`tel:+92${PHONE.slice(1)}`} className="btn-line">
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Prices are indicative and may not include the same services as other listings. Please confirm the latest
            pricing, packages and availability before making plans.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="grid gap-10 px-5 pt-14 sm:px-8 md:grid-cols-3 md:gap-12 md:pt-20 lg:px-12">
        <div>
          <p className="eyebrow">Facilities</p>
          <ul className="mt-4 space-y-2 text-cocoa">
            {venue.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span className="text-[0.5rem] text-terracotta">◆</span> {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Suitable occasions</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {venue.eventTypes.map((o) => (
              <Link key={o} href={exploreHref({ occasion: o })} className="border border-border px-3 py-1 font-serif text-lg text-cocoa transition-colors hover:border-terracotta hover:text-terracotta">
                {o}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Ambiance</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {venue.vibe.map((v) => (
              <span key={v} className="rounded bg-peach/40 px-3 py-1 text-sm text-cocoa">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* More venues */}
      <section className="px-5 pt-16 sm:px-8 md:pt-24 lg:px-12">
        <div className="text-center">
          <p className="eyebrow">Keep exploring</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            More venues in <em className="text-terracotta">Karachi</em>
          </h2>
          <Divider className="mt-5" />
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-10">
          {others.map((v) => (
            <VenueCard key={v.name} v={v} />
          ))}
        </div>
      </section>
    </>
  );
}

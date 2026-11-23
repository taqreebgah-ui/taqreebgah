import Link from "next/link";
import { Compass, Scale, MessageCircle, ArrowRight } from "lucide-react";
import { venues, occasions, occasionImages } from "@/lib/venues";
import { SearchForm } from "@/components/SearchForm";
import { VenueCard } from "@/components/VenueCard";
import { Divider, FloralCorner, Sparkle } from "@/components/Botanical";

export const metadata = {
  title: "Taqreebgah — Where Beautiful Celebrations Begin",
  description: "Find wedding, mehndi, barat and walima venues across Pakistan. Compare spaces and contact venues easily.",
  openGraph: {
    title: "Taqreebgah — Where Beautiful Celebrations Begin",
    description: "Find wedding, mehndi, barat and walima venues across Pakistan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function SectionHead({ eyebrow, title, italic }: { eyebrow: string; title: string; italic?: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl md:text-5xl">
        {title} {italic && <em className="text-terracotta">{italic}</em>}
      </h2>
      <Divider className="mt-5" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[82vh] min-h-[560px] overflow-hidden">
          <img src="/hero-alt.jpg" alt="Long banquet table set with candles and florals in a sandstone courtyard venue" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-veil" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
            <p className="eyebrow reveal text-peach">Venues for every taqreeb</p>
            <h1 className="reveal mt-5 max-w-4xl text-5xl leading-[1.05] text-peach md:text-7xl lg:text-8xl">
              Where Beautiful <em>Celebrations</em> Begin
            </h1>
            <p className="reveal mt-6 max-w-xl text-base text-peach/90 md:text-lg">
              Discover extraordinary spaces for the moments that matter.
            </p>
          </div>
        </div>
        <SearchForm />
      </section>

      {/* Occasions */}
      <section className="px-12 pt-28">
        <SectionHead eyebrow="Explore by occasion" title="For every" italic="chapter" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {occasions.map((o) => (
            <Link
              key={o}
              href="/explore"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-border"
            >
              <img
                src={occasionImages[o]}
                alt={`${o} celebration setting`}
                loading="lazy"
                width={768}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-veil-card transition-opacity duration-700 group-hover:opacity-90" />
              <FloralCorner className="absolute -right-5 -top-5 h-20 w-20 text-peach opacity-40 transition-transform duration-700 group-hover:rotate-6" />
              <span className="pointer-events-none absolute inset-2 border border-peach/25" />
              <div className="relative px-4 pb-5 text-center">
                <Sparkle className="mx-auto h-2.5 w-2.5 text-peach/80" />
                <span className="mt-3 block font-serif text-2xl text-peach md:text-[1.7rem]">{o}</span>
                <span className="mt-2 block text-[0.6rem] uppercase tracking-[0.2em] text-peach/90">View venues</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-12 pt-28">
        <SectionHead eyebrow="Featured venues" title="This season's" italic="edit" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {venues.map((v, i) => (
            <div key={v.name} className={i % 2 ? "lg:mt-14" : ""}>
              <VenueCard v={v} />
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/explore" className="btn-line">View all venues <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Why */}
      <section className="mt-28 bg-peach/60 py-24">
        <div className="px-12">
          <SectionHead eyebrow="Why Taqreebgah" title="Planning, made" italic="graceful" />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              { icon: Compass, t: "Discover", d: "Browse handpicked halls, lawns, marquees and heritage homes across Pakistan." },
              { icon: Scale, t: "Compare", d: "See capacity, pricing and amenities side by side to find your perfect fit." },
              { icon: MessageCircle, t: "Connect", d: "Reach venues directly and plan visits without endless phone calls." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-terracotta/60 text-terracotta">
                  <Icon className="h-6 w-6" strokeWidth={1.2} />
                </div>
                <h3 className="mt-6 text-3xl">{t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owners */}
      <section className="px-12 pt-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img src="/venue-2.jpg" alt="Mehndi venue with draped fabric" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-sm object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-terracotta md:block" />
          </div>
          <div className="relative">
            <FloralCorner className="absolute -top-10 right-0 h-28 w-28 text-sage" />
            <p className="eyebrow">For venue owners</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">
              Your space deserves <em className="text-terracotta">to be seen</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Join a curated collection of Pakistan's finest venues and welcome families planning their most meaningful days.
            </p>
            <Link href="/list-your-venue" className="btn-olive mt-10">List Your Venue</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Compass, Scale, MessageCircle, ArrowRight } from "lucide-react";
import { venues, categories, featuredOccasions, availableAreas, exploreHref, EVENT_PLANNERS } from "@/lib/venues";
import { VenueCard } from "@/components/VenueCard";
import { Divider, FloralCorner, Sparkle } from "@/components/Botanical";

const description =
  "Discover banquet halls, marquees, restaurants, farmhouses and event planners across Karachi. Explore options by occasion, area, guest count and budget — all in one place.";

export const metadata = {
  title: "Taqreebgah — Your Perfect Event Starts Here",
  description,
  openGraph: {
    title: "Taqreebgah — Your Perfect Event Starts Here",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const collageImages = [
  { src: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=400&q=80", alt: "South Asian wedding ceremony with floral decor", top: "0%", left: "5%", width: "38%", rotate: "-7deg", zIndex: 2, aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", alt: "Elegant banquet hall table setting", top: "2%", left: "50%", width: "32%", rotate: "5deg", zIndex: 3, aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80", alt: "Vibrant celebration with colorful decor", top: "22%", left: "2%", width: "30%", rotate: "4deg", zIndex: 4, aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80", alt: "Birthday celebration with golden decorations", top: "18%", left: "30%", width: "40%", rotate: "-3deg", zIndex: 5, aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400&q=80", alt: "Beautifully decorated outdoor venue", top: "15%", left: "64%", width: "30%", rotate: "8deg", zIndex: 3, aspect: "1/1" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80", alt: "Grand event hall with chandeliers", top: "42%", left: "4%", width: "36%", rotate: "-5deg", zIndex: 6, aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&q=80", alt: "Wedding couple at reception", top: "38%", left: "40%", width: "32%", rotate: "4deg", zIndex: 5, aspect: "3/4" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80", alt: "Celebration with festive lights", top: "60%", left: "10%", width: "35%", rotate: "6deg", zIndex: 7, aspect: "4/3" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&q=80", alt: "Outdoor wedding ceremony setup", top: "55%", left: "50%", width: "34%", rotate: "-6deg", zIndex: 6, aspect: "1/1" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt: "Floral decorations at venue", top: "75%", left: "28%", width: "40%", rotate: "3deg", zIndex: 8, aspect: "4/3" },
];

function SectionHead({ eyebrow, title, italic, text }: { eyebrow: string; title: string; italic?: string; text?: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
        {title} {italic && <em className="text-terracotta">{italic}</em>}
      </h2>
      <Divider className="mt-5" />
      {text && <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>}
    </div>
  );
}

const chip =
  "inline-flex items-center gap-2 border border-border px-4 py-1.5 font-serif text-base sm:px-5 sm:py-2 sm:text-lg text-cocoa transition-colors hover:border-terracotta hover:text-terracotta";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 px-5 sm:px-8 lg:px-12 overflow-hidden flex items-center">
        {/* Fireworks background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
          aria-hidden="true"
        >
          <source src="/fireworks.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — text content */}
          <div className="flex flex-col items-start">
            <p
              className="hero-fade-up eyebrow text-deep-green font-bold"
              style={{ animationDelay: "0.2s" }}
            >
              Karachi&apos;s Event Venue &amp; Planner Discovery Platform
            </p>
            <h1
              className="hero-fade-up mt-4 text-[1.75rem] leading-[1.15] tracking-[-0.01em] text-cocoa font-light sm:text-4xl md:text-5xl"
              style={{ animationDelay: "0.35s", fontFamily: "'Poppins', sans-serif" }}
            >
              Find perfect taqreebgah<br /> for your events
            </h1>
            <p
              className="hero-fade-up mt-5 max-w-lg text-pretty text-base leading-relaxed text-cocoa/80 md:text-lg"
              style={{ animationDelay: "0.5s" }}
            >
              Browse banquet halls, marquees, farmhouses, restaurants &amp; event planners
              across Karachi, all in one place. Our aim is to make venue selection feel
              exciting, not exhausting.
            </p>
            <div
              className="hero-fade-up mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-5"
              style={{ animationDelay: "0.65s" }}
            >
              <Link href="/explore" className="hero-cta hero-cta-solid w-full sm:w-auto">
                Explore Venues <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={exploreHref({ category: EVENT_PLANNERS })} className="hero-cta hero-cta-ghost w-full sm:w-auto">
                Find Event Planners
              </Link>
            </div>
          </div>

          {/* Right — photo cluster collage */}
          <div className="hero-cluster hero-fade-up" style={{ animationDelay: "0.15s" }}>
            {collageImages.map((img, i) => (
              <div
                key={img.src}
                className={`hero-cluster-photo${i >= 8 ? " hidden lg:block" : ""}`}
                style={{
                  top: img.top,
                  left: img.left,
                  width: img.width,
                  transform: `rotate(${img.rotate})`,
                  zIndex: img.zIndex,
                  aspectRatio: img.aspect,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="hero-media"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="scroll-mt-16 px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
        <SectionHead
          eyebrow="What are you looking for?"
          title="Explore Spaces &"
          italic="Services"
          text="From intimate celebrations to grand gatherings, find the perfect venue or event planning professional for your special occasion."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-14 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.label}
              href={exploreHref({ category: c.label })}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-border"
            >
              <img
                src={c.image}
                alt={`${c.label} on Taqreebgah`}
                loading="lazy"
                width={768}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-veil-card transition-opacity duration-700 group-hover:opacity-90" />
              <FloralCorner className="absolute -right-5 -top-5 h-20 w-20 text-peach opacity-40 transition-transform duration-700 group-hover:rotate-6" />
              <span className="pointer-events-none absolute inset-2 border border-peach/25" />
              <div className="relative px-2 pb-4 text-center sm:px-4 sm:pb-5">
                <Sparkle className="mx-auto h-2.5 w-2.5 text-peach/80" />
                <span className="mt-3 block font-serif text-xl text-peach sm:text-2xl md:text-[1.7rem]">{c.label}</span>
                <span className="mt-2 block text-[0.6rem] uppercase tracking-[0.2em] text-peach/90">{c.tagline}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section id="occasions" className="scroll-mt-16 px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
        <SectionHead
          eyebrow="Browse by occasion"
          title="Every Occasion Deserves the"
          italic="Perfect Setting"
          text="Whether you're planning a traditional shaadi, an intimate nikah, a birthday celebration, or a corporate gathering, explore venues and event planners suited to your occasion."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4">
          {featuredOccasions.map((o) => (
            <Link
              key={o.label}
              href={exploreHref({ occasion: o.occasion })}
              className="group relative flex aspect-[4/3] sm:aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm border border-border"
            >
              <img
                src={o.image}
                alt={`${o.label} setting`}
                loading="lazy"
                width={768}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-veil-card transition-opacity duration-700 group-hover:opacity-90" />
              <span className="pointer-events-none absolute inset-2 border border-peach/25" />
              <div className="relative px-4 pb-5 text-center md:px-6">
                <Sparkle className="mx-auto h-2.5 w-2.5 text-peach/80" />
                <span className="mt-3 block font-serif text-xl text-peach sm:text-2xl md:text-[1.7rem]">{o.label}</span>
                <span className="mx-auto mt-2 block max-w-[17rem] text-xs leading-relaxed text-peach/90 md:text-sm">
                  {o.description}
                </span>
                <span className="mt-3 block text-[0.6rem] uppercase tracking-[0.2em] text-peach/90">Explore options</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Listings preview */}
      <section className="px-5 pt-20 sm:px-8 md:pt-28 lg:px-12">
        <SectionHead eyebrow="On Taqreebgah" title="Venues across" italic="Karachi" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-10">
          {venues.slice(0, 4).map((v, i) => (
            <div key={v.name} className={i % 2 ? "lg:mt-14" : ""}>
              <VenueCard v={v} />
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/explore" className="btn-line">Explore all venues <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Area + Budget discovery */}
      <section className="grid gap-20 px-5 pt-20 sm:px-8 md:pt-28 lg:px-12 lg:grid-cols-2 lg:gap-12">
        <div id="areas" className="scroll-mt-16">
          <SectionHead
            eyebrow="Browse by area"
            title="Discover Venues"
            italic="Near You"
            text="Explore event venues and planners across different areas of Karachi. Find options closer to your preferred location and make planning your occasion more convenient."
          />
          {/* Only areas that currently have listings */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:mt-10">
            {availableAreas.map(({ area, count }) => (
              <Link key={area} href={exploreHref({ area })} className={chip}>
                {area}
                <span className="font-sans text-xs text-muted-foreground">
                  {count} {count === 1 ? "venue" : "venues"}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div id="budget" className="scroll-mt-16">
          <SectionHead
            eyebrow="Plan within your means"
            title="Celebrate Beautifully,"
            italic="Within Your Budget"
            text="Your special occasion deserves the right setting without unnecessary searching. Explore venues and event planning services that fit your budget and requirements."
          />
          <div className="mt-10 text-center">
            <Link href="/explore" className="btn-olive">Find Options Within Your Budget</Link>
            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">
              Prices on Taqreebgah are indicative. Venue rental, per-person packages and planning fees vary by
              provider, so please confirm the latest details directly with them.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mt-20 scroll-mt-16 bg-peach/60 py-16 md:mt-28 md:py-24">
        <div className="px-5 sm:px-8 lg:px-12">
          <SectionHead
            eyebrow="How Taqreebgah works"
            title="Your Celebration, Made"
            italic="Simpler"
            text="Finding the right venue or event planner shouldn't be complicated. Taqreebgah brings your options together to help you make a more informed choice."
          />
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
            {[
              { icon: Compass, t: "Discover", d: "Explore banquet halls, marquees, restaurants, farmhouses, and event planners across Karachi." },
              { icon: Scale, t: "Filter & Compare", d: "Narrow down your options by location, occasion, guest capacity, budget, and available services." },
              { icon: MessageCircle, t: "Connect", d: "Review the details and get in touch with the venue or event planner that best suits your requirements." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-terracotta/60 text-terracotta">
                  <Icon className="h-6 w-6" strokeWidth={1.2} />
                </div>
                <h3 className="mt-5 text-2xl md:mt-6 md:text-3xl">{t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { PageIntro } from "@/components/PageIntro";
import { Divider } from "@/components/Botanical";

const description =
  "Taqreebgah brings Karachi's event venues and event planning services together in one convenient place.";

export const metadata = {
  title: "About Us — Taqreebgah",
  description,
  openGraph: {
    title: "About Us — Taqreebgah",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const faqs = [
  {
    q: "What is Taqreebgah?",
    a: "Taqreebgah is an event venue and planner discovery platform that helps customers find suitable options across Karachi.",
  },
  {
    q: "Which cities does Taqreebgah cover?",
    a: "Taqreebgah currently focuses on Karachi, Pakistan.",
  },
  {
    q: "What can I find on Taqreebgah?",
    a: "You can explore banquet halls, marquees, restaurants, farmhouses, and event planning professionals.",
  },
  {
    q: "Can I search according to my budget?",
    a: "You can explore and narrow down available options using budget-related information provided on the platform.",
  },
  {
    q: "Can I find venues in a particular area of Karachi?",
    a: "Yes, you can explore listings by available Karachi areas and neighborhoods.",
  },
  {
    q: "Can I find an event planner instead of a venue?",
    a: "Yes. Taqreebgah also helps customers discover event planners for different occasions.",
  },
  {
    q: "Does Taqreebgah guarantee prices or availability?",
    a: "Pricing, packages, and availability may vary by provider. Customers should confirm the latest details directly with the relevant venue or event planner.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Taqreebgah"
        title="Celebrations Begin with the"
        italic="Right Choice"
        text="Taqreebgah brings Karachi's event venues and event planning services together in one convenient place. Whether you're organizing a grand wedding, an intimate family gathering, or a professional event, our platform helps you explore options suited to your needs."
      />
      <div className="mt-10 px-5 sm:px-8 md:mt-16 lg:px-12">
        <img
          src="/venue-3.jpg"
          alt="Lawn set for an evening dinner"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/3] w-full sm:aspect-[16/9] rounded-sm object-cover"
        />
      </div>

      <section className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 md:pt-24 lg:px-12 text-center">
        <p className="leading-relaxed text-muted-foreground">
          We believe finding the right venue or planner should be easier. By making it simpler to discover and compare
          different options, Taqreebgah helps you spend less time searching and more time preparing for the moments
          that matter.
        </p>
        <p className="eyebrow mt-12 md:mt-16">Our mission</p>
        <p className="mt-4 font-serif text-xl leading-snug text-cocoa sm:text-2xl md:text-3xl">
          To simplify event venue and planner discovery in Karachi by helping people find suitable options according to
          their occasion, location, and budget.
        </p>
      </section>

      <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-5 pt-16 sm:px-8 md:pt-24 lg:px-12">
        <div className="text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Frequently <em className="text-terracotta">asked</em>
          </h2>
          <Divider className="mt-5" />
        </div>
        <div className="mt-12 border-t border-border">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-border py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-cocoa sm:text-xl">
                {q}
                <span aria-hidden className="text-terracotta transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

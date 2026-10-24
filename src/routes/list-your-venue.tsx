import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/PageIntro";

export const Route = createFileRoute("/list-your-venue")({
  head: () => ({
    meta: [
      { title: "List Your Venue — Taqreebgah" },
      { name: "description", content: "Showcase your wedding or event venue to families across Pakistan." },
      { property: "og:title", content: "List Your Venue — Taqreebgah" },
      { property: "og:description", content: "Showcase your wedding or event venue to families across Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="For venue owners" title="Share your" italic="space" text="Join our curated collection. Send us your venue name, city, capacity, pricing and a few photos, and our team will be in touch." />
      <div className="mt-10 text-center">
        <a href="mailto:hello@taqreebgah.pk?subject=List%20my%20venue" className="btn-olive">Email our team</a>
      </div>
    </>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { venues } from "@/lib/venues";
import { VenueCard } from "@/components/VenueCard";
import { PageIntro } from "@/components/PageIntro";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Venues — Taqreebgah" },
      { name: "description", content: "Browse wedding halls, lawns, marquees and heritage venues across Pakistan." },
      { property: "og:title", content: "Explore Venues — Taqreebgah" },
      { property: "og:description", content: "Browse wedding halls, lawns, marquees and heritage venues across Pakistan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="The collection" title="Explore" italic="venues" text="Halls, lawns and heritage homes chosen for their beauty and hospitality." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {venues.map((v) => <VenueCard key={v.name} v={v} />)}
      </div>
    </>
  ),
});

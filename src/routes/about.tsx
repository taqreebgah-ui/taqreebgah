import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/PageIntro";
import v3 from "@/assets/venue-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Taqreebgah" },
      { name: "description", content: "Our mission: make finding a celebration venue in Pakistan easier and more beautiful." },
      { property: "og:title", content: "About Us — Taqreebgah" },
      { property: "og:description", content: "Our mission: make finding a celebration venue in Pakistan easier and more beautiful." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Our story" title="Born from" italic="celebration" text="Taqreebgah began with a simple wish — that finding the right place for a wedding, mehndi or walima should feel as joyful as the day itself. We gather Pakistan's most beautiful venues in one gentle, honest place." />
      <div className="mx-auto mt-16 max-w-5xl px-6">
        <img src={v3} alt="Heritage lawn set for dinner" loading="lazy" width={1024} height={1280} className="aspect-[16/9] w-full rounded-sm object-cover" />
      </div>
    </>
  ),
});

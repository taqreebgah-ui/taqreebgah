import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Instagram } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Taqreebgah" },
      { name: "description", content: "Get in touch with the Taqreebgah team." },
      { property: "og:title", content: "Contact — Taqreebgah" },
      { property: "og:description", content: "Get in touch with the Taqreebgah team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageIntro eyebrow="Say salaam" title="We'd love to" italic="hear from you" text="Questions about a venue, a partnership, or your own celebration — write to us anytime." />
      <div className="mx-auto mt-14 grid max-w-3xl gap-6 px-6 sm:grid-cols-3">
        {[
          { icon: Mail, l: "Email", v: "hello@taqreebgah.pk" },
          { icon: Phone, l: "Phone", v: "+92 300 0000000" },
          { icon: Instagram, l: "Instagram", v: "@taqreebgah" },
        ].map(({ icon: I, l, v }) => (
          <div key={l} className="border border-border bg-card p-8 text-center">
            <I className="mx-auto h-5 w-5 text-terracotta" strokeWidth={1.3} />
            <p className="eyebrow mt-4">{l}</p>
            <p className="mt-2 font-serif text-xl text-cocoa">{v}</p>
          </div>
        ))}
      </div>
    </>
  ),
});

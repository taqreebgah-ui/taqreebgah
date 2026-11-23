import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "List Your Venue — Taqreebgah",
  description: "Showcase your wedding or event venue to families across Pakistan.",
  openGraph: {
    title: "List Your Venue — Taqreebgah",
    description: "Showcase your wedding or event venue to families across Pakistan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ListYourVenuePage() {
  return (
    <>
      <PageIntro
        eyebrow="For venue owners"
        title="Share your"
        italic="space"
        text="Join our curated collection. Send us your venue name, city, capacity, pricing and a few photos, and our team will be in touch."
      />
      <div className="mt-10 text-center">
        <a href="mailto:taqreebgah@gmail.com?subject=List%20my%20venue" className="btn-olive">Email our team</a>
      </div>
    </>
  );
}

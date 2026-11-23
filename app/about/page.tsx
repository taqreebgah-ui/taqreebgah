import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "About Us — Taqreebgah",
  description: "Our mission: make finding a celebration venue in Pakistan easier and more beautiful.",
  openGraph: {
    title: "About Us — Taqreebgah",
    description: "Our mission: make finding a celebration venue in Pakistan easier and more beautiful.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our story"
        title="Born from"
        italic="celebration"
        text="Taqreebgah began with a simple wish — that finding the right place for a wedding, mehndi or walima should feel as joyful as the day itself. We gather Pakistan's most beautiful venues in one gentle, honest place."
      />
      <div className="mt-16 px-12">
        <img
          src="/venue-3.jpg"
          alt="Heritage lawn set for dinner"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[16/9] w-full rounded-sm object-cover"
        />
      </div>
    </>
  );
}

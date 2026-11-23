import { Mail, Phone, Instagram } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Contact — Taqreebgah",
  description: "Get in touch with the Taqreebgah team.",
  openGraph: {
    title: "Contact — Taqreebgah",
    description: "Get in touch with the Taqreebgah team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Say salaam"
        title="We'd love to"
        italic="hear from you"
        text="Questions about a venue, a partnership, or your own celebration — write to us anytime."
      />
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 px-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Mail, l: "Email", v: "taqreebgah@gmail.com" },
          { icon: Phone, l: "Phone 1", v: "03311347822" },
          { icon: Phone, l: "Phone 2", v: "03334706676" },
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
  );
}

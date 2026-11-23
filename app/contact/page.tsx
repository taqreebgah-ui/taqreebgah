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
        text="Questions about a venue or event planner on Taqreebgah, or about planning your occasion in Karachi — write to us anytime."
      />
      <div className="mx-auto mt-14 grid max-w-5xl gap-4 px-5 sm:grid-cols-2 sm:gap-5 sm:px-8 lg:px-12 lg:grid-cols-4">
        {[
          { icon: Mail, l: "Email", v: "taqreebgah@gmail.com" },
          { icon: Phone, l: "Phone 1", v: "03311347822" },
          { icon: Phone, l: "Phone 2", v: "03334706676" },
          { icon: Instagram, l: "Instagram", v: "@taqreebgah" },
        ].map(({ icon: I, l, v }) => (
          <div key={l} className="flex min-w-0 flex-col items-center border border-border bg-card px-4 py-8 text-center">
            <I className="h-5 w-5 text-terracotta" strokeWidth={1.3} />
            <p className="eyebrow mt-4">{l}</p>
            <p className="mt-2 max-w-full font-serif text-lg text-cocoa sm:text-xl [overflow-wrap:anywhere]">{v}</p>
          </div>
        ))}
      </div>
    </>
  );
}

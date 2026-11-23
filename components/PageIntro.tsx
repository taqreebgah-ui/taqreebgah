import { Divider } from "./Botanical";

export function PageIntro({ eyebrow, title, italic, text }: { eyebrow: string; title: string; italic: string; text: string }) {
  return (
    <section className="mx-auto max-w-3xl px-12 pt-24 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-5xl md:text-6xl">
        {title} <em className="text-terracotta">{italic}</em>
      </h1>
      <Divider className="mt-6" />
      <p className="mt-6 leading-relaxed text-muted-foreground">{text}</p>
    </section>
  );
}

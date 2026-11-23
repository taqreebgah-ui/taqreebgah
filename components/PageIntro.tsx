import { Divider } from "./Botanical";

export function PageIntro({ eyebrow, title, italic, text }: { eyebrow: string; title: string; italic: string; text: string }) {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-16 sm:px-8 md:pt-24 lg:px-12 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-balance text-4xl sm:text-5xl md:text-6xl">
        {title} <em className="text-terracotta">{italic}</em>
      </h1>
      <Divider className="mt-6" />
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>
    </section>
  );
}

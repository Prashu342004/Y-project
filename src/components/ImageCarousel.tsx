import { SectionHeading } from "./utility/SectionHeading";

type CarouselItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const items: CarouselItem[] = [
  {
    id: "match",
    title: "Matchday intensity",
    subtitle: "High-tempo football, high standards.",
    imageUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "training",
    title: "Training culture",
    subtitle: "Details. Reps. Consistency.",
    imageUrl:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "stadium",
    title: "Under the lights",
    subtitle: "Built for big moments.",
    imageUrl:
      "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ImageCarousel() {
  return (
    <section className="pt-6">
      <SectionHeading
        title="Highlights"
        right={
          <a href="#" className="font-semibold text-white/65 hover:text-white/90">
            View all
          </a>
        }
      />

      <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
        {items.map((it) => (
          <article
            key={it.id}
            className="snap-start"
            aria-label={it.title}
          >
            <div className="relative h-[190px] w-[78vw] max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_18px_55px_rgba(0,0,0,.35)]">
              <img
                src={it.imageUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10"
              />
              <div className="relative flex h-full flex-col justify-end p-4">
                <div className="text-[13px] font-extrabold tracking-[-.01em] text-white">
                  {it.title}
                </div>
                <div className="mt-1 text-[12.5px] text-white/70">{it.subtitle}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


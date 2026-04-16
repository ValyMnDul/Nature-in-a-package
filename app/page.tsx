"use client";
import Link from "next/link";
import { useAppContext } from "./providers";

const t = {
  ro: {
    heroBadge: "Produs local din Mălini",
    heroTitle: "Snack-uri curate,\ngust care rămâne.",
    heroSub:
      "Fructe și legume deshidratate lent, fără zahăr adăugat și fără aditivi. Doar ingrediente pe care le poți pronunța.",
    btnShop: "Vezi produsele",
    btnStory: "Povestea noastră",
    stats: ["100% Natural", "< 45°C procesare", "Fără aditivi"],
    sectionTitle: "De ce se simte diferit?",
    sectionSub:
      "Păstrăm textura, culoarea și aroma prin deshidratare blândă, în loturi mici.",
    cards: [
      {
        title: "Livadă proprie",
        body: "Controlăm calitatea de la cules până la ambalare.",
        accent: "Din Mălini",
      },
      {
        title: "Proces lent",
        body: "Temperatura joasă păstrează nutrienții și gustul autentic.",
        accent: "Sub 45°C",
      },
      {
        title: "Ambalare sigură",
        body: "Barieră de protecție împotriva umidității și luminii.",
        accent: "Fresh mai mult",
      },
    ],
    visualTitle: "POZA",
    visualSub: "",
    visualBadge: "Hero Product Shot",
  },
  en: {
    heroBadge: "Local product from Mălini",
    heroTitle: "Clean snacks,\nflavor that lasts.",
    heroSub:
      "Slow-dehydrated fruits and vegetables, no added sugar and no additives. Only ingredients you can pronounce.",
    btnShop: "See products",
    btnStory: "Our story",
    stats: ["100% Natural", "< 45°C processing", "No additives"],
    sectionTitle: "Why does it feel different?",
    sectionSub:
      "We keep texture, color and aroma through gentle dehydration in small batches.",
    cards: [
      {
        title: "Own orchard",
        body: "We control quality from harvest to packaging.",
        accent: "From Mălini",
      },
      {
        title: "Slow process",
        body: "Low temperature keeps nutrients and authentic taste.",
        accent: "Below 45°C",
      },
      {
        title: "Safe packaging",
        body: "Protective barrier against moisture and light.",
        accent: "Longer fresh",
      },
    ],
    visualTitle: "Space for product photo",
    visualSub: "Place your main package shot here.",
    visualBadge: "Hero Product Shot",
  },
};

export default function Home() {
  const { lang } = useAppContext();
  const text = t[lang];

  return (
    <div className="overflow-hidden">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              {text.heroBadge}
            </span>

            <h1 className="whitespace-pre-line text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-stone-900 dark:text-white">
              {text.heroTitle}
            </h1>

            <p className="max-w-xl text-base sm:text-lg md:text-xl text-stone-600 dark:text-zinc-300 leading-relaxed">
              {text.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/produse"
                className="inline-flex justify-center items-center rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-8 py-4 transition-colors shadow-lg shadow-emerald-900/20"
              >
                {text.btnShop}
              </Link>
              <Link
                href="/despre-noi"
                className="inline-flex justify-center items-center rounded-2xl border border-stone-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/60 text-stone-900 dark:text-zinc-100 font-bold px-8 py-4 hover:bg-white dark:hover:bg-zinc-900 transition-colors"
              >
                {text.btnStory}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {text.stats.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 px-4 py-3 text-sm font-semibold text-stone-700 dark:text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/5 rounded-3xl md:rounded-4xl border border-stone-200/80 dark:border-zinc-800 overflow-hidden bg-linear-to-br from-stone-100 to-stone-200 dark:from-zinc-900 dark:to-zinc-800 p-4 sm:p-6 md:p-8 shadow-xl">
              <div className="h-full rounded-3xl border-2 border-dashed border-emerald-400/40 dark:border-emerald-500/30 bg-white/50 dark:bg-black/20 p-6 flex flex-col justify-between">
                <div className="inline-flex items-center rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300 w-fit">
                  {text.visualBadge}
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-2xl md:text-3xl font-black text-stone-900 dark:text-white leading-tight">
                    {text.visualTitle}
                  </p>
                  <p className="text-sm md:text-base text-stone-600 dark:text-zinc-300">
                    {text.visualSub}
                  </p>
                </div>
                <div className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
              {text.sectionTitle}
            </h2>
            <p className="mt-3 text-stone-600 dark:text-zinc-300 max-w-2xl text-base md:text-lg">
              {text.sectionSub}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {text.cards.map((card, idx) => (
              <article
                key={idx}
                className="group rounded-3xl border border-stone-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-6 md:p-7 shadow-sm hover:shadow-xl transition-shadow"
              >
                <span className="inline-flex rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                  {card.accent}
                </span>
                <h3 className="mt-4 text-2xl font-black text-stone-900 dark:text-white leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-stone-600 dark:text-zinc-300 leading-relaxed">
                  {card.body}
                </p>
                <div className="mt-6 h-1.5 w-12 rounded-full bg-orange-500/70 group-hover:w-20 transition-all" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

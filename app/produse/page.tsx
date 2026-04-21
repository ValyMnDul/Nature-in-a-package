"use client";
import Image from "next/image";
import { useAppContext } from "../providers";

const products = {
  ro: {
    title: "Colecția LIVADA CU RONȚĂIELI",
    desc: "Gustări premium din fructe și legume deshidratate lent. Fără aditivi, fără compromisuri.",
    cta: "Adaugă în coș",
    tagsTitle: "Potrivit pentru",
    tags: ["Birou", "Copii", "Sport", "Călătorii"],
    items: [
      {
        name: "Prune deshidratate",
        desc: "Prune deshidratate la temperatură joasă.",
        price: "15 RON",
        tag: "Fructe",
        image: "/prune.png",
      },
      {
        name: "Felii de gutui deshidratate",
        desc: "Felii de gutui deshidratate la temperatură joasă.",
        price: "18 RON",
        tag: "Fructe",
        image: "/gutui.png",
      },
      {
        name: "Căpșuni deshidratate",
        desc: "Căpșuni deshidratate la temperatură joasă.",
        price: "22 RON",
        tag: "Fructe",
        image: "/capsuni.png",
      },
      {
        name: "Prafuri de legume",
        desc: "Prafuri de legume.",
        price: "20 RON",
        tag: "Veggie",
        image: "/legume.png",
      },
    ],
  },
  en: {
    title: "LIVADA CU RONȚĂIELI Collection",
    desc: "Premium snacks from slow-dehydrated fruits and vegetables. No additives, no compromises.",
    cta: "Add to cart",
    tagsTitle: "Perfect for",
    tags: ["Office", "Kids", "Sport", "Travel"],
    items: [
      {
        name: "Dried plums",
        desc: "Low-temperature dehydrated plums.",
        price: "15 RON",
        tag: "Fruit",
        image: "/prune.png",
      },
      {
        name: "Dehydrated quince slices",
        desc: "Low-temperature dehydrated quince slices.",
        price: "18 RON",
        tag: "Fruit",
        image: "/gutui.png",
      },
      {
        name: "Dried strawberries",
        desc: "Low-temperature dehydrated strawberries.",
        price: "22 RON",
        tag: "Fruit",
        image: "/capsuni.png",
      },
      {
        name: "Vegetable powders",
        desc: "Vegetable powders.",
        price: "20 RON",
        tag: "Veggie",
        image: "/legume.png",
      },
    ],
  },
};

export default function Produse() {
  const { lang } = useAppContext();
  const text = products[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20 space-y-10 sm:space-y-12">
      <section className="rounded-3xl md:rounded-4xl border border-stone-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 p-5 sm:p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute -top-20 -right-12 h-52 w-52 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="relative space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight">
            {text.title}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-stone-600 dark:text-zinc-300 leading-relaxed">
            {text.desc}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs uppercase tracking-[0.2em] font-black text-emerald-700 dark:text-emerald-300">
              {text.tagsTitle}
            </span>
            {text.tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-stone-100 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 px-3 py-1 text-sm font-semibold text-stone-700 dark:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        {text.items.map((item, idx) => (
          <article
            key={idx}
            className="group rounded-3xl border border-stone-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="relative aspect-4/3 bg-linear-to-br from-stone-100 to-stone-200 dark:from-zinc-800 dark:to-zinc-900 p-4">
              <span className="absolute top-4 left-4 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-wide px-3 py-1">
                {item.tag}
              </span>
              <div className="relative h-full w-full rounded-2xl border border-white/50 dark:border-white/5 bg-white/60 dark:bg-black/20 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
              <h2 className="text-lg sm:text-xl font-black text-stone-900 dark:text-white leading-tight min-h-14">
                {item.name}
              </h2>
              <p className="mt-3 text-sm md:text-base text-stone-600 dark:text-zinc-300 leading-relaxed grow">
                {item.desc}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-2xl font-black text-emerald-700 dark:text-emerald-400">
                  {item.price}
                </span>
                <button className="rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold px-4 py-2.5 transition-colors">
                  {text.cta}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

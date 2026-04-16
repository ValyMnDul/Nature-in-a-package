"use client";
import Link from "next/link";
import { useAppContext } from "./providers";

const t = {
  ro: {
    heroTitle: "Natura la ",
    heroHighlight: "Pachet.",
    heroSub: "Fructe și legume deshidratate artizanal. Fără zahăr adăugat. Doar esența naturii.",
    btnShop: "Descoperă Produsele",
    btnStory: "Află Povestea",
    qualityTitle: "Calitate direct de la ",
    qualityHighlight: "Sursă.",
    qualityText1: "Suntem o afacere de familie care își culege roadele din inima localității Mălini.",
    maliniTag: "Produs în livada proprie din localitatea Mălini",
    features: ["100% Veggie", "Zero Zahăr", "Local", "Eco-Friendly"]
  },
  en: {
    heroTitle: "Nature in a ",
    heroHighlight: "Package.",
    heroSub: "Artisan dehydrated fruits and vegetables. No added sugar. Just the essence of nature.",
    btnShop: "Discover Products",
    btnStory: "Read Our Story",
    qualityTitle: "Quality straight from the ",
    qualityHighlight: "Source.",
    qualityText1: "We are a family business harvesting from the heart of Mălini.",
    maliniTag: "Produced in our own orchard in Mălini",
    features: ["100% Veggie", "Zero Sugar", "Local", "Eco-Friendly"]
  }
};

export default function Home() {
  const { lang } = useAppContext();
  const text = t[lang];

  return (
    <div className="flex flex-col gap-16">
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-stone-900 dark:text-white tracking-tight">
            {text.heroTitle} <span className="text-emerald-700 dark:text-emerald-500">{text.heroHighlight}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-600 dark:text-zinc-400 font-normal">
            {text.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/produse" className="bg-emerald-800 dark:bg-emerald-600 text-white text-lg font-semibold py-3 px-8 rounded-xl hover:bg-emerald-700 transition-colors shadow-md">
              {text.btnShop}
            </Link>
            <Link href="/despre-noi" className="bg-white dark:bg-zinc-900 text-stone-800 dark:text-white border border-stone-200 dark:border-zinc-800 text-lg font-semibold py-3 px-8 rounded-xl hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
              {text.btnStory}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="aspect-square bg-stone-100 dark:bg-zinc-800 rounded-2xl shadow-lg flex items-center justify-center">
               <span className="text-lg text-stone-400 font-medium">Imagine Ambalaj Fereastră</span>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-xl border-l-4 border-emerald-600 max-w-xs">
                <p className="text-emerald-900 dark:text-emerald-400 font-bold text-lg leading-snug">
                  {text.maliniTag}
                </p>
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white">
              {text.qualityTitle} <span className="text-orange-600">{text.qualityHighlight}</span>
            </h2>
            <p className="text-lg text-stone-600 dark:text-zinc-400">
              {text.qualityText1}
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {text.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-emerald-800 dark:text-emerald-400">
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-1 text-sm">&radic;</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
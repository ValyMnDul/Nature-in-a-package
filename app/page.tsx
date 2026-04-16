"use client";
import Link from "next/link";
import { useAppContext } from "./providers";

const t = {
  ro: {
    heroTitle: "Natura la ",
    heroHighlight: "Pachet.",
    heroSub: "Fructe și legume deshidratate artizanal. Fără zahăr. Doar esența.",
    btnShop: "Vezi Produsele",
    btnStory: "Povestea Mălini",
    qualityTitle: "Calitate direct de la ",
    qualityHighlight: "Sursă.",
    qualityText1: "Nu suntem o fabrică industrială. Suntem o afacere care își culege roadele din inima localității Mălini.",
    maliniTag: "Produs în livada proprie din localitatea Mălini",
    features: ["100% Veggie", "Zero Zahăr", "Local", "Eco-Friendly"]
  },
  en: {
    heroTitle: "Nature in a ",
    heroHighlight: "Package.",
    heroSub: "Artisan dehydrated fruits & vegetables. No sugar. Just the essence.",
    btnShop: "View Products",
    btnStory: "The Mălini Story",
    qualityTitle: "Quality straight from the ",
    qualityHighlight: "Source.",
    qualityText1: "We are not an industrial factory. We harvest our fruits from the heart of Mălini.",
    maliniTag: "Produced in our own orchard in Mălini",
    features: ["100% Veggie", "Zero Sugar", "Local", "Eco-Friendly"]
  }
};

export default function Home() {
  const { lang } = useAppContext();
  const text = t[lang];

  return (
    <div className="flex flex-col">
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-7xl md:text-[8rem] font-black leading-[0.9] text-zinc-900 dark:text-white tracking-tighter">
            {text.heroTitle} <span className="text-emerald-700 dark:text-emerald-500 italic">{text.heroHighlight}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-2xl md:text-4xl text-zinc-600 dark:text-zinc-400 font-medium">
            {text.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/produse" className="bg-emerald-800 dark:bg-emerald-600 text-white text-2xl font-bold py-6 px-12 rounded-2xl hover:scale-105 transition-transform shadow-2xl">
              {text.btnShop}
            </Link>
            <Link href="/despre-noi" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-4 border-zinc-200 dark:border-zinc-800 text-2xl font-bold py-6 px-12 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
              {text.btnStory}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-[40px] shadow-2xl transform -rotate-3 flex items-center justify-center">
               <span className="text-3xl text-zinc-400 font-bold">Poza Ambalaj Fereastră</span>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-2xl border-l-8 border-emerald-600 max-w-[300px]">
                <p className="text-emerald-900 dark:text-emerald-400 font-black text-2xl leading-tight">
                  {text.maliniTag}
                </p>
             </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-6xl font-black text-zinc-900 dark:text-white leading-[1.1]">
              {text.qualityTitle} <span className="text-orange-600">{text.qualityHighlight}</span>
            </h2>
            <p className="text-3xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {text.qualityText1}
            </p>
            <ul className="grid grid-cols-2 gap-8 pt-6">
              {text.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-2xl font-bold text-emerald-800 dark:text-emerald-400">
                  <span className="text-3xl bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
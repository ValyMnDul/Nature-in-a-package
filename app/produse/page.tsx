"use client";
import { useAppContext } from "../providers";

const products = {
  ro: {
    title: "Produsele Noastre",
    desc: "Alege din gamele noastre premium. Fără aditivi, fără compromisuri.",
    items: [
      { name: "Mere & Pere Deshidratate", desc: "Felii crocante din livada noastră.", price: "15 RON", tag: "Clasic" },
      { name: "Chipsuri Sfeclă & Oțet Balsamic", desc: "Alternativa perfectă la chipsurile prăjite.", price: "18 RON", tag: "Veggie" },
      { name: "Smoothie Instant", desc: "Cubulețe presate de măr și spanac.", price: "22 RON", tag: "Inovație" }
    ]
  },
  en: {
    title: "Our Products",
    desc: "Choose from our premium ranges. No additives, no compromises.",
    items: [
      { name: "Dried Apples & Pears", desc: "Crispy slices from our orchard.", price: "15 RON", tag: "Classic" },
      { name: "Beetroot & Balsamic Chips", desc: "The perfect alternative to fried chips.", price: "18 RON", tag: "Veggie" },
      { name: "Instant Smoothie", desc: "Pressed cubes of apple and spinach.", price: "22 RON", tag: "Innovation" }
    ]
  }
};

export default function Produse() {
  const { lang } = useAppContext();
  const text = products[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold text-stone-900 dark:text-white">
          {text.title}
        </h1>
        <p className="text-lg text-stone-600 dark:text-zinc-400">
          {text.desc}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {text.items.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="aspect-video bg-stone-100 dark:bg-zinc-800 rounded-xl mb-6 flex items-center justify-center relative">
              <span className="text-stone-400 text-sm font-medium">Imagine</span>
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                {item.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">{item.name}</h3>
            <p className="text-stone-600 dark:text-zinc-400 text-sm mb-6 grow">{item.desc}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-xl font-bold text-emerald-800 dark:text-emerald-400">{item.price}</span>
              <button className="bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
                Adaugă
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
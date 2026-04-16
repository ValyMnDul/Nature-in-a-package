"use client";
import { useAppContext } from "../providers";

const products = {
  ro: {
    title: "Meniul Naturii",
    desc: "Alege din gamele noastre premium. Fără aditivi, fără compromisuri.",
    items: [
      { name: "Mere & Pere Deshidratate", price: "15 RON", tag: "Clasic" },
      { name: "Chipsuri Sfeclă & Oțet Balsamic", price: "18 RON", tag: "Veggie" },
      { name: "Smoothie Instant (Măr & Spanac)", price: "22 RON", tag: "Inovație" }
    ]
  },
  en: {
    title: "Nature's Menu",
    desc: "Choose from our premium ranges. No additives, no compromises.",
    items: [
      { name: "Dried Apples & Pears", price: "15 RON", tag: "Classic" },
      { name: "Beetroot & Balsamic Chips", price: "18 RON", tag: "Veggie" },
      { name: "Instant Smoothie (Apple & Spinach)", price: "22 RON", tag: "Innovation" }
    ]
  }
};

export default function Produse() {
  const { lang } = useAppContext();
  const text = products[lang];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 space-y-6">
        <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-emerald-500 tracking-tighter">
          {text.title}
        </h1>
        <p className="text-3xl text-zinc-600 dark:text-zinc-400 font-medium">
          {text.desc}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {text.items.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[30px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 rounded-[20px] mb-8 flex items-center justify-center relative overflow-hidden">
              <span className="text-zinc-400 text-2xl font-bold group-hover:scale-110 transition-transform">Imagine Fruct</span>
              <span className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-black uppercase px-4 py-2 rounded-full">
                {item.tag}
              </span>
            </div>
            <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-6 leading-tight">{item.name}</h3>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-3xl font-black text-emerald-800 dark:text-emerald-400">{item.price}</span>
              <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-colors">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
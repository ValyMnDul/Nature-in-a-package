"use client";
import { useAppContext } from "../providers";

const textData = {
  ro: {
    title: "Povestea Noastră",
    sub: "Din livada familiei, direct la tine în pachet.",
    p1: "S.C. NATUR-FRUCT DESHIDRATAT S.R.L. a luat naștere dintr-o nevoie simplă: gustări reale pentru familiile noastre.",
    p2: "Uscăm fructele blând, sub 45 de grade, pentru a păstra intacte vitaminele și enzimele. Este un proces lent, dar este singurul mod în care respectăm natura.",
    malini: "Produs cu mândrie în livada proprie din localitatea Mălini, Județul Suceava."
  },
  en: {
    title: "Our Story",
    sub: "From the family orchard, straight to your package.",
    p1: "S.C. NATUR-FRUCT DESHIDRATAT S.R.L. was born from a simple need: real snacks for our families.",
    p2: "We dry our fruits gently, under 45 degrees, to keep vitamins and enzymes intact. It is a slow process, but the only way we respect nature.",
    malini: "Proudly produced in our own orchard in Mălini, Suceava County."
  }
};

export default function DespreNoi() {
  const { lang } = useAppContext();
  const t = textData[lang];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-white">
        {t.title}
      </h1>
      <p className="text-xl font-semibold text-orange-600">
        {t.sub}
      </p>
      
      <div className="text-left space-y-6 text-lg text-stone-600 dark:text-zinc-400 leading-relaxed mx-auto">
        <p>{t.p1}</p>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border-l-4 border-emerald-600 text-stone-800 dark:text-zinc-200">
          <p>{t.p2}</p>
        </div>
      </div>

      <div className="inline-block mt-8 bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-400 uppercase tracking-wide">{t.malini}</h3>
      </div>
    </div>
  );
}
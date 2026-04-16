"use client";
import { useAppContext } from "../providers";

const textData = {
  ro: {
    title: "Povestea Noastră",
    sub: "Din livada familiei, direct la tine în pachet.",
    p1: "S.C. NATUR-FRUCT DESHIDRATAT S.R.L. a luat naștere dintr-o nevoie simplă: gustări reale pentru familiile noastre.",
    p2: "Uscăm fructele blând, sub 45°C, pentru a păstra intacte vitaminele și enzimele. Este un proces lent (12-18 ore), dar este singurul mod în care respectăm natura.",
    malini: "Produs cu mândrie în livada proprie din localitatea Mălini, Județul Suceava."
  },
  en: {
    title: "Our Story",
    sub: "From the family orchard, straight into your package.",
    p1: "S.C. NATUR-FRUCT DESHIDRATAT S.R.L. was born from a simple need: real snacks for our families.",
    p2: "We dry our fruits gently, under 45°C, to keep vitamins and enzymes intact. It's a slow process (12-18 hours), but it's the only way we respect nature.",
    malini: "Proudly produced in our own orchard in Mălini, Suceava County."
  }
};

export default function DespreNoi() {
  const { lang } = useAppContext();
  const t = textData[lang];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 text-center space-y-16">
      <h1 className="text-7xl md:text-9xl font-black text-zinc-900 dark:text-white tracking-tighter">
        {t.title}
      </h1>
      <p className="text-4xl font-bold text-orange-600">
        {t.sub}
      </p>
      
      <div className="text-left space-y-10 text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl mx-auto">
        <p>{t.p1}</p>
        <p className="bg-emerald-50 dark:bg-emerald-900/20 p-10 rounded-[40px] border-l-8 border-emerald-600 text-zinc-900 dark:text-zinc-200 font-medium">
          {t.p2}
        </p>
      </div>

      <div className="inline-block mt-16 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-8 rounded-3xl shadow-2xl">
        <h3 className="text-3xl font-black uppercase tracking-widest">{t.malini}</h3>
      </div>
    </div>
  );
}
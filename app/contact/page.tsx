"use client";
import { useAppContext } from "../providers";

const contactText = {
  ro: {
    title: "Hai să vorbim",
    name: "Numele tău",
    email: "Email",
    msg: "Mesaj",
    btn: "Trimite",
    address: "Locație: Mălini, Jud. Suceava"
  },
  en: {
    title: "Let's Talk",
    name: "Your Name",
    email: "Email",
    msg: "Message",
    btn: "Send",
    address: "Location: Mălini, Suceava County"
  }
};

export default function Contact() {
  const { lang } = useAppContext();
  const t = contactText[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-7xl font-black text-center mb-16 text-zinc-900 dark:text-white">
        {t.title}
      </h1>
      
      <div className="bg-white dark:bg-zinc-900 p-12 md:p-16 rounded-[40px] shadow-2xl border border-zinc-200 dark:border-zinc-800">
        <form className="space-y-8">
          <div>
            <label className="block text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">{t.name}</label>
            <input type="text" className="w-full text-2xl p-6 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl focus:border-emerald-500 dark:text-white outline-none" />
          </div>
          <div>
            <label className="block text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">{t.email}</label>
            <input type="email" className="w-full text-2xl p-6 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl focus:border-emerald-500 dark:text-white outline-none" />
          </div>
          <div>
            <label className="block text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">{t.msg}</label>
            <textarea rows={4} className="w-full text-2xl p-6 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl focus:border-emerald-500 dark:text-white outline-none"></textarea>
          </div>
          <button className="w-full bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-600 text-white text-3xl font-black py-6 rounded-2xl transition-all">
            {t.btn}
          </button>
        </form>
      </div>

      <p className="text-center mt-12 text-2xl font-bold text-emerald-800 dark:text-emerald-500 uppercase tracking-widest">
        📍 {t.address}
      </p>
    </div>
  );
}
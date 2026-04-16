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
    title: "Let&apos;s Talk",
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-stone-900 dark:text-white">
        {t.title}
      </h1>
      
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-zinc-800">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-zinc-300 mb-2">{t.name}</label>
            <input type="text" className="w-full text-base p-3 bg-stone-50 dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-500 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-zinc-300 mb-2">{t.email}</label>
            <input type="email" className="w-full text-base p-3 bg-stone-50 dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-500 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-stone-700 dark:text-zinc-300 mb-2">{t.msg}</label>
            <textarea rows={4} className="w-full text-base p-3 bg-stone-50 dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-500 dark:text-white"></textarea>
          </div>
          <button className="w-full bg-emerald-800 hover:bg-emerald-700 text-white text-lg font-bold py-3 rounded-lg transition-colors">
            {t.btn}
          </button>
        </form>
      </div>

      <p className="text-center mt-8 text-sm font-bold text-emerald-800 dark:text-emerald-500 uppercase tracking-widest">
        {t.address}
      </p>
    </div>
  );
}
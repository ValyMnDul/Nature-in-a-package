"use client";
import Link from "next/link";
import { useAppContext } from "./providers";

// 1. Definim tipurile strict pentru a nu mai da eroare TypeScript
type Translations = {
  home: string;
  shop: string;
  about: string;
  contact: string;
};

// 2. Aplicăm tipurile pe dicționarul nostru
const t: Record<"ro" | "en", Translations> = {
  ro: { home: "Acasă", shop: "Produse", about: "Povestea Noastră", contact: "Contact" },
  en: { home: "Home", shop: "Products", about: "Our Story", contact: "Contact" }
};

export default function Header() {
  const { lang, toggleLang, isDark, toggleDark } = useAppContext();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        <Link href="/" className="flex flex-col group">
          <span className="text-3xl md:text-4xl font-black tracking-tighter text-emerald-900 dark:text-emerald-400">
            NATUR SNACK
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500">
            Natura la Pachet
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8 text-lg font-bold text-zinc-600 dark:text-zinc-300">
          <Link href="/" className="hover:text-emerald-600 transition-colors">{t[lang].home}</Link>
          <Link href="/produse" className="hover:text-emerald-600 transition-colors">{t[lang].shop}</Link>
          <Link href="/despre-noi" className="hover:text-emerald-600 transition-colors">{t[lang].about}</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">{t[lang].contact}</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLang} 
            className="bg-zinc-200 dark:bg-zinc-800 px-4 py-2 rounded-full text-lg font-bold hover:bg-emerald-100 dark:hover:bg-zinc-700 transition-all text-zinc-800 dark:text-zinc-200"
          >
            {lang === 'ro' ? '🇬🇧 EN' : '🇷🇴 RO'}
          </button>
          <button 
            onClick={toggleDark} 
            className="bg-zinc-200 dark:bg-zinc-800 p-3 rounded-full text-xl hover:rotate-12 transition-transform"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
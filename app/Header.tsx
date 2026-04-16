"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "./providers";

type Translations = {
  home: string;
  shop: string;
  about: string;
  contact: string;
};

const t: Record<"ro" | "en", Translations> = {
  ro: { home: "Acasă", shop: "Produse", about: "Povestea Noastră", contact: "Contact" },
  en: { home: "Home", shop: "Products", about: "Our Story", contact: "Contact" }
};

export default function Header() {
  const { lang, toggleLang, isDark, toggleDark } = useAppContext();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-stone-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Natur Snack logo"
            width={44}
            height={44}
            className="rounded-full object-cover border border-emerald-200 dark:border-emerald-900/50"
            priority
          />
          <span className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight text-emerald-800 dark:text-emerald-400">
              NATUR SNACK
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-500">
              Natura la Pachet
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-base font-medium text-stone-600 dark:text-zinc-300">
          <Link href="/" className="hover:text-emerald-600 transition-colors">{t[lang].home}</Link>
          <Link href="/produse" className="hover:text-emerald-600 transition-colors">{t[lang].shop}</Link>
          <Link href="/despre-noi" className="hover:text-emerald-600 transition-colors">{t[lang].about}</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">{t[lang].contact}</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleLang} 
            className="bg-stone-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-emerald-50 dark:hover:bg-zinc-700 transition-all text-stone-800 dark:text-zinc-200"
          >
            {lang === 'ro' ? 'EN' : 'RO'}
          </button>
          <button 
            onClick={toggleDark} 
            className="bg-stone-100 dark:bg-zinc-800 p-2 rounded-full text-lg transition-transform"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
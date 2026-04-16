"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: t[lang].home },
    { href: "/produse", label: t[lang].shop },
    { href: "/despre-noi", label: t[lang].about },
    { href: "/contact", label: t[lang].contact },
  ];

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-2xl border border-stone-200/70 dark:border-zinc-800/70 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-xl shadow-lg shadow-stone-900/5">
        <div className="h-20 px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Natur Snack logo"
              width={44}
              height={44}
              className="rounded-full object-cover border border-emerald-200 dark:border-emerald-900/50"
              priority
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-emerald-800 dark:text-emerald-400">
                NATUR SNACK
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500 mt-1">
                Natura la Pachet
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-stone-100/80 dark:bg-zinc-900/90 border border-stone-200 dark:border-zinc-800">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active
                      ? "bg-emerald-700 text-white"
                      : "text-stone-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLang}
              className="bg-stone-100 dark:bg-zinc-800 px-3 py-2 rounded-full text-xs font-bold tracking-wide hover:bg-emerald-50 dark:hover:bg-zinc-700 transition-colors text-stone-800 dark:text-zinc-200"
            >
              {lang === "ro" ? "EN" : "RO"}
            </button>
            <button
              onClick={toggleDark}
              className="w-9 h-9 bg-stone-100 dark:bg-zinc-800 rounded-full text-base hover:scale-105 transition-transform"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <nav className="lg:hidden border-t border-stone-200/70 dark:border-zinc-800/70 px-3 py-3 flex items-center gap-2 overflow-x-auto">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active
                    ? "bg-emerald-700 text-white"
                    : "bg-stone-100 dark:bg-zinc-900 text-stone-700 dark:text-zinc-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
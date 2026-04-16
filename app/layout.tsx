import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natur Snack | Natura la Pachet",
  description: "Fructe deshidratate artizanal în Mălini.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark">
      <body className={`${inter.className} text-stone-800 dark:text-stone-200 flex flex-col min-h-screen`}>
        <Providers>
          <Header />
          <main className="grow relative z-10">{children}</main>
          
          <footer className="relative bg-stone-900 dark:bg-black text-stone-300 pt-14 md:pt-20 pb-10 mt-14 md:mt-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                
                <div className="md:col-span-5 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                    NATUR <span className="text-emerald-500">SNACK</span>
                  </h3>
                  <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-sm">
                    Producem sănătate prin deshidratare lentă. Gustări 100% naturale, create cu respect pentru pământul din Mălini.
                  </p>
                </div>

                <div className="md:col-span-3 space-y-6">
                  <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em]">Navigație</h4>
                  <ul className="space-y-4 font-bold text-white">
                    <li><Link href="/" className="hover:text-emerald-400 transition-colors">Acasă</Link></li>
                    <li><Link href="/produse" className="hover:text-emerald-400 transition-colors">Produse</Link></li>
                    <li><Link href="/despre-noi" className="hover:text-emerald-400 transition-colors">Despre Noi</Link></li>
                  </ul>
                </div>

                <div className="md:col-span-4 space-y-6">
                  <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em]">Contact Direct</h4>
                  <div className="space-y-2 text-sm sm:text-base text-stone-300 font-medium">
                    <p>Mălini, Str. Principală Nr. 13, Suceava</p>
                    <p className="text-white font-bold">salut@natursnack.ro</p>
                    <p className="pt-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Deschis: Luni - Vineri: 08:00 - 17:00
                    </p>
                  </div>
                  <div className="pt-4">
                    <h5 className="text-xs font-black text-orange-400 uppercase tracking-[0.2em] mb-3">Social Media</h5>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <defs>
                            <linearGradient id="igGradientFooter" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f9ce34" />
                              <stop offset="50%" stopColor="#ee2a7b" />
                              <stop offset="100%" stopColor="#6228d7" />
                            </linearGradient>
                          </defs>
                          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#igGradientFooter)" strokeWidth="2" />
                          <circle cx="12" cy="12" r="4" fill="none" stroke="url(#igGradientFooter)" strokeWidth="2" />
                          <circle cx="17.2" cy="6.8" r="1.2" fill="url(#igGradientFooter)" />
                        </svg>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.86v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.47h-2.79v8.39A12 12 0 0 0 24 12"/>
                        </svg>
                      </a>
                      <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                          <path fill="#25F4EE" d="M14.5 4v8.54a3.62 3.62 0 1 1-3.63-3.62c.31 0 .61.04.9.11V6.45a6.16 6.16 0 1 0 5.27 6.09V9.15c1.04.76 2.32 1.2 3.69 1.2V7.81A3.76 3.76 0 0 1 17.1 4h-2.6Z"/>
                          <path fill="#FE2C55" d="M13.5 3v8.54a3.62 3.62 0 1 1-3.63-3.62c.31 0 .61.04.9.11V5.45a6.16 6.16 0 1 0 5.27 6.09V8.15c1.04.76 2.32 1.2 3.69 1.2V6.81A3.76 3.76 0 0 1 16.1 3h-2.6Z"/>
                          <path fill="#fff" d="M12.96 3.63v8.18a2.95 2.95 0 1 1-2.95-2.95c.27 0 .52.04.77.1V7.34a5.5 5.5 0 1 0 4.75 5.47V9.73a6.3 6.3 0 0 0 3.27.95V9.2a4.48 4.48 0 0 1-3.53-1.72 4.44 4.44 0 0 1-.95-2.85h-1.36Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-14 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[11px] sm:text-xs font-bold text-stone-500 uppercase tracking-widest text-center md:text-left">
                  &copy; 2026 Natur Snack Factory S.R.L.
                </p>
                <div className="flex gap-6 sm:gap-8 text-[11px] sm:text-xs font-bold text-stone-500 uppercase tracking-widest">
                  <span className="hover:text-white cursor-pointer transition-colors">ANPC</span>
                  <span className="hover:text-white cursor-pointer transition-colors">GDPR</span>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
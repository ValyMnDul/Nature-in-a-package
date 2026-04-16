import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natur Snack Factory | Natura la Pachet",
  description: "Fructe și legume deshidratate premium. 100% Natural, fără zahăr adăugat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.className} bg-[#FDFBF7] text-stone-800 flex flex-col min-h-screen`}>
        {/* Navbar */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex flex-col">
                  <span className="text-2xl font-bold text-emerald-800 tracking-tight">NATUR SNACK FACTORY</span>
                  <span className="text-sm font-medium text-stone-500 italic">Natura la Pachet</span>
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">Acasă</Link>
                <Link href="/produse" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">Produse</Link>
                <Link href="/despre-noi" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">Despre Noi</Link>
                <Link href="/contact" className="text-stone-600 hover:text-emerald-700 font-medium transition-colors">Contact</Link>
              </nav>
              {/* Buton Mobile (simplificat) */}
              <div className="md:hidden flex items-center">
                <button className="text-stone-600 hover:text-emerald-700 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Conținutul paginilor */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-emerald-900 text-stone-300 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Natur Snack Factory</h3>
              <p className="text-sm leading-relaxed mb-4">
                Arta naturii deshidratate. Oferim gustări sănătoase, pline de vitamine, perfecte pentru un stil de viață activ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: salut@natursnack.ro</li>
                <li>Telefon: 07XX XXX XXX</li>
                <li>Locație: Mălini, Jud. Suceava</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Origine Garantată</h3>
              <div className="bg-emerald-800/50 p-4 rounded-lg border border-emerald-700 inline-block">
                <p className="text-stone-100 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Produs în livada proprie din localitatea Mălini
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-emerald-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Natur Snack Factory S.R.L. Toate drepturile rezervate.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
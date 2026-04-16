import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natur Snack | Natura la Pachet",
  description: "Fructe deshidratate artizanal în Mălini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.className} bg-stone-50 dark:bg-zinc-950 text-stone-800 dark:text-zinc-100 transition-colors duration-300 flex flex-col min-h-screen`}>
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          
          <footer className="bg-emerald-900 text-stone-300 py-12 mt-16 transition-colors duration-300">
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
                <div className="bg-emerald-800 p-4 rounded-lg border border-emerald-700 inline-block">
                  <p className="text-stone-100 font-medium flex items-center gap-2">
                    <span className="text-green-400">&radic;</span>
                    &quot;Produs în livada proprie din localitatea Mălini&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-emerald-800 text-center text-sm">
              <p>&copy; 2026 Natur Snack Factory S.R.L. Toate drepturile rezervate.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
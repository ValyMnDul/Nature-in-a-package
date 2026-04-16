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
      <body className={`${inter.className} bg-[#FDFCF9] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          
          <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-16 px-6 mt-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-black text-emerald-900 dark:text-emerald-500 uppercase tracking-tighter mb-4">NATUR SNACK FACTORY</h2>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 italic">Produs în livada proprie din localitatea Mălini</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
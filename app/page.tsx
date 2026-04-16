import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative bg-emerald-800 text-white overflow-hidden py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-200 font-semibold text-sm border border-orange-500/30">
            100% Natural • Fără Zahăr Adăugat
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Natura la Pachet.
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto">
            Gustări premium din fructe și legume deshidratate, create pentru a-ți oferi energie pură în fiecare zi.
          </p>
          <div className="pt-4">
            <Link href="/produse" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg inline-block">
              Descoperă Produsele
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="font-bold text-stone-800">Sustenabil</h3>
            <p className="text-sm text-stone-500 mt-2">Ambalaje prietenoase cu mediul</p>
          </div>
          
          {/* Main feature for teacher */}
          <div className="flex flex-col items-center transform scale-110">
            <div className="bg-emerald-100 p-5 rounded-full mb-4 ring-4 ring-emerald-50">
              <svg className="w-10 h-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h3 className="font-extrabold text-emerald-900 text-lg">Origine Locală</h3>
            <p className="text-sm text-emerald-700 font-medium mt-2 bg-emerald-50 py-1 px-3 rounded-full">Produs în livada proprie din localitatea Mălini</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="font-bold text-stone-800">Uscare Blândă</h3>
            <p className="text-sm text-stone-500 mt-2">Păstrăm 95% din vitamine</p>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-900">Etichetă Curată. Ingrediente simple.</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              La Natur Snack Factory, credem în transparență totală. Când citești etichetele noastre, vei vedea lucruri simple: &bdquo;Ingrediente: Doar Măr. Atât.&bdquo;
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              Folosim un proces de deshidratare la temperaturi joase (sub 45°C) pentru a ne asigura că fiecare felie de fruct sau legumă își păstrează nutrienții, culoarea vibrantă și gustul intens. Fără prăjeală, fără potențatori de arome.
            </p>
            <Link href="/despre-noi" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900 transition-colors">
              Află povestea noastră <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
          <div className="bg-stone-200 aspect-square rounded-3xl overflow-hidden relative shadow-lg">
             <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
             {/* Placeholder for an image, e.g., a hand holding dried apples */}
             <div className="w-full h-full flex items-center justify-center bg-stone-300 text-stone-500">
               [Imagine: Mere deshidratate în pungă de hârtie cu fereastră]
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default function Produse() {
  const produse = [
    {
      gama: "Gama Classic",
      nume: "Mere și Pere Deshidratate",
      descriere: "Felii crocante din livada noastră. Dulceață 100% naturală.",
      eticheta: "Produs în Mălini",
      pret: "12,00 RON",
      tag: "Popular"
    },
    {
      gama: "Gama Veggie-Crunch",
      nume: "Chipsuri de Sfeclă cu Oțet Balsamic",
      descriere: "Alternativa perfectă la chipsurile prăjite din comerț.",
      eticheta: "Fără Sare Adăugată",
      pret: "14,50 RON",
      tag: "Nou"
    },
    {
      gama: "Gama Inovativ",
      nume: "Smoothie Instant Cubes",
      descriere: "Cubulețe presate de măr, spanac și banană. Adaugă apă și e gata în 30s!",
      eticheta: "Inovație",
      pret: "18,00 RON",
      tag: "Premium"
    },
    {
      gama: "Gama Inovativ",
      nume: "Ananas cu Chili și Lime",
      descriere: "Un snack îndrăzneț pentru seri cu prietenii. Gust exotic, picant-acrișor.",
      eticheta: "Exotic",
      pret: "16,00 RON"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-emerald-900 mb-4">Produsele Noastre</h1>
        <p className="text-lg text-stone-600">Ambalate în pungi biodegradabile Doypack cu fereastră, pentru a vedea exact calitatea pe care o cumperi.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produse.map((produs, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 bg-stone-100 flex items-center justify-center relative">
               <span className="text-stone-400 text-sm">[Imagine Produs]</span>
               {produs.tag && (
                 <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                   {produs.tag}
                 </span>
               )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase mb-2">{produs.gama}</span>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{produs.nume}</h3>
              <p className="text-stone-600 text-sm mb-6 flex-grow">{produs.descriere}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded">{produs.eticheta}</span>
                <span className="text-lg font-bold text-emerald-900">{produs.pret}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-extrabold text-emerald-900 mb-6">Hai să vorbim!</h1>
          <p className="text-stone-600 mb-8 text-lg">
            Indiferent dacă vrei să comanzi un Snack Box lunar pentru biroul tău, reprezinți un magazin naturist sau doar vrei să ne spui cât de mult ți-au plăcut chipsurile noastre, te ascultăm!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Unitatea de Producție & Livada</h4>
                <p className="text-stone-600">Localitatea Mălini, Jud. Suceava, România</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Email</h4>
                <p className="text-stone-600">comenzi@natursnack.ro</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="nume" className="block text-sm font-medium text-stone-700 mb-1">Numele tău / Compania</label>
              <input type="text" id="nume" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors" placeholder="Ion Popescu" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Adresa de email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors" placeholder="ion@exemplu.ro" />
            </div>
            <div>
              <label htmlFor="mesaj" className="block text-sm font-medium text-stone-700 mb-1">Mesajul tău</label>
              <textarea id="mesaj" rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors" placeholder="Cum te putem ajuta?"></textarea>
            </div>
            <button type="button" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md">
              Trimite Mesajul
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
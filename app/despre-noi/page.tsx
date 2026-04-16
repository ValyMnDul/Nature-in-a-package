export default function DespreNoi() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-8 text-center">Povestea Natur Snack</h1>
      
      <div className="prose prose-lg prose-emerald mx-auto text-stone-700">
        <p className="lead text-xl text-stone-600 font-medium mb-8 text-center">
          Totul a început dintr-o nevoie simplă: dorința de a oferi copiilor și familiilor noastre gustări cu adevărat sănătoase, fără chimicale și fără zahăr adăugat.
        </p>

        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Tradiție și Inovație în Mălini</h2>
          <p className="mb-4">
             Ne mândrim cu faptul că baza afacerii noastre este o fundație solidă și locală. <strong>Suntem mândri să spunem: &quot;Produs în livada proprie din localitatea Mălini&quot;.</strong> Acest lucru ne permite să controlăm calitatea încă din faza de cules. Fructele ajung direct de pe ramură în unitatea noastră de procesare în cel mai scurt timp posibil.
          </p>
          <p>
             În plus, pentru a combate risipa alimentară, preluăm și fructele cu aspect &quot;imperfect&quot; de la fermierii locali din județul Suceava, transformându-le în gustări perfect delicioase.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-stone-800 mb-4 mt-8">Procesul Nostru Tehnologic</h3>
        <p className="mb-6">
            Spre deosebire de uscătoarele industriale clasice care &quot;ard&quot; fructele la temperaturi mari, noi folosim o abordare diferită. Procesul nostru implică:
        </p>
        <ul className="space-y-4 mb-8 list-none pl-0">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Selecție riguroasă:</strong> Fructele sunt spălate și feliate cu echipamente profesionale din inox, respectând normele de siguranță alimentară (HACCP).</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Deshidratare blândă:</strong> Uscăm fructele la temperaturi de sub 45°C timp de 12-18 ore. Această curbură lentă de uscare extrage apa, dar sigilează în interior vitaminele, mineralele și enzimele.</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Zero Emisii Chimice:</strong> Singura &quot;emisie&quot; a procesului nostru de producție este aburul. Iar resturile vegetale se întorc în natură sub formă de compost organic.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
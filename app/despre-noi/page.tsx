"use client";
import Image from "next/image";
import { useAppContext } from "../providers";

const textData = {
  ro: {
    title: "Povestea LIVADA CU RONȚĂIELI",
    sub: "Din inima comunei Mălini, direct în pachetul tău.",
    intro1: "Povestea din spatele produsului: Energie pură, fără compromisuri!",
    intro2: "Când ai 2 hectare de legume și fructe crescute sub soare, natura face toată treaba. Noi doar am găsit metoda de a păstra această energie într-o pungă. Chipsurile noastre sunt obținute exclusiv prin deshidratare, fără ulei, fără zahăr adăugat și fără conservanți. O explozie de fibre și vitamine, perfectă pentru momentele când ai nevoie de o gustare nutritivă, crocantă și 100% naturală. Simplu, sănătos, local!",
    processTitle: "Rețeta și Procesul de Realizare",
    processSub: "Fără zahăr adăugat. Fără conservanți. Fără coloranți. Doar materie primă de calitatea întâi, timp și multă răbdare.",
    steps: [
      {
        title: "1. Selecția Riguroasă a Materiei Prime",
        desc: "Baza oricărui produs excepțional este materia primă. Fructele și legumele sunt culese sau selectate doar atunci când ating punctul optim de maturitate. Acesta este momentul în care conținutul natural de fructoză și vitamine este la nivelul maxim, garantând un gust dulce și intens fără niciun adaos."
      },
      {
        title: "2. Pregătirea și Porționarea Preciză",
        desc: "Fiecare lot trece printr-un proces strict de igienizare. Fructele și legumele sunt spălate, curățate și tăiate. Felierea nu este întâmplătoare; grosimea fiecărei bucăți este calculată la milimetru pentru a asigura o uscare uniformă, menținând un echilibru perfect între o textură crocantă și un miez plin de aromă."
      },
      {
        title: "3. Deshidratarea Lentă (Secretul Nostru)",
        desc: "Acesta este nucleul procesului nostru. Folosim cuptoare profesionale de deshidratare unde aerul cald circulă constant, la temperaturi controlate ce nu depășesc 45&deg;C. Acest proces lent, care poate dura între 12 și 24 de ore, extrage doar apa. Vitaminele, mineralele și enzimele esențiale rămân complet intacte, produsul final fiind un super-aliment."
      },
      {
        title: "4. Răcirea și Stabilizarea",
        desc: "După scoaterea din cuptoare, produsele sunt lăsate să se răcească lent în mediu controlat. Această etapă de stabilizare previne condensul și asigură textura finală crocantă pe care clienții noștri o apreciază."
      },
      {
        title: "5. Ambalarea Etanșă",
        desc: "Pentru a menține calitatea fără a folosi conservanți, ambalarea se face imediat. Folosim pungi speciale cu barieră de protecție împotriva umidității și a luminii (ambalaje cu fereastră sau opace), asigurând un termen de valabilitate îndelungat, în mod 100% natural."
      }
    ]
  },
  en: {
    title: "The LIVADA CU RONȚĂIELI Story",
    sub: "From the heart of Mălini directly to your package.",
    intro1: "The story behind our product: Pure energy, no compromises!",
    intro2: "When you have 2 hectares of fruits and vegetables grown under the sun, nature does all the hard work. We simply found the method to preserve that energy in a bag. Our chips are made exclusively through dehydration, with no oil, no added sugar, and no preservatives. A burst of fiber and vitamins, perfect for moments when you need a nutritious, crunchy, and 100% natural snack. Simple, healthy, local!",
    processTitle: "Our Recipe & Production Process",
    processSub: "No added sugar. No preservatives. No artificial colors. Just premium raw materials, time, and a lot of patience.",
    steps: [
      {
        title: "1. Rigorous Raw Material Selection",
        desc: "The foundation of any exceptional product is the raw material. Fruits and vegetables are harvested or selected only when they reach optimal maturity. This is when the natural content of fructose and vitamins is at its peak, guaranteeing a sweet and intense taste without any additions."
      },
      {
        title: "2. Preparation and Precise Slicing",
        desc: "Every batch goes through a strict sanitization process. Fruits and vegetables are washed, peeled, and cut. Slicing is not random; the thickness of each piece is calculated to the millimeter to ensure uniform drying, maintaining a perfect balance between a crispy texture and a flavorful core."
      },
      {
        title: "3. Slow Dehydration (Our Secret)",
        desc: "This is the core of our process. We use professional dehydration ovens where warm air circulates constantly at controlled temperatures not exceeding 45&deg;C. This slow process, which can take between 12 and 24 hours, extracts only the water. Vitamins, minerals, and essential enzymes remain completely intact, making the final product a superfood."
      },
      {
        title: "4. Cooling and Stabilization",
        desc: "After being removed from the ovens, the products are left to cool slowly in a controlled environment. This stabilization step prevents condensation and ensures the final crispy texture that our customers appreciate."
      },
      {
        title: "5. Airtight Packaging",
        desc: "To maintain quality without using preservatives, packaging is done immediately. We use special bags with a protective barrier against moisture and light, ensuring a long shelf life in a 100% natural way."
      }
    ]
  }
};

export default function DespreNoi() {
  const { lang } = useAppContext();
  const t = textData[lang];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 sm:space-y-20 md:space-y-24">
      
      <section className="text-center space-y-6 sm:space-y-8">
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-100 dark:border-emerald-900/50 shadow-2xl bg-white flex items-center justify-center p-4">
            <Image 
              src="/logo.jpeg" 
              alt="LIVADA CU RONȚĂIELI Logo" 
              fill
              sizes="(max-width: 768px) 12rem, 16rem"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tight">
          {t.title}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-bold text-emerald-700 dark:text-emerald-500 uppercase tracking-[0.16em] sm:tracking-widest">
          {t.sub}
        </p>
      </section>

      <section className="bg-white/60 dark:bg-stone-800/40 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl space-y-5 sm:space-y-6 text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
        <p>{t.intro1}</p>
        <p>{t.intro2}</p>
      </section>

      <section className="space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 dark:text-white">
            {t.processTitle}
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto font-medium">
            {t.processSub}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-linear-to-b before:from-transparent before:via-emerald-600/30 before:to-transparent">
          {t.steps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-stone-900 bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-sm">{index + 1}</span>
              </div>
              
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-white/60 dark:bg-stone-800/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="font-bold text-lg sm:text-xl text-emerald-800 dark:text-emerald-400 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
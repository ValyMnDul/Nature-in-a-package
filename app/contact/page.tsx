"use client";
import { FormEvent, useState } from "react";
import { useAppContext } from "../providers";

const t = {
  ro: {
    title: "Să stăm de vorbă",
    sub: "Ai întrebări despre produsele noastre din livada din Mălini sau vrei o ofertă personalizată? Scrie-ne!",
    name: "Numele tău",
    email: "Adresa de email",
    msg: "Mesajul tău",
    btn: "Trimite Mesajul",
    sending: "Se trimite...",
    sent: "Mesaj trimis cu succes. Mulțumim!",
    error: "A apărut o problemă. Te rugăm să încerci din nou.",
    holderName: "Ion Popescu",
    holderMsg: "Cu ce te putem ajuta?",
    socialTitle: "Ne găsești și pe social media",
    socialSub: "Urmărește noutățile din livadă, loturile noi și idei de gustări sănătoase."
  },
  en: {
    title: "Let's Talk",
    sub: "Do you have questions about our products from the Mălini orchard or want a personalized offer? Write us!",
    name: "Your Name",
    email: "Email Address",
    msg: "Your Message",
    btn: "Send Message",
    sending: "Sending...",
    sent: "Message sent successfully. Thank you!",
    error: "Something went wrong. Please try again.",
    holderName: "John Doe",
    holderMsg: "How can we help you?",
    socialTitle: "Find us on social media",
    socialSub: "Follow orchard updates, new batches and healthy snack ideas."
  }
};

export default function Contact() {
  const { lang } = useAppContext();
  const content = t[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xyklekpe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setStatus("sent");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
          {content.title}
        </h1>
        <div className="h-1.5 w-20 bg-emerald-600 rounded-full"></div>
        <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
          {content.sub}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/50 dark:bg-stone-800/30 backdrop-blur-sm p-5 sm:p-8 rounded-3xl border border-white/20 shadow-xl"
      >
        <input type="hidden" name="_subject" value="Mesaj nou din formularul LIVADA CU RONȚĂIELI" />
        <input type="hidden" name="_language" value={lang} />
        <div>
          <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider">
            {content.name}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            placeholder={content.holderName}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider">
            {content.email}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            placeholder="contact@exemplu.ro"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider">
            {content.msg}
          </label>
          <textarea
            rows={5}
            name="message"
            required
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
            placeholder={content.holderMsg}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-black py-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-emerald-900/20"
        >
          {status === "sending" ? content.sending : content.btn}
        </button>

        {status === "sent" && (
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{content.sent}</p>
        )}

        {status === "error" && (
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">{content.error}</p>
        )}
      </form>

      <section className="mt-10 bg-stone-900 text-stone-200 p-5 sm:p-6 md:p-8 rounded-3xl border border-stone-700/50 shadow-xl">
        <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">{content.socialTitle}</h2>
        <p className="mt-2 text-stone-400 text-sm md:text-base">{content.socialSub}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <defs>
                <linearGradient id="igGradientContact" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f9ce34" />
                  <stop offset="50%" stopColor="#ee2a7b" />
                  <stop offset="100%" stopColor="#6228d7" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#igGradientContact)" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="url(#igGradientContact)" strokeWidth="2" />
              <circle cx="17.2" cy="6.8" r="1.2" fill="url(#igGradientContact)" />
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.86v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.88V12h3.32l-.53 3.47h-2.79v8.39A12 12 0 0 0 24 12"/>
            </svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path fill="#25F4EE" d="M14.5 4v8.54a3.62 3.62 0 1 1-3.63-3.62c.31 0 .61.04.9.11V6.45a6.16 6.16 0 1 0 5.27 6.09V9.15c1.04.76 2.32 1.2 3.69 1.2V7.81A3.76 3.76 0 0 1 17.1 4h-2.6Z"/>
              <path fill="#FE2C55" d="M13.5 3v8.54a3.62 3.62 0 1 1-3.63-3.62c.31 0 .61.04.9.11V5.45a6.16 6.16 0 1 0 5.27 6.09V8.15c1.04.76 2.32 1.2 3.69 1.2V6.81A3.76 3.76 0 0 1 16.1 3h-2.6Z"/>
              <path fill="#fff" d="M12.96 3.63v8.18a2.95 2.95 0 1 1-2.95-2.95c.27 0 .52.04.77.1V7.34a5.5 5.5 0 1 0 4.75 5.47V9.73a6.3 6.3 0 0 0 3.27.95V9.2a4.48 4.48 0 0 1-3.53-1.72 4.44 4.44 0 0 1-.95-2.85h-1.36Z"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
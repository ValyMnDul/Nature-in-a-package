"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type AppContextType = {
  lang: "ro" | "en";
  toggleLang: () => void;
  isDark: boolean;
  toggleDark: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<"ro" | "en">("ro");
  const [isDark, setIsDark] = useState(false);

  // Acest efect aplică clasa 'dark' direct pe tag-ul HTML, făcând Tailwind să reacționeze
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <AppContext.Provider
      value={{
        lang,
        toggleLang: () => setLang((prev) => (prev === "ro" ? "en" : "ro")),
        isDark,
        toggleDark: () => setIsDark((prev) => !prev),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext trebuie folosit într-un Provider");
  return context;
};
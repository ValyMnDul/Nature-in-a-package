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
  if (!context) throw new Error("Context error");
  return context;
};
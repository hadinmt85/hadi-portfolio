"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Lang } from "@/content/site";

type LanguageValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: (typeof site)["fa"];
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

const STORAGE_KEY = "hadi-portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "fa" || fromUrl === "en") {
      setLangState(fromUrl);
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fa" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      dir: lang === "fa" ? "rtl" : "ltr",
      t: site[lang] as (typeof site)["fa"],
      setLang,
      toggle: () => setLangState((prev) => (prev === "fa" ? "en" : "fa")),
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}

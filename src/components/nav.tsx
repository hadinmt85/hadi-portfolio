"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Close, Globe, Menu } from "@/components/icons";

export function Nav() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-section]"));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass shadow-[0_18px_50px_-30px_rgba(16,185,129,0.6)]"
            : "border border-transparent bg-white/[0.02] backdrop-blur-sm"
        }`}
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={lang === "fa" ? "هادی نعمتی — صفحه اصلی" : "Hadi Nemati — home"}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-display text-sm font-bold text-[#04211a] shadow-[0_10px_24px_-12px_rgba(52,211,153,0.9)] transition-transform duration-300 group-hover:-rotate-6">
            HN
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold text-ink">{t.hero.name}</span>
            <span className="text-[11px] text-muted">{t.hero.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {t.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                active === item.id
                  ? "bg-white/[0.07] text-ink"
                  : "text-muted hover:bg-white/[0.04] hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-full border border-line bg-white/[0.04] p-0.5"
            role="group"
            aria-label={t.languages.switchLabel}
          >
            <button
              type="button"
              onClick={() => setLang("fa")}
              aria-pressed={lang === "fa"}
              className={`flex min-w-[38px] items-center justify-center rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                lang === "fa" ? "bg-emerald-400/15 text-emerald-300" : "text-muted hover:text-ink"
              }`}
            >
              فا
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`flex min-w-[38px] items-center justify-center rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                lang === "en" ? "bg-emerald-400/15 text-emerald-300" : "text-muted hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>

          <Globe className="hidden h-4 w-4 text-muted lg:block" />

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.04] text-ink transition-colors hover:border-emerald-400/40 hover:text-emerald-300 md:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-6xl md:hidden">
          <nav className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-2xl">
            {t.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                  active === item.id
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-muted hover:bg-white/[0.05] hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

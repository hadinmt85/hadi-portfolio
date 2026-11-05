"use client";

import { useLanguage } from "@/components/language-provider";
import { Avatar } from "@/components/avatar";
import { ArrowDown, ArrowUpRight, Github } from "@/components/icons";
import { siteLinks } from "@/content/site";

export function Footer() {
  const { t, lang } = useLanguage();
  const year = lang === "fa" ? "۱۴۰۵" : "2026";

  return (
    <footer className="relative mt-10 border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <Avatar alt={t.hero.name} size={40} />
          <div>
            <p className="font-display text-sm font-semibold text-ink">{t.hero.name}</p>
            <p className="text-[11.5px] text-muted">{t.footer.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[12px] text-muted">
          <span>
            © {year} {t.hero.name} — {t.footer.rights}
          </span>
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            {t.footer.top}
            <ArrowDown className="h-3.5 w-3.5 rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  );
}

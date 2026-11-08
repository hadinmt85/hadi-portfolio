"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { ArrowUpRight, Download } from "@/components/icons";
import { siteLinks } from "@/content/site";

export function ResumeView() {
  const { lang, setLang, t } = useLanguage();
  const { hero, about, skills, projects, contact, languages } = t;

  const skillGroups = skills.groups.map((group) => ({
    title: group.title,
    items: group.skills.map((skill) => skill.name),
  }));

  const contactLine = [contact.email, contact.phone, contact.location].filter(Boolean).join("  ·  ");

  return (
    <div className="min-h-screen bg-[#eef2f0] py-6 print:min-h-0 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-5 flex w-full max-w-[820px] flex-wrap items-center justify-between gap-3 px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-neutral-600 transition-colors hover:text-emerald-700"
        >
          <ArrowUpRight className="h-4 w-4 rotate-[225deg]" />
          {lang === "fa" ? "بازگشت به سایت" : "Back to site"}
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-neutral-300 bg-white p-0.5">
            <button
              type="button"
              onClick={() => setLang("fa")}
              aria-pressed={lang === "fa"}
              className={`min-w-[38px] rounded-full px-2.5 py-1.5 text-xs font-semibold ${
                lang === "fa" ? "bg-emerald-600 text-white" : "text-neutral-600"
              }`}
            >
              فا
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`min-w-[38px] rounded-full px-2.5 py-1.5 text-xs font-semibold ${
                lang === "en" ? "bg-emerald-600 text-white" : "text-neutral-600"
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <Download className="h-4 w-4" />
            {lang === "fa" ? "چاپ / ذخیرهٔ PDF" : "Print / Save PDF"}
          </button>
        </div>
      </div>

      <article
        dir={lang === "fa" ? "rtl" : "ltr"}
        className="resume-sheet mx-auto w-full max-w-[820px] bg-white px-8 py-9 text-neutral-900 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] sm:px-12 sm:py-12 print:max-w-none print:px-0 print:py-0 print:shadow-none"
      >
        <header className="border-b border-neutral-200 pb-5">
          <h1 className="text-[26px] font-extrabold leading-tight">{hero.name}</h1>
          <p className="mt-1 text-[14px] font-semibold text-emerald-700">{hero.role}</p>
          <p className="mt-2 text-[12px] text-neutral-600" dir="ltr">
            {contactLine}
          </p>
          <p className="mt-1 text-[12px] text-neutral-600" dir="ltr">
            {siteLinks.github.replace("https://", "")} · {siteLinks.telegram.replace("https://", "")}
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-500">
            {lang === "fa" ? "خلاصه" : "Summary"}
          </h2>
          <p className="mt-2 text-[13px] leading-7 text-neutral-800">{about.paragraphs[0]}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-500">
            {lang === "fa" ? "مهارت‌ها" : "Skills"}
          </h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[12.5px] font-bold text-neutral-800">{group.title}</h3>
                <p className="mt-1 text-[12px] leading-6 text-neutral-600">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-500">
            {lang === "fa" ? "پروژه‌ها" : "Projects"}
          </h2>
          <div className="mt-3 space-y-4">
            {projects.items.map((project) => (
              <div key={project.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[13.5px] font-bold text-neutral-900">{project.title}</h3>
                  <span className="text-[11px] text-neutral-500">{project.year}</span>
                </div>
                <p className="mt-1 text-[12px] leading-6 text-neutral-700">{project.blurb}</p>
                <p className="mt-1 text-[11px] text-neutral-500">{project.tags.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-500">
            {lang === "fa" ? "دربارهٔ من" : "About"}
          </h2>
          {about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-2 text-[12px] leading-7 text-neutral-700">
              {paragraph}
            </p>
          ))}
        </section>

        <footer className="mt-8 border-t border-neutral-200 pt-4 text-[11px] text-neutral-500">
          {contact.email} · {siteLinks.githubHandle} ·{" "}
          {lang === "fa" ? languages.fa : languages.en}
        </footer>
      </article>
    </div>
  );
}

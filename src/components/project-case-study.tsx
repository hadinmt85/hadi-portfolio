"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { ArrowUpRight, Github, Moon, Sun } from "@/components/icons";
import { caseStudyLabels, getCaseStudy } from "@/content/case-studies";

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggle } = useTheme();

  const project = t.projects.items.find((item) => item.slug === slug);
  const copy = getCaseStudy(lang, slug);
  const labels = caseStudyLabels[lang];

  if (!project || !copy) return null;

  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-accent"
          >
            <ArrowUpRight className="h-4 w-4 rotate-[225deg] transition-transform group-hover:-translate-x-0.5" />
            {labels.back}
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={lang === "fa" ? "تغییر حالت روشن و تیره" : "Toggle light and dark mode"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="flex items-center rounded-full border border-line bg-surface2 p-0.5">
              <button
                type="button"
                onClick={() => setLang("fa")}
                aria-pressed={lang === "fa"}
                className={`min-w-[38px] rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "fa" ? "bg-accent/15 text-accent" : "text-muted hover:text-ink"
                }`}
              >
                فا
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`min-w-[38px] rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  lang === "en" ? "bg-accent/15 text-accent" : "text-muted hover:text-ink"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted/70">{project.year}</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-8 text-muted">{copy.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] text-muted">
          <span className="rounded-full border border-line bg-surface2 px-3 py-1">{copy.role}</span>
          <span className="rounded-full border border-line bg-surface2 px-3 py-1">{copy.timeline}</span>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
              {labels.demo}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          <a href={project.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Github className="h-4 w-4" />
            {labels.code}
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
          <div
            className="project-shot max-h-[440px] overflow-y-auto overscroll-contain"
            style={{ background: project.gradient }}
            dir="ltr"
            tabIndex={0}
            role="group"
            aria-label={project.title}
          >
            <Image
              src={project.image.src}
              alt={project.title}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1024px) 960px, 100vw"
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-bold text-ink">{section.title}</h2>
              <p className="mt-3 max-w-3xl text-[14px] leading-8 text-muted">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-[14px] leading-7 text-muted">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-[10.5px] uppercase tracking-[0.18em] text-muted/70">{labels.stack}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-ink">{labels.ctaTitle}</h2>
          <p className="mt-2 max-w-2xl text-[14px] leading-7 text-muted">{labels.ctaBody}</p>
          <Link href="/#contact" className="btn btn-primary mt-5">
            {labels.ctaButton}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

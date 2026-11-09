"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Download, Github } from "@/components/icons";
import type { Project } from "@/content/site";

const PROJECT_ORDER = ["portfolio", "product-store", "license-market"];

function CapIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M6 11.4V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.6" />
      <path d="M21 9.5V15" />
    </svg>
  );
}

export function Education() {
  const { t } = useLanguage();
  const { education } = t;

  const projects = PROJECT_ORDER.map((slug) =>
    t.projects.items.find((project) => project.slug === slug),
  ).filter((project): project is Project => Boolean(project));

  const skills = ["React", "Next.js", "TypeScript", "Tailwind", "Git", "REST API", "Figma"];

  return (
    <section id="journey" data-section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading kicker={education.kicker} title={education.title} desc={education.desc} />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-2">
              <a href="/resume.pdf" download className="btn btn-ghost">
                <Download className="h-4 w-4" />
                {education.resumeCta}
              </a>
              <a href="/resume-en.pdf" download className="btn btn-ghost">
                <Download className="h-4 w-4" />
                English CV
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-surface p-6 sm:p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                <CapIcon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-ink">{education.degree}</h3>
              <p className="mt-1.5 text-[13px] text-muted">
                {education.university} — {education.location}
              </p>
              <p className="mt-4 font-mono text-[11.5px] text-accent">{education.period}</p>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-[11px] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {education.status}
              </span>

              <div className="mt-6 border-t border-line pt-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted/70">{education.coursesLabel}</p>
                <p className="mt-2 text-[12.5px] leading-6 text-muted">{education.courses}</p>
              </div>

              <div className="mt-5 border-t border-line pt-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted/70">{education.skillsLabel}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border-t border-line pt-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted/70">{education.languagesLabel}</p>
                <p className="mt-2 text-[12.5px] leading-6 text-muted">{education.languages}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-line bg-surface p-6 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted/70">{education.projectsLabel}</p>

              <ol className="timeline mt-5 space-y-6">
                {projects.map((project) => (
                  <li key={project.slug} className="relative ps-5">
                    <span className="timeline-dot absolute start-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-mono text-[10.5px] text-accent">{project.period}</span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="font-display text-[14.5px] font-bold text-ink transition-colors hover:text-accent"
                      >
                        {project.title}
                      </Link>
                    </div>
                    <p className="mt-1.5 text-[12px] leading-6 text-muted">{project.blurb}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-accent/80 transition-colors hover:text-accent"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

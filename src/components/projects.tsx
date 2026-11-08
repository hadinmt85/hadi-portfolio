"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, Globe } from "@/components/icons";
import { siteLinks } from "@/content/site";
import type { Project } from "@/content/site";

function ProjectShot({ project }: { project: Project }) {
  return (
    <div className="relative">
      <Link
        href={`/projects/${project.slug}`}
        className="project-shot block h-60 overflow-y-auto overscroll-contain"
        style={{ background: project.gradient }}
        dir="ltr"
        tabIndex={0}
        aria-label={project.title}
        data-lenis-prevent
      >
        <Image
          src={project.image.src}
          alt={project.title}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="h-auto w-full select-none"
          draggable={false}
        />
      </Link>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent"
      />
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section id="projects" data-section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading kicker={projects.kicker} title={projects.title} desc={projects.desc} />
          </Reveal>
          <Reveal delay={120}>
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-accent/50">
                {projects.allLabel}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 100 + Math.floor(index / 2) * 60}>
              <article className="group card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface">
                <ProjectShot project={project} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted/70">
                      {project.year}
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={project.title}
                      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface2 text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition-colors group-hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{project.blurb}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent/80 transition-colors hover:text-accent"
                    >
                      {projects.caseLabel}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>

                    <div className="flex items-center gap-1.5">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={project.title}
                          title={project.title}
                          className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          <Globe className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                        className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github } from "@/components/icons";
import { siteLinks } from "@/content/site";
import type { Project } from "@/content/site";

function ProjectArt({ project, index }: { project: Project; index: number }) {
  const layouts = [
    [38, 62, 48, 80, 56, 92],
    [72, 44, 88, 54, 66, 36],
    [50, 78, 40, 66, 92, 48],
  ];
  const bars = layouts[index % layouts.length];
  const flip = index % 2 === 1;

  return (
    <div className="relative h-52 overflow-hidden" style={{ background: project.gradient }} dir="ltr">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-12 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: project.accent, opacity: 0.28 }}
      />

      <div className="absolute inset-x-6 top-8 bottom-0 flex flex-col rounded-t-2xl border border-white/20 bg-[#04120f]/55 p-3 shadow-[0_-12px_44px_-18px_rgba(0,0,0,0.85)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/75" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span className="ms-auto h-3 w-24 rounded-full bg-white/12" />
        </div>

        <div className={`mt-4 flex flex-1 gap-3 ${flip ? "flex-row-reverse" : ""}`}>
          <div className="flex-1 space-y-2">
            <div className="h-2 w-2/3 rounded-full bg-white/55" />
            <div className="h-1.5 w-full rounded-full bg-white/25" />
            <div className="h-1.5 w-5/6 rounded-full bg-white/20" />
            <div className="mt-3 h-6 w-20 rounded-lg bg-white/30" />
          </div>
          <div className="flex w-[38%] items-end gap-1.5 rounded-lg bg-black/25 p-2">
            {bars.map((height, barIndex) => (
              <span
                key={barIndex}
                className="flex-1 rounded-sm"
                style={{
                  height: `${height}%`,
                  background: project.accent,
                  opacity: 0.5 + barIndex * 0.08,
                }}
              />
            ))}
          </div>
        </div>
      </div>
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
              className="group inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-emerald-300"
            >
              <Github className="h-4 w-4" />
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-emerald-400/50">
                {projects.allLabel}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 100 + Math.floor(index / 2) * 60}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] focus-visible:outline-emerald-400"
              >
                <ProjectArt project={project} index={index} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted/70">
                      {project.year}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-muted transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:text-emerald-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-ink transition-colors group-hover:text-emerald-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{project.blurb}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12px] font-medium text-emerald-300/80">
                    {projects.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

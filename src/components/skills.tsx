"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Code, Layers, Sparkles, Wrench } from "@/components/icons";

const groupIcons = [Code, Layers, Wrench];

export function Skills() {
  const { t } = useLanguage();
  const { skills } = t;

  return (
    <section id="skills" data-section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading kicker={skills.kicker} title={skills.title} desc={skills.desc} />
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-2 self-start rounded-full border border-line bg-surface px-4 py-2 text-[11.5px] text-muted">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-lime-400" />
              {t.hero.card.status}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skills.groups.map((group, groupIndex) => {
            const Icon = groupIcons[groupIndex % groupIcons.length];
            return (
              <Reveal key={group.title} delay={groupIndex * 100}>
                <div className="card-hover h-full rounded-3xl border border-line bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold text-ink">{group.title}</h3>
                      <p className="text-[11px] text-muted/80">{group.caption}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[13px] text-ink/85">{skill.name}</span>
                          <span className="font-mono text-[10.5px] text-muted/70">{skill.level}%</span>
                        </div>
                        <div className="skill-bar mt-2">
                          <div
                            className="skill-fill"
                            style={{ "--level": `${skill.level}%` } as CSSProperties}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex items-start gap-2.5 text-[12.5px] leading-6 text-muted/85">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" />
            {skills.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

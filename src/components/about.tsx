"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Check, Sparkles } from "@/components/icons";

export function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" data-section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading kicker={about.kicker} title={about.title} />
            </Reveal>

            <div className="mt-6 max-w-2xl space-y-4">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={80 + index * 80}>
                  <p className="text-[15px] leading-8 text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-9 space-y-3">
              {about.highlights.map((item, index) => (
                <Reveal key={item.title} delay={160 + index * 70}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/25 hover:bg-emerald-400/[0.04]">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-[13px] leading-6 text-muted">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card-hover rounded-3xl border border-white/[0.07] bg-white/[0.03] p-5 text-center"
                  >
                    <p className="gradient-text font-display text-3xl font-extrabold">{stat.value}</p>
                    <p className="mt-2 text-[11.5px] leading-5 text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-3 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.09] via-white/[0.02] to-cyan-400/[0.06] p-5">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  {about.currently.label}
                </p>
                <p className="mt-3 text-[13.5px] leading-6 text-ink/85">{about.currently.text}</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-3 flex items-center justify-between rounded-3xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <p className="text-[12.5px] text-muted">{t.hero.card.status}</p>
                </div>
                <span className="font-mono text-[11px] text-emerald-300/80" dir="ltr">
                  /now
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

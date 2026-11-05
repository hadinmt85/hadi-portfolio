"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "@/components/icons";

function ProfileCard() {
  const { t } = useLanguage();
  const { card } = t.hero;

  const codeLines: Array<Array<{ text: string; tone: "key" | "str" | "punc" | "bool" }>> = [
    [
      { text: "const", tone: "key" },
      { text: " developer ", tone: "punc" },
      { text: "= {", tone: "punc" },
    ],
    [
      { text: "  role", tone: "key" },
      { text: ": ", tone: "punc" },
      { text: '"front-end"', tone: "str" },
      { text: ",", tone: "punc" },
    ],
    [
      { text: "  stack", tone: "key" },
      { text: ": [", tone: "punc" },
      { text: '"react"', tone: "str" },
      { text: ", ", tone: "punc" },
      { text: '"next.js"', tone: "str" },
      { text: ", ", tone: "punc" },
      { text: '"ts"', tone: "str" },
      { text: "],", tone: "punc" },
    ],
    [
      { text: "  focus", tone: "key" },
      { text: ": ", tone: "punc" },
      { text: '"performance"', tone: "str" },
      { text: ",", tone: "punc" },
    ],
    [
      { text: "  shipsOnTime", tone: "key" },
      { text: ": ", tone: "punc" },
      { text: "true", tone: "bool" },
      { text: ",", tone: "punc" },
    ],
    [{ text: "};", tone: "punc" }],
  ];

  const toneClass = {
    key: "text-cyan-300/90",
    str: "text-emerald-300",
    punc: "text-white/35",
    bool: "text-lime-300",
  };

  return (
    <div className="relative mx-auto w-full max-w-[410px]">
      <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-tr from-emerald-500/25 via-cyan-400/15 to-lime-400/20 blur-2xl" />

      <div className="relative rounded-[30px] border border-line bg-bgsoft p-6 shadow-card backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 font-display text-xl font-extrabold text-[#04211a]">
            HN
            <span className="absolute -bottom-1 -end-1 grid h-5 w-5 place-items-center rounded-full border-2 border-bgsoft bg-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#04211a]" />
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-display text-lg font-bold text-ink">{t.hero.name}</p>
            <p className="text-sm text-muted">{t.hero.role}</p>
            <p className="mt-1.5 inline-flex items-center gap-2 text-[11px] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
              {card.status}
            </p>
          </div>
        </div>

        <div
          dir="ltr"
          className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#08140f] p-4 font-mono text-[11.5px] leading-6"
        >
          {codeLines.map((line, index) => (
            <div key={index} className="flex gap-4 whitespace-pre">
              <span className="w-3 select-none text-end text-white/15">{index + 1}</span>
              <span>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={toneClass[token.tone]}>
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">{card.stackLabel}</p>
            <div className="mt-2 flex gap-1.5">
              {["React", "Next", "TS"].map((tech) => (
                <span key={tech} className="tag px-2 py-1 text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="text-end">
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">{card.focusLabel}</p>
            <p dir="ltr" className="mt-2 font-mono text-[11px] text-accent/90">
              {card.focus}
            </p>
          </div>
        </div>
      </div>

      <div className="glass absolute -top-5 -end-3 hidden animate-float items-center gap-2 rounded-2xl px-3.5 py-2 text-xs shadow-xl sm:flex">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        <span className="font-mono text-[11px] text-ink/90">npm run dev</span>
      </div>

      <div
        className="glass absolute -bottom-8 -start-4 hidden animate-float-slow items-center gap-2 rounded-2xl px-3.5 py-2 text-xs shadow-xl sm:flex"
        style={{ animationDelay: "-3s" }}
      >
        <span className="text-accent">✓</span>
        <span className="text-[11px] text-ink/90">Lighthouse 100</span>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const marquee = [...t.hero.marquee, ...t.hero.marquee];

  return (
    <section id="home" data-section className="relative pt-32 pb-14 sm:pt-40 lg:pb-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                {t.hero.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 text-base text-muted sm:text-lg">{t.hero.greeting}</p>
              <h1 className="mt-1 font-display text-[2.7rem] font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-[4.1rem]">
                <span className="gradient-text">{t.hero.name}</span>
              </h1>
              <p className="mt-3 font-display text-xl font-semibold text-ink/90 sm:text-2xl">{t.hero.role}</p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-muted">{t.hero.lead}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn btn-primary">
                  {t.hero.primaryCta}
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  {t.hero.secondaryCta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  className="group inline-flex items-center gap-2 px-2 py-2 text-sm text-muted transition-colors hover:text-accent"
                  download
                >
                  <Download className="h-4 w-4" />
                  <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-accent/50">
                    {t.hero.resume}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex items-center gap-2 text-xs text-muted">
                <MapPin className="h-4 w-4 text-accent/80" />
                {t.hero.location}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <ProfileCard />
          </Reveal>
        </div>

        <div className="marquee-mask mt-20 overflow-hidden border-y border-line py-4">
          <div className="marquee-track items-center">
            {marquee.map((item, index) => (
              <span key={`${item}-${index}`} className="flex shrink-0 items-center">
                <span className="whitespace-nowrap px-6 font-display text-sm font-medium text-muted/70">{item}</span>
                <span className="h-1 w-1 rounded-full bg-accent/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

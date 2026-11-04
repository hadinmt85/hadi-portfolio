"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Telegram } from "@/components/icons";
import type { Social } from "@/content/site";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  telegram: Telegram,
  mail: Mail,
};

function SocialLink({ social }: { social: Social }) {
  const Icon = socialIcons[social.icon];
  const external = social.icon !== "mail";

  return (
    <a
      href={social.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={social.label}
      title={social.label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/45 hover:bg-emerald-400/10 hover:text-emerald-300"
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const { contact } = t;
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `New message from ${name || "your website"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const rows = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}`, value: contact.email, ltr: true },
    { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, value: contact.phone, ltr: true },
    { icon: MapPin, label: contact.location, href: undefined, value: contact.location, ltr: false },
  ];

  return (
    <section id="contact" data-section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="gradient-border rounded-[34px] p-[1px] shadow-[0_40px_100px_-50px_rgba(16,185,129,0.6)]">
            <div className="relative overflow-hidden rounded-[33px] bg-[#06100d]/95 px-6 py-10 sm:p-10 lg:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
              />
              <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <SectionHeading kicker={contact.kicker} title={contact.title} desc={contact.desc} />

                  <div className="mt-8 space-y-3">
                    {rows.map((row) => {
                      const Icon = row.icon;
                      const content = (
                        <>
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                          <span className="min-w-0">
                            <span dir={row.ltr ? "ltr" : undefined} className="block truncate text-[13.5px] text-ink/90">
                              {row.value}
                            </span>
                          </span>
                        </>
                      );

                      return row.href ? (
                        <a
                          key={row.label}
                          href={row.href}
                          className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-3 transition-colors hover:border-emerald-400/30 hover:bg-emerald-400/[0.05]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div
                          key={row.label}
                          className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-3"
                        >
                          {content}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <p className="text-[10.5px] uppercase tracking-[0.18em] text-muted/70">social</p>
                    <div className="mt-3 flex items-center gap-2.5">
                      {contact.socials.map((social) => (
                        <SocialLink key={social.label} social={social} />
                      ))}
                      <a
                        href="https://github.com/hadi-nemati"
                        target="_blank"
                        rel="noreferrer"
                        className="ms-1 inline-flex items-center gap-1 text-[12px] text-muted transition-colors hover:text-emerald-300"
                      >
                        @hadi-nemati
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
                  <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[12px] text-muted">
                          {contact.form.name}
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          placeholder={contact.form.namePlaceholder}
                          className="field"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[12px] text-muted">
                          {contact.form.email}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder={contact.form.emailPlaceholder}
                          className="field"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                      <label htmlFor="message" className="text-[12px] text-muted">
                        {contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={contact.form.messagePlaceholder}
                        className="field min-h-[150px] flex-1 resize-none"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                      {contact.form.submit}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <p className="text-center text-[11px] leading-5 text-muted/75">
                      {sent ? <span className="text-emerald-300">{contact.form.success}</span> : contact.form.note}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

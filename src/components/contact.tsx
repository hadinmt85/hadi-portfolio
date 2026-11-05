"use client";

import { Fragment, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, Mail, MapPin, Phone, Telegram } from "@/components/icons";
import { siteLinks } from "@/content/site";
import type { Social } from "@/content/site";

const socialIcons = {
  github: Github,
  telegram: Telegram,
  mail: Mail,
};

function PhoneRow({ phone, showLabel }: { phone: string; showLabel: string }) {
  const [visible, setVisible] = useState(false);
  const digits = phone.replace(/\D/g, "");
  const masked = `${digits.slice(0, 4)} ••• ${digits.slice(-4)}`;

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 transition-colors hover:border-accent/30 hover:bg-accent/[0.05]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
        <Phone className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0">
        {visible ? (
          <a
            href={`tel:${digits}`}
            dir="ltr"
            className="block truncate text-[13.5px] text-ink/90 transition-colors hover:text-accent"
          >
            {phone}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setVisible(true)}
            className="group flex items-center gap-2 text-[13.5px] text-muted transition-colors hover:text-accent"
          >
            <span dir="ltr" className="tabular-nums">
              {masked}
            </span>
            <span className="text-[11px] text-accent/80 underline-offset-2 group-hover:underline">{showLabel}</span>
          </button>
        )}
      </span>
    </div>
  );
}

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
      className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface2 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/10 hover:text-accent"
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
    { icon: MapPin, label: contact.location, href: undefined, value: contact.location, ltr: false },
  ];

  return (
    <section id="contact" data-section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="gradient-border rounded-[34px] p-[1px] shadow-[0_40px_100px_-50px_rgba(16,185,129,0.6)]">
            <div className="relative overflow-hidden rounded-[33px] bg-bgsoft px-6 py-10 sm:p-10 lg:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -end-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
              />
              <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <SectionHeading kicker={contact.kicker} title={contact.title} desc={contact.desc} />

                  <div className="mt-8 space-y-3">
                    {rows.map((row, index) => {
                      const Icon = row.icon;
                      const content = (
                        <>
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                          <span className="min-w-0">
                            <span dir={row.ltr ? "ltr" : undefined} className="block truncate text-[13.5px] text-ink/90">
                              {row.value}
                            </span>
                          </span>
                        </>
                      );

                      const item = row.href ? (
                        <a
                          href={row.href}
                          className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 transition-colors hover:border-accent/30 hover:bg-accent/[0.05]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
                          {content}
                        </div>
                      );

                      return (
                        <Fragment key={row.label}>
                          {item}
                          {index === 0 && <PhoneRow phone={contact.phone} showLabel={contact.showPhone} />}
                        </Fragment>
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
                        href={siteLinks.github}
                        target="_blank"
                        rel="noreferrer"
                        dir="ltr"
                        className="ms-1 inline-flex items-center gap-1 text-[12px] text-muted transition-colors hover:text-accent"
                      >
                        {siteLinks.githubHandle}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex rounded-3xl border border-line bg-surface p-5 sm:p-6">
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
                      {sent ? <span className="text-accent">{contact.form.success}</span> : contact.form.note}
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

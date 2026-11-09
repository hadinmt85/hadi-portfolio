"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Check, Github, Instagram, Mail, MapPin, Phone, Telegram } from "@/components/icons";
import { siteLinks } from "@/content/site";
import type { Social } from "@/content/site";

const socialIcons = {
  github: Github,
  telegram: Telegram,
  instagram: Instagram,
  mail: Mail,
};

function gmailCompose(email: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      return true;
    } catch {
      return false;
    }
  }
}

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

function EmailRow({
  email,
  copyLabel,
  copiedLabel,
  gmailLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  gmailLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(email);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 transition-colors hover:border-accent/30 hover:bg-accent/[0.05]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
        <Mail className="h-[18px] w-[18px]" />
      </span>
      <button type="button" onClick={handleCopy} className="min-w-0 flex-1 text-start">
        <span dir="ltr" className="block truncate text-end text-[13.5px] text-ink/90">
          {email}
        </span>
        <span className="mt-0.5 flex items-center justify-start gap-1 text-[10.5px] text-muted">
          {copied ? (
            <>
              <Check className="h-3 w-3 text-accent" />
              <span className="text-accent">{copiedLabel}</span>
            </>
          ) : (
            copyLabel
          )}
        </span>
      </button>
      <a
        href={gmailCompose(email)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line bg-surface2 px-2.5 py-1.5 text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
      >
        {gmailLabel}
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </div>
  );
}

function SocialLink({ social }: { social: Social }) {
  const Icon = socialIcons[social.icon];
  const external = social.href.startsWith("http");

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
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fallback" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(contact.email);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "");

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      if (response.ok) {
        form.reset();
        setStatus("ok");
        return;
      }

      // No mail provider configured yet. Do not open mailto (it often does
      // nothing when the system has no default mail app); offer copy + Gmail.
      if (response.status === 501) {
        setStatus("fallback");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

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
                    <EmailRow
                      email={contact.email}
                      copyLabel={contact.form.copyEmail}
                      copiedLabel={contact.form.copied}
                      gmailLabel={contact.form.gmail}
                    />
                    <PhoneRow phone={contact.phone} showLabel={contact.showPhone} />
                    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                        <MapPin className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[13.5px] text-ink/90">{contact.location}</span>
                      </span>
                    </div>
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

                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company">Company</label>
                      <input id="company" name="company" tabIndex={-1} autoComplete="off" />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" ? contact.form.sending : contact.form.submit}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <div className="text-center text-[11px] leading-5 text-muted/75">
                      {status === "ok" ? (
                        <span className="text-accent">{contact.form.success}</span>
                      ) : status === "error" ? (
                        <span className="text-red-400">{contact.form.error}</span>
                      ) : status === "fallback" ? (
                        <div className="space-y-1.5">
                          <p>{contact.form.fallback}</p>
                          <div className="flex flex-wrap items-center justify-center gap-3">
                            <button
                              type="button"
                              onClick={handleCopy}
                              className="inline-flex items-center gap-1 font-medium text-accent underline-offset-2 hover:underline"
                            >
                              {copied ? (
                                <>
                                  <Check className="h-3 w-3" />
                                  {contact.form.copied}
                                </>
                              ) : (
                                contact.form.copyEmail
                              )}
                            </button>
                            <a
                              href={gmailCompose(contact.email)}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-accent underline-offset-2 hover:underline"
                            >
                              {contact.form.gmail}
                              <ArrowUpRight className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        contact.form.note
                      )}
                    </div>
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

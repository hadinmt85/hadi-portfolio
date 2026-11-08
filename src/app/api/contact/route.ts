import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "namatihadi7@gmail.com";

function clean(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120);
  const message = clean(payload.message, 3000);
  const honeypot = clean(payload.company, 100);

  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const text = `پیام جدید از سایت\n\nنام: ${name}\nایمیل: ${email}\n\n${message}`;
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChat = process.env.TELEGRAM_CHAT_ID;

  if (telegramToken && telegramChat) {
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: telegramChat, text, disable_web_page_preview: true }),
    }).catch(() => null);

    if (response?.ok) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, error: "telegram_failed" }, { status: 502 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `پیام جدید از سایت — ${name}`,
        text,
        html: `<p dir="rtl"><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p><p dir="auto">${escapeHtml(
          message,
        ).replace(/\n/g, "<br/>")}</p>`,
      }),
    }).catch(() => null);

    if (response?.ok) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, error: "email_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: false, error: "not_configured" }, { status: 501 });
}

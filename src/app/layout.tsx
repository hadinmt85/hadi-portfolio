import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "هادی نعمتی | توسعه‌دهنده فرانت‌اند",
  description:
    "هادی نعمتی، توسعه‌دهنده فرانت‌اند. ساخت رابط‌های کاربری سریع، در دسترس و زیبا با React و Next.js.",
  keywords: ["front-end", "react", "next.js", "typescript", "portfolio", "هادی نعمتی"],
  authors: [{ name: "Hadi Nemati" }],
  openGraph: {
    title: "هادی نعمتی | توسعه‌دهنده فرانت‌اند",
    description: "رابط‌های کاربری سریع، در دسترس و زیبا با React و Next.js.",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "هادی نعمتی | توسعه‌دهنده فرانت‌اند",
    description: "رابط‌های کاربری سریع، در دسترس و زیبا با React و Next.js.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050908",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

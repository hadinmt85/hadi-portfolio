import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

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
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hadinemati.ir"),
  title: "هادی نعمتی | توسعه‌دهنده فرانت‌اند",
  description:
    "هادی نعمتی، توسعه‌دهنده فرانت‌اند. ساخت رابط‌های کاربری سریع، در دسترس و زیبا با React و Next.js.",
  keywords: ["front-end", "react", "next.js", "typescript", "portfolio", "هادی نعمتی"],
  authors: [{ name: "Hadi Nemati" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "هادی نعمتی | توسعه‌دهنده فرانت‌اند",
    description: "رابط‌های کاربری سریع، در دسترس و زیبا با React و Next.js.",
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: "هادی نعمتی",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "هادی نعمتی — توسعه‌دهندهٔ فرانت‌اند",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "هادی نعمتی | توسعه‌دهنده فرانت‌اند",
    description: "رابط‌های کاربری سریع، در دسترس و زیبا با React و Next.js.",
    images: ["/og.png"],
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
      data-theme="dark"
      className={`${vazirmatn.variable} ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("hadi-portfolio-theme");var d=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";var t=(s==="light"||s==="dark")?s:d;document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?"#f2f8f5":"#050908");}catch(e){document.documentElement.dataset.theme="dark";}})();`,
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

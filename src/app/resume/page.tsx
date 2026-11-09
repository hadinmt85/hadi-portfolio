import type { Metadata } from "next";
import { ResumeView } from "@/components/resume-view";

export const metadata: Metadata = {
  title: "رزومه | هادی نعمتی",
  description: "رزومهٔ هادی نعمتی، توسعه‌دهندهٔ فرانت‌اند — React و Next.js.",
  alternates: { canonical: "/resume" },
  robots: { index: false, follow: true },
};

type SearchParams = { searchParams: Promise<{ lang?: string }> };

export default async function ResumePage({ searchParams }: SearchParams) {
  const { lang } = await searchParams;
  const forceLang = lang === "fa" || lang === "en" ? lang : undefined;

  return <ResumeView forceLang={forceLang} />;
}

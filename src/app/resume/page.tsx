import type { Metadata } from "next";
import { ResumeView } from "@/components/resume-view";

export const metadata: Metadata = {
  title: "رزومه | هادی نعمتی",
  description: "رزومهٔ هادی نعمتی، توسعه‌دهندهٔ فرانت‌اند — React و Next.js.",
  alternates: { canonical: "/resume" },
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  return <ResumeView />;
}

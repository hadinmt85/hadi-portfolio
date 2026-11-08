import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { site } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.fa.projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = site.fa.projects.items.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | هادی نعمتی`,
    description: project.blurb,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | هادی نعمتی`,
      description: project.blurb,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = site.fa.projects.items.find((item) => item.slug === slug);
  if (!project) notFound();

  return <ProjectCaseStudy slug={project.slug} />;
}

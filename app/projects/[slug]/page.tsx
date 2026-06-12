import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug.current }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const imageUrl = project.image
    ? urlFor(project.image).width(1600).url()
    : null;

  return (
    <section className="project-detail">
      <p className="eyebrow">Project</p>
      <h1>{project.title}</h1>
      <dl className="project-detail__meta">
        {project.location && (
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
        )}
        {project.status && (
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        )}
        {project.services?.length > 0 && (
          <div>
            <dt>Services</dt>
            <dd>{project.services.join(" / ")}</dd>
          </div>
        )}
      </dl>
      <div
        className="project-detail__image"
        style={
          imageUrl
            ? ({ "--detail-image": `url("${imageUrl}")` } as CSSProperties)
            : undefined
        }
      />
    </section>
  );
}

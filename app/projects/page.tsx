import { getAllProjects } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <ProjectsIndex
      projects={projects.map((p) => ({
        title: p.title,
        slug: p.slug.current,
        category: p.category ?? "",
        location: p.location ?? "",
        year: String(p.year ?? ""),
        status: p.status ?? "",
        image: p.image ? urlFor(p.image).width(800).url() : "",
      }))}
    />
  );
}

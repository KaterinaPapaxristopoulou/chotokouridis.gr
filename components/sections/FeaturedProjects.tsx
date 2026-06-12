import { getFeaturedProjects } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { ProjectCard } from "@/components/projects/ProjectCard";
import styles from "@/components/sections/FeaturedProjects.module.css";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className="eyebrow">Selected Projects</p>
        <h2>Built work, studies, and technical documentation.</h2>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={{
              title: project.title,
              slug: project.slug.current,
              category: project.category ?? "",
              location: project.location ?? "",
              year: String(project.year ?? ""),
              heroImage: project.image
                ? urlFor(project.image).width(800).url()
                : undefined,
            }}
          />
        ))}
      </div>
    </section>
  );
}

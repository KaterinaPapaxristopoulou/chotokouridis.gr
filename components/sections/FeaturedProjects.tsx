import { ProjectCard } from "@/components/projects/ProjectCard";
import styles from "@/components/sections/FeaturedProjects.module.css";

const projects = [
  {
    title: "Private Residence",
    category: "Residential",
    location: "Katerini",
    year: "2025",
    heroImage: "/images/heroImage.jpg",
  },
  {
    title: "Interior Renovation",
    category: "Renovation",
    location: "Pieria",
    year: "2024",
    heroImage: "/images/heroImage.jpg",
  },
  {
    title: "Technical Study",
    category: "Documentation",
    location: "Greece",
    year: "2024",
    heroImage: "/images/heroImage.jpg",
  },
];

export function FeaturedProjects() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className="eyebrow">Selected Projects</p>
        <h2>Built work, studies, and technical documentation.</h2>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

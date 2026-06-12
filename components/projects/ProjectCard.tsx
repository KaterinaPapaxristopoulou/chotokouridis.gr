import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import styles from "@/components/projects/ProjectCard.module.css";

type ProjectCardProps = {
  project: {
    title: string;
    slug: string;
    category: string;
    location: string;
    year: string;
    heroImage?: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div
        className={styles.image}
        style={
          project.heroImage
            ? { backgroundImage: `url("${project.heroImage}")` }
            : undefined
        }
      />
      <div className={styles.meta}>
        <Badge variant="secondary">{project.category}</Badge>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
    </Link>
  );
}

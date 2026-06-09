import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "@/components/sections/HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className="eyebrow">Technical Office / Architecture Studio</p>
        <h1>Architecture with technical precision.</h1>
        <p>
          Chotokouridis Architects develops design studies, building permits,
          renovations, and construction supervision for private and professional
          projects in Katerini and beyond.
        </p>
        <div className={styles.actions}>
          <Button asChild size="lg" className="studio-button">
            <Link href="/projects">
              View projects <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="studio-button studio-button--outline">
            <Link href="/contact">Contact office</Link>
          </Button>
        </div>
      </div>

      <div className={styles.image} aria-label="Featured architectural project">
        <div className={styles.caption}>
          <span>Featured work</span>
          <span>Katerini / Residence</span>
        </div>
      </div>
    </section>
  );
}

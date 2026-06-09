import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "@/components/sections/ContactCta.module.css";

export function ContactCta() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <p className="eyebrow">Contact</p>
        <div className={styles.body}>
          <h2>Let&apos;s shape the first clear step.</h2>
          <p>
            Share the site, the brief, or the problem you are trying to solve.
            The office can help you understand the path from first idea to
            study, permit, renovation, or construction coordination.
          </p>
          <Button asChild size="lg" className={`studio-button ${styles.button}`}>
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </div>
      <div className={styles.panel} aria-label="Project starting points">
        <p className={styles.label}>Project starts with</p>
        <ul>
          <li>
            <span>01</span>
            <p>Site, apartment, or building information</p>
          </li>
          <li>
            <span>02</span>
            <p>Design goals, budget direction, and timeline</p>
          </li>
          <li>
            <span>03</span>
            <p>Permit, renovation, or supervision requirements</p>
          </li>
        </ul>
        <div className={styles.meta}>
          <span>Katerini, Greece</span>
          <span>Architectural design / studies / permits</span>
        </div>
      </div>
    </section>
  );
}

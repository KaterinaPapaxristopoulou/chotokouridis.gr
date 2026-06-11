import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "@/components/contact/ContactPage.module.css";

function InstagramMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialIcon}>
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" />
      <circle cx="12" cy="12" r="3.2" fill="none" />
      <circle cx="16.4" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialIcon}>
      <path d="M14 8.2h2.2V5.1c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.1v2.8H5v3.5h3.2V24h3.9v-7.7h3.2l.5-3.5h-3.7v-2.4c0-1 .3-2.2 1.9-2.2Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialIcon}>
      <path d="M6.8 9.3H3.1V21h3.7V9.3ZM5 7.7a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM21 21h-3.7v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.5V9.3H13v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.4 2.5 4.4 5.7V21Z" />
    </svg>
  );
}

export function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <p className="eyebrow">Επικοινωνία</p>
        <h1>Ας μιλήσουμε για το έργο σας.</h1>

        <address className={styles.details}>
          <a href="tel:+302351075730" className={styles.item}>
            <Phone aria-hidden="true" className={styles.icon} />
            <span>23510 75730</span>
          </a>
          <a href="tel:+306944849610" className={styles.item}>
            <Smartphone aria-hidden="true" className={styles.icon} />
            <span>6944 849610</span>
          </a>
          <a href="mailto:lchotos@gmail.com" className={styles.item}>
            <Mail aria-hidden="true" className={styles.icon} />
            <span>lchotos@gmail.com</span>
          </a>
          <span className={styles.item}>
            <MapPin aria-hidden="true" className={styles.icon} />
            <span>Αγίας Λαύρας 10, Κατερίνη</span>
          </span>
        </address>

        <div className={styles.socials}>
          <a
            href="#"
            aria-label="Instagram"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramMark />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookMark />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInMark />
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}

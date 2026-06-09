import styles from "@/components/sections/ServicesSection.module.css";

const services = [
  "Architectural design",
  "Building permits",
  "Technical studies",
  "Construction supervision",
  "Renovations",
  "Bioclimatic design",
];

export function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className="eyebrow">Services</p>
        <h2>From initial concept to technical completion.</h2>
      </div>
      <div className={styles.list}>
        {services.map((service, index) => (
          <div key={service} className={styles.row}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

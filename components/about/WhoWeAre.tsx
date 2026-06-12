import styles from "./WhoWeAre.module.css";

export function WhoWeAre() {
  return (
    <section className={styles.section}>
      <p className="eyebrow">Who We Are</p>
      <div className={styles.content}>
        <h1>ΛΑΖΑΡΟΣ Γ. ΧΟΤΟΚΟΥΡΙΔΗΣ & ΣΥΝΕΡΓΑΤΕΣ</h1>
        <p className={styles.lede}>
          A technical office based in Katerini, supporting private clients,
          professionals, and property owners through clear architectural and
          technical work.
        </p>
      </div>
      <div className={styles.details}>
        <p>
          The office works across architectural studies, building permits,
          renovations, technical documentation, and construction coordination,
          with attention to both the design intent and the practical conditions
          of every project.
        </p>
        <p>
          Each assignment is approached with careful study, direct
          communication, and a grounded understanding of how decisions move from
          drawings and permits into built work.
        </p>
      </div>
    </section>
  );
}

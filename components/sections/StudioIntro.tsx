import styles from "@/components/sections/StudioIntro.module.css";

const teamMembers = [
  { name: "ΛΑΖΑΡΟΣ ΧΟΤΟΚΟΥΡΙΔΗΣ", role: "Engineer", initials: "ΛΧ" },
  { name: "ΓΙΑΝΝΗΣ ΧΟΤΟΚΟΥΡΙΔΗΣ", role: "Engineer-Architect", initials: "ΓΧ" },
  { name: "ΒΑΣΙΛΗΣ ΧΟΤΟΚΟΥΡΙΔΗΣ", role: "Architect", initials: "ΒΧ" },
];

export function StudioIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <p className="eyebrow">Studio Profile</p>
      </div>
      <div className={styles.main}>
        <div className={styles.statement}>
          <h2>
            A technical office combining architectural clarity, construction
            knowledge, and responsible project delivery.
          </h2>
          <p>
            The studio supports clients through studies, permits, design
            decisions, documentation, and on-site coordination, with attention to
            function, energy performance, material choices, and long-term
            building quality.
          </p>
        </div>
        <div className={styles.teamTree} aria-label="Studio team">
          {teamMembers.map((member, index) => (
            <article
              className={styles.member}
              data-position={index + 1}
              key={`${member.name}-${member.role}`}
            >
              <div className={styles.photo} aria-hidden="true">
                <span>{member.initials}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

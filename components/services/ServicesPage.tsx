import styles from "@/components/services/ServicesPage.module.css";

const sections = [
  {
    number: "01",
    title: "Μελέτες & Αδειοδοτήσεις",
    description:
      "Αναλαμβάνουμε το σχεδιασμό, την εκπόνηση και την υποβολή όλων των απαραίτητων μελετών για αδειοδότηση κάθε είδους τεχνικών εργασιών. Διεκπεραιώνουμε με ταχύτητα και αξιοπιστία άδειες λειτουργίας, αλλαγής χρήσης και υποβολή φακέλων για επιδοτούμενα προγράμματα.",
    tags: [
      "Οικοδομικές άδειες",
      "Τακτοποίηση αυθαιρέτων",
      "Άδειες ίδρυσης & λειτουργίας",
      "Ενεργειακές επιθεωρήσεις (ΠΕΑ)",
      "Εξοικονόμηση κατ' οίκον",
      "Βεβαιώσεις νομιμότητας Ν.4495/17",
      "Πιστοποιητικά Πυροπροστασίας",
      "Μελέτες εσωτερικών χώρων",
      "Αρχιτεκτονικός Φωτορεαλισμός",
      "Βιοκλιματικός σχεδιασμός",
    ],
    image: "/images/heroImage.jpg",
  },
  {
    number: "02",
    title: "Κατασκευές",
    description:
      "Επίβλεψη και υλοποίηση κατασκευαστικών έργων με πλήρη συντονισμό και παράδοση έτοιμου αποτελέσματος. Από ενισχύσεις κτιρίων έως διαμορφώσεις εξωτερικών χώρων.",
    tags: [
      "Επίβλεψη & κατασκευή έργων",
      "Παράδοση «με το κλειδί στο χέρι»",
      "Ενισχύσεις & αποκαταστάσεις",
      "Διακόσμηση εσωτερικών χώρων",
      "Διαμόρφωση περιβάλλοντος χώρου",
      "Προμετρήσεις & επιμετρήσεις",
    ],
    image: "/images/heroImage.jpg",
  },
  {
    number: "03",
    title: "Διαχείριση Έργου",
    description:
      "Εξασφαλίζουμε ότι κάθε έργο εκτελείται και παραδίδεται εντός χρόνου, κόστους και ποιοτικών προδιαγραφών, με φυσική παρουσία και συνεχή ενημέρωση.",
    tags: [
      "Φυσική παρουσία στο εργοτάξιο",
      "Τήρηση οικονομικού προϋπολογισμού",
      "Κανονισμοί ασφαλείας & υγιεινής",
      "Αναλυτική ενημέρωση εργοδότη",
    ],
    image: "/images/heroImage.jpg",
  },
];

export function ServicesPage() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className="eyebrow">Υπηρεσίες</p>
        <h1>Τι αναλαμβάνει το γραφείο.</h1>
      </div>
      <div className={styles.blocks}>
        {sections.map((item, index) => (
          <div
            key={item.title}
            className={styles.block}
            data-reverse={index % 2 === 1 ? "" : undefined}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url("${item.image}")` }}
              aria-hidden="true"
            />
            <div className={styles.body}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
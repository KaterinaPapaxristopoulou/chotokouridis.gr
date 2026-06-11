"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";
import styles from "@/components/contact/ContactPage.module.css";

const initialState: ContactFormState = { status: "idle", message: "" };

const subjects = [
  "Αρχιτεκτονική μελέτη",
  "Αδειοδότηση / Έκδοση άδειας",
  "Ανακαίνιση",
  "Κατασκευή",
  "Διαχείριση έργου",
  "Άλλο",
];

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className={styles.successBlock}>
        <p className={styles.successMessage}>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className={styles.form} noValidate>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="name">Ονοματεπώνυμο *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Γιάννης Παπαδόπουλος"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="phone">Τηλέφωνο</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="69XXXXXXXX"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="subject">Θέμα</label>
          <select id="subject" name="subject" defaultValue="">
            <option value="" disabled>
              Επιλέξτε...
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Μήνυμα *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Περιγράψτε το έργο ή την ανάγκη σας..."
        />
      </div>

      {state.status === "error" && (
        <p className={styles.errorMessage}>{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={`studio-button ${styles.submit}`}
      >
        {pending ? "Αποστολή..." : "Αποστολή"}
      </button>
    </form>
  );
}

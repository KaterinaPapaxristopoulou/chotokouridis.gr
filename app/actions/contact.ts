"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Παρακαλώ συμπληρώστε τα υποχρεωτικά πεδία.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Παρακαλώ εισάγετε έγκυρη διεύθυνση email." };
  }

  try {
    await resend.emails.send({
      from: "Chotokouridis Architects <noreply@chotokouridis.gr>",
      to: "lchotos@gmail.com",
      replyTo: email,
      subject: subject
        ? `[Επικοινωνία] ${subject} — ${name}`
        : `[Επικοινωνία] Νέο μήνυμα από ${name}`,
      text: [
        `Ονοματεπώνυμο: ${name}`,
        `Email: ${email}`,
        `Τηλέφωνο: ${phone || "—"}`,
        `Θέμα: ${subject || "—"}`,
        "",
        "Μήνυμα:",
        message,
      ].join("\n"),
    });

    return {
      status: "success",
      message:
        "Το μήνυμά σας εστάλη. Θα επικοινωνήσουμε μαζί σας σύντομα.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε τηλεφωνικώς.",
    };
  }
}

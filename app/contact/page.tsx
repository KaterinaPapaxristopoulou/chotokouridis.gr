import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Chotokouridis Architects",
};

export default function Contact() {
  return <ContactPage />;
}

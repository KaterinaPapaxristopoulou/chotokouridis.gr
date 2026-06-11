import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services — Chotokouridis Architects",
};

export default function Services() {
  return <ServicesPage />;
}

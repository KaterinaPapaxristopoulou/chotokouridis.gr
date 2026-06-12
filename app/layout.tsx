import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FooterGate } from "@/components/layout/FooterGate";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chotokouridis Architects",
  description:
    "Technical office and architecture studio in Katerini for architectural design, studies, permits, renovations, and supervision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <main>{children}</main>
        <FooterGate />
      </body>
    </html>
  );
}

import Link from "next/link";
import { Menu } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import styles from "@/components/layout/Header.module.css";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Chotokouridis Architects home">
        Chotokouridis
      </Link>

      <Navigation links={links} />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className={styles.mobileMenuButton}>
            <Menu aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Chotokouridis Architects</SheetTitle>
          </SheetHeader>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

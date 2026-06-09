import Link from "next/link";
import styles from "@/components/layout/Navigation.module.css";

type NavigationProps = {
  links: Array<{
    href: string;
    label: string;
  }>;
};

export function Navigation({ links }: NavigationProps) {
  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

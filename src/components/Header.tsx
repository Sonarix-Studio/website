import React from "react";
import Link from "next/link";
import { ROUTES } from "@/constants";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={ROUTES.HOME} className={styles.logo}>
          Sonarix Studio
        </Link>
        <nav className={styles.nav}>
          <Link href={ROUTES.HOME} className={styles.navLink}>
            Home
          </Link>
          <Link href={ROUTES.ABOUT} className={styles.navLink}>
            About
          </Link>
          <Link href={ROUTES.CONTACT} className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Sonarix Studio</h3>
            <p className={styles.description}>
              Building modern web applications with Next.js and TypeScript.
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Sonarix Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const socialLinks = [
    { icon: "fab fa-xbox", href: "https://www.xbox.com/", title: "Xbox" },
    {
      icon: "fab fa-playstation",
      href: "http://playstation.com/",
      title: "PlayStation",
    },
    { icon: "fab fa-windows", href: "http://windows.com/", title: "Windows" },
    {
      icon: "fab fa-steam",
      href: "https://store.steampowered.com/",
      title: "Steam",
    },
    { icon: "fab fa-twitch", href: "http://twitch.tv/", title: "Twitch" },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "Our Games",
      links: [
        { title: "Jim & Brimestone", href: "/games/jim-brimestone" },
        { title: "Jungle Pharaoh", href: "/games/jungle-pharaoh" },
        { title: "Stargazer II", href: "/games/stargazer-ii" },
        { title: "Rogue Shooter", href: "/games/rogue-shooter" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Our Studio", href: "/our-studio" },
        { title: "Our Games", href: "/our-games" },
        { title: "Merchandise", href: "/shop" },
        { title: "Shopping Cart", href: "/cart" },
      ],
    },
    {
      title: "Contact",
      links: [
        { title: "Our Location", href: "/contact" },
        { title: "Latest News", href: "/blog" },
        { title: "Press Inquiries", href: "/contact" },
        { title: "General Inquiries", href: "/contact" },
      ],
    },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      // You would handle the actual newsletter subscription here
      console.log("Newsletter subscription:", email);
    }, 1000);
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h2 className={styles.newsletterTitle}>Our Newsletter</h2>
              <div className={styles.titleDivider}>
                <span className={styles.dividerLine}></span>
              </div>
              <p className={styles.newsletterDescription}>
                Sign up for our e-mail newsletter and stay informed for
                what&apos;s next on the horizon.
              </p>
            </div>
            <div className={styles.newsletterForm}>
              <form
                onSubmit={handleNewsletterSubmit}
                className={styles.subscribeForm}
              >
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className={styles.emailInput}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.subscribeButton}
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <span className={styles.loading}>
                        <i className="fas fa-spinner fa-spin"></i>
                        Signing up...
                      </span>
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.companySection}>
              <div className={styles.footerLogo}>
                <Image
                  src="/images/normal/logo-white.png"
                  alt="Sonarix Studio"
                  width={120}
                  height={89}
                  className={styles.logoImage}
                />
              </div>
              <p className={styles.companyDescription}>
                We develop indie games with creative gameplay and immersive
                stories.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={social.title}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className={styles.footerSection}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <ul className={styles.linksList}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className={styles.linkItem}>
                      <Link href={link.href} className={styles.footerLink}>
                        <i className="fas fa-chevron-right"></i>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className={styles.copyright}>
        <div className={styles.container}>
          <div className={styles.copyrightContent}>
            <p className={styles.copyrightText}>
              All Rights Reserved. Designed & Developed by{" "}
              <Link href="/" className={styles.companyLink}>
                Sonarix Studio
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </footer>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems: MenuItem[] = [
    { title: "Home", href: "/#" },
    { title: "Our Games", href: "/#" },
    { title: "Our Studio", href: "/#" },
    // {
    //   title: "Shop",
    //   href: "/shop",
    //   submenu: [
    //     { title: "Home V2", href: "/home-v2" },
    //     { title: "My Account", href: "/my-account" },
    //     { title: "Cart", href: "/cart" },
    //     { title: "Checkout", href: "/checkout" },
    //   ],
    // },
    // { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/#" },
  ];

  const socialLinks = [
    { icon: "fab fa-xbox", href: "https://www.xbox.com/en-US/", title: "Xbox" },
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/images/normal/logo-white.png"
                  alt="Sonarix Studio"
                  width={132}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <ul className={styles.navList}>
                {menuItems.map((item, index) => (
                  <li key={index} className={styles.navItem}>
                    <Link href={item.href} className={styles.navLink}>
                      <span>{item.title}</span>
                    </Link>
                    {item.submenu && (
                      <ul className={styles.submenu}>
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className={styles.submenuLink}
                            >
                              <i className="fas fa-home"></i>
                              <span>{subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Icons */}
            <div className={styles.headerIcons}>
              {/* Social Icons */}
              <div className={styles.socialIcons}>
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

              {/* Search Icon */}
              <div className={styles.searchIcon}>
                <i className="fas fa-search"></i>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={`${styles.mobileMenuToggle} ${
                  isMenuOpen ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars"></i>
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.mobileNavList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <ul className={styles.mobileSubmenu}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={styles.mobileSubmenuLink}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <i className="fas fa-home"></i>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Social Icons */}
          <div className={styles.mobileSocialIcons}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileSocialLink}
                title={social.title}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Search Panel */}
        <div className={styles.searchPanel}>
          <form className={styles.searchForm}>
            <input
              type="search"
              placeholder="Search..."
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;

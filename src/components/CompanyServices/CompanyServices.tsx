"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styles from "./CompanyServices.module.css";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const CompanyServices: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      title: "CEO",
      description:
        "Great games aren't just built with code — they're crafted with curiosity, courage, and care.",
      icon: "/icons/expert-advisor.svg",
      link: "/#company-about",
    },
    {
      id: 2,
      title: "CTO",
      description:
        "For me, game development is not just about functionality—it’s about designing robust systems that scale, optimizing every byte, and delivering joyful, fluid player experiences.",
      icon: "/icons/market-research.svg",
      link: "/#company-services",
    },
    {
      id: 3,
      title: "Technical Leader",
      description:
        "Game development is not only my career path but also my lifelong passion. I constantly seek opportunities to push boundaries, improve my English communication, and explore new technologies.",
      icon: "/icons/customer-insights.svg",
      link: "/#company-about",
    },
    // {
    //   id: 4,
    //   title: "Web3 / Blockchain Integration",
    //   description:
    //     "NFT gaming, on-chain logic - Future-ready blockchain solutions for gaming",
    //   icon: "/icons/expert-advisor.svg",
    //   link: "/#company-about",
    // },
  ];

  return (
    <>
      {/* About Section */}
      <section
        className={styles.aboutSection}
        ref={aboutRef}
        id="company-about"
      >
        <div className={styles.aboutBackground}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutHeader}>
                <h2
                  className={`${styles.sectionTitle} ${
                    aboutInView ? styles.animate : ""
                  }`}
                >
                  Our Company
                </h2>
                <div
                  className={`${styles.titleDivider} ${
                    aboutInView ? styles.animate : ""
                  }`}
                >
                  <span className={styles.dividerLine}></span>
                </div>
              </div>

              <div className={styles.aboutGrid}>
                <div
                  className={`${styles.aboutText} ${
                    aboutInView ? styles.animate : ""
                  }`}
                >
                  <h3 className={styles.aboutTitle}>
                    Invest in the future of AI-integrated, XR-powered game
                    development.
                  </h3>
                  <h5 className={styles.aboutSubtitle}>
                    Sonarix Studio combines cutting-edge technology with
                    creative excellence to deliver next-generation gaming
                    experiences.
                  </h5>
                  <p className={styles.aboutDescription}>
                    We specialize in Unity-based solutions, artificial
                    intelligence integration, and immersive XR applications. Our
                    team creates engaging digital experiences that push the
                    boundaries of what&apos;s possible in gaming and interactive
                    media.
                  </p>
                  <div className={styles.aboutCta}>
                    <Link href="/#company-about" className={styles.aboutButton}>
                      Learn More About Us
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={`${styles.aboutImage} ${
                    aboutInView ? styles.animate : ""
                  }`}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/logo/1024x1024.png"
                      alt="Our Team"
                      width={600}
                      height={400}
                      className={styles.teamImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.playButtonWrapper}>
                        <button
                          className={styles.playButton}
                          title="Watch Our Story"
                          aria-label="Watch Our Story"
                        >
                          <i className="fas fa-play"></i>
                        </button>
                        <span className={styles.playText}>Watch Our Story</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection} ref={servicesRef}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${
                  servicesInView ? styles.animate : ""
                } ${styles[`service${index + 1}`]}`}
              >
                <div className={styles.serviceIcon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={155}
                    height={155}
                    className={styles.iconImage}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <Link href={service.link} className={styles.serviceButton}>
                    Learn More
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyServices;

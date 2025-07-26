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
      title: "Design & Strategy",
      description:
        "Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.",
      icon: "/icons/expert-advisor.svg",
      link: "/our-studio",
    },
    {
      id: 2,
      title: "VR Development",
      description:
        "Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.",
      icon: "/icons/market-research.svg",
      link: "/our-studio",
    },
    {
      id: 3,
      title: "Marketing & PR",
      description:
        "Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.",
      icon: "/icons/customer-insights.svg",
      link: "/our-studio",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className={styles.aboutSection} ref={aboutRef}>
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
                    Games for those that aren&apos;t &apos;Gamers&apos;
                  </h3>
                  <h5 className={styles.aboutSubtitle}>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life.
                  </h5>
                  <p className={styles.aboutDescription}>
                    When she reached the first hills of the Italic Mountains,
                    she had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek.
                  </p>
                  <div className={styles.aboutCta}>
                    <Link href="/our-studio" className={styles.aboutButton}>
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
                      src="/images/business-team.jpg"
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

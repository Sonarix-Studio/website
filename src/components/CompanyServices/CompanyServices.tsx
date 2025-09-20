"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styles from "./CompanyServices.module.css";

interface Service {
  id: number;
  title: string;
  name: string;
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
      name: "Sơn Đình",
      description:
        "Great games aren't just built with code — they're crafted with curiosity, courage, and care.",
      icon: "/images/team/avatar.jpg",
      link: "https://www.linkedin.com/in/sondinh91/",
    },
    {
      id: 2,
      title: "CTO",
      name: "Huy Nguyễn",
      description:
        "For me, game development is not just about functionality—it’s about designing robust systems that scale, optimizing every byte, and delivering joyful, fluid player experiences.",
      icon: "/images/team/photo_2025-08-06_21-48-51.jpg",
      link: "https://www.linkedin.com/in/huy-nguyen-9643191b6/",
    },
    {
      id: 3,
      title: "Technical Leader",
      name: "Nam Nguyễn",
      description:
        "Game development is not only my career path but also my lifelong passion. I constantly seek opportunities to push boundaries, improve my English communication, and explore new technologies",
      icon: "/images/team/1641003045956.jpeg",
      link: "https://www.linkedin.com/in/namnv-nd96/",
    },
    {
      id: 4,
      title: "Senior Engineer",
      name: "Trinh Nguyen",
      description:
        "Fullstack engineer specializing in web development, mobile applications, blockchain, Web3, realtime systems, game development, and UX/UI design.",
      icon: "/images/team/1540912582887.jpeg",
      link: "https://www.linkedin.com/in/tr%C3%ACnh-nguy%E1%BB%85n-a3202b97/",
    },
    {
      id: 5,
      title: "Senior Engineer",
      name: "Long Nguyễn",
      description: `- Over 5 years of expertise in Python backend development and DevOps, specializing in scalable APIs, CI/CD automation, and cloud infrastructure across AWS, GCP, DigitalOcean, and Unity Cloud.
- Backend Engineer for Pawz - Apple Vision Pro
   + Delivered robust backend systems for VisionOS, including catalog management, in-app purchases, notification pipelines
   + Data engineering: analytics integrations with Unity Analytics, Apple App Analytics, and Snowflake.
   + Designed and optimized CI/CD workflows for cross-platform environments, enabling seamless VisionOS asset delivery without version updates.
- Led NINA - A Full feature audio - visual web app tool (Subtitling, dubbing, audio - art ) + built in project management + integrated IMDB APIs to generate project template.
   + NINA project was built with multiple framework and tools Django, FastAPI, Celery, PostgreSQL, MongoDb, Redis, ...
- Strong foundation in AI-driven applications (NLP chatbot, recommendation system,  computer vision, ...)`,
      icon: "/images/team/1748586175400.jpeg",
      link: "https://www.linkedin.com/in/long-nguyen-8098381b2/",
    },
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
                      src="/images/logo/1024x1024-v2.png"
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
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <Link
                    target="_blank"
                    href={service.link}
                    className={styles.serviceButton}
                  >
                    Linkedin
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

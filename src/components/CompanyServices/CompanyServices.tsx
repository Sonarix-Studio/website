"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styles from "./CompanyServices.module.css";

const CompanyServices: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    </>
  );
};

export default CompanyServices;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./HeroSlider.module.css";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title:
        "We build immersive worlds, smart tools, and XR experiences that drive impact.",
      subtitle: "",
      backgroundImage:
        "/images/hero/arun-clarke-UDEb05r0Uy8-unsplash-800x500.jpg",
      ctaText: "Start Your Project",
      ctaLink: "/#contact",
      secondaryCtaText: "Explore Our Work",
      secondaryCtaLink: "/#portfolio",
    },
    {
      id: 2,
      title:
        "Innovative game development with cutting-edge technology and creative storytelling.",
      subtitle: "Game Development",
      backgroundImage:
        "/images/hero/hizir-kaya-0q90Mumo-xE-unsplash-1-800x500.jpg",
      ctaText: "View Our Games",
      ctaLink: "/our-games",
      secondaryCtaText: "Learn More",
      secondaryCtaLink: "/#about",
    },
    {
      id: 3,
      title:
        "Transform your ideas into reality with our expert development team.",
      subtitle: "Custom Solutions",
      backgroundImage:
        "/images/hero/rodrigo-rodriguez-x7bbQIY6H04-unsplash-800x500.jpg",
      ctaText: "Get Started",
      ctaLink: "/#contact",
      secondaryCtaText: "Our Services",
      secondaryCtaLink: "/#services",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating, slides.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className={styles.heroSlider} id="hero-slider">
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            } ${isAnimating ? styles.animating : ""} ${
              styles[`slide${index + 1}`]
            }`}
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className={styles.slideOverlay}></div>
            <div className={styles.slideContent}>
              <div className={styles.container}>
                <div className={styles.contentWrapper}>
                  <div className={styles.textContent}>
                    <h1 className={styles.slideTitle}>
                      {slide.subtitle && (
                        <span className={styles.subtitle}>
                          {slide.subtitle}
                        </span>
                      )}
                      <span className={styles.mainTitle}>{slide.title}</span>
                    </h1>
                    <div className={styles.ctaWrapper}>
                      {slide.ctaText && slide.ctaLink && (
                        <a href={slide.ctaLink} className={styles.ctaButton}>
                          {slide.ctaText}
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      )}
                      {slide.secondaryCtaText && slide.secondaryCtaLink && (
                        <a
                          href={slide.secondaryCtaLink}
                          className={`${styles.ctaButton} ${styles.secondaryButton}`}
                        >
                          {slide.secondaryCtaText}
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className={styles.navigation}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          disabled={isAnimating}
          title="Previous slide"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          disabled={isAnimating}
          title="Next slide"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            title={`Go to slide ${index + 1}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Scroll</div>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
};

export default HeroSlider;

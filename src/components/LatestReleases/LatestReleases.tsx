"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ImageSlider from "./ImageSlider";
import styles from "./LatestReleases.module.css";
import { CATEGORIES, Game, GAMES } from "../constants";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { m } from "framer-motion";
import { getYouTubeEmbedUrl } from "@/utils/video";

const GalleryViewed = ({ game }: { game: Game }) => {
  if (!game) return null;
  return createPortal(<GalleryViewedContent game={game} />, document.body);
};

const GalleryViewedContent = ({ game }: { game: Game }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Combine images and videos for carousel
  const mediaItems: { src: string; type: "image" | "video" }[] = [
    ...game.images.map((item) => ({
      src: item,
      type: "image" as const,
    })),
    ...game.videos.map((item) => ({
      src: item,
      type: "video" as const,
    })),
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!game || mediaItems.length === 0) return null;

  return (
    <div
      className={styles.galleryOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          window.dispatchEvent(new CustomEvent("closeGallery"));
        }
      }}
    >
      <div className={styles.galleryModal}>
        <button
          className={styles.closeButton}
          onClick={() => window.dispatchEvent(new CustomEvent("closeGallery"))}
          aria-label="Close gallery"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>{game.title}</h2>
          <p className={styles.galleryCategory}>{game.category}</p>
        </div> */}

        <div className={styles.emblaContainer}>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {mediaItems.map((media, index) => (
                <div key={index} className={styles.emblaSlide}>
                  <div className={styles.mediaContainer}>
                    {media.type === "video" ? (
                      <iframe
                        className={styles.galleryVideo}
                        src={getYouTubeEmbedUrl(media.src) || ""}
                        title={game.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <Image
                        src={media.src}
                        alt={`${game.title} - Image ${index + 1}`}
                        className={styles.galleryImage}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {mediaItems.length > 1 && (
            <>
              <button
                className={`${styles.carouselButton} ${styles.prevButton}`}
                onClick={scrollPrev}
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={scrollNext}
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        {mediaItems.length > 1 && (
          <div className={styles.carouselDots}>
            {mediaItems.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  selectedIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* <div className={styles.galleryFooter}>
          <p className={styles.galleryDescription}>{game.excerpt}</p>
          <Link href={game.link} className={styles.playGameButton}>
            <i className="fas fa-play"></i>
            Play Game
          </Link>
        </div> */}
      </div>
    </div>
  );
};

const LatestReleases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleGames, setVisibleGames] = useState(6);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);

  const [galleryViewed, setGalleryViewed] = useState<Game | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle close gallery event
  useEffect(() => {
    const handleCloseGallery = () => {
      setGalleryViewed(null);
    };

    window.addEventListener("closeGallery", handleCloseGallery);
    return () => {
      window.removeEventListener("closeGallery", handleCloseGallery);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && galleryViewed) {
        setGalleryViewed(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [galleryViewed]);

  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? GAMES
        : GAMES.filter((game) => game.categorySlug === selectedCategory);
    setFilteredGames(filtered);
  }, [selectedCategory]);

  const loadMoreGames = () => {
    setVisibleGames((prev) => Math.min(prev + 3, filteredGames.length));
  };

  const displayedGames = filteredGames.slice(0, visibleGames);

  return (
    <>
      {!!galleryViewed && <GalleryViewed game={galleryViewed} />}
      <section className={styles.latestReleases} ref={ref} id="portfolio">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2
              className={`${styles.sectionTitle} ${
                inView ? styles.animate : ""
              }`}
            >
              Portfolio
            </h2>
            <div
              className={`${styles.titleDivider} ${
                inView ? styles.animate : ""
              }`}
            >
              <span className={styles.dividerLine}></span>
            </div>
          </div>

          {/* Category Filter */}
          <div
            className={`${styles.categoryFilter} ${
              inView ? styles.animate : ""
            }`}
          >
            {CATEGORIES.map((category) => (
              <button
                key={category.slug}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.slug ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <div
            className={`${styles.gamesGrid} ${inView ? styles.animate : ""}`}
          >
            {displayedGames.map((game, index) => (
              <div
                key={game.id}
                className={`${styles.gameCard} ${
                  game.featured ? styles.featured : ""
                } ${styles[`card${index + 1}`]}`}
                onMouseEnter={() => setHoveredGameId(game.id)}
                onMouseLeave={() => setHoveredGameId(null)}
              >
                <div className={styles.gameImageContainer}>
                  <div className={styles.imageSlider}>
                    <ImageSlider
                      images={game.images}
                      videos={game.videos}
                      gameTitle={game.title}
                      rotationInterval={1000}
                      isHovered={hoveredGameId === game.id}
                    />

                    <div className={styles.imageOverlay}>
                      <div className={styles.overlayContent}>
                        <div
                          className={styles.playButton}
                          onClick={() => setGalleryViewed(game)}
                        >
                          <i className="fas fa-play"></i>
                          <span>Play Now</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.categoryBadge}>
                      <Link href={`/category/${game.categorySlug}`}>
                        {game.category}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={styles.gameContent}>
                  <h3 className={styles.gameTitle}>
                    <Link href={game.link}>{game.title}</Link>
                  </h3>
                  <p className={styles.gameExcerpt}>{game.excerpt}</p>
                  <Link href={game.link} className={styles.viewGameButton}>
                    View Game
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleGames < filteredGames.length && (
            <div className={styles.loadMoreSection}>
              <button className={styles.loadMoreButton} onClick={loadMoreGames}>
                More Releases
                <span className={styles.loadMoreIcon}>
                  <i className="fas fa-chevron-circle-down"></i>
                </span>
              </button>
            </div>
          )}

          {/* View All Games Link */}
          <div className={styles.viewAllSection}>
            <Link href="/#portfolio" className={styles.viewAllButton}>
              View All Games
              <i className="fas fa-gamepad"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestReleases;

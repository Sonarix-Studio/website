"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ImageSlider from "./ImageSlider";
import styles from "./LatestReleases.module.css";
import { CATEGORIES, Game, GAMES } from "../constants";

const LatestReleases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleGames, setVisibleGames] = useState(6);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className={styles.latestReleases} ref={ref} id="portfolio">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2
            className={`${styles.sectionTitle} ${inView ? styles.animate : ""}`}
          >
            Portfolio
          </h2>
          <div
            className={`${styles.titleDivider} ${inView ? styles.animate : ""}`}
          >
            <span className={styles.dividerLine}></span>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`${styles.categoryFilter} ${inView ? styles.animate : ""}`}
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
        <div className={`${styles.gamesGrid} ${inView ? styles.animate : ""}`}>
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
                    gameTitle={game.title}
                    rotationInterval={1000}
                    isHovered={hoveredGameId === game.id}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <Link href={game.link} className={styles.playButton}>
                        <i className="fas fa-play"></i>
                        <span>Play Now</span>
                      </Link>
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
  );
};

export default LatestReleases;

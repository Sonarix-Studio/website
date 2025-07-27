"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import styles from "./LatestReleases.module.css";

interface Game {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  image: string;
  link: string;
  featured?: boolean;
}

const LatestReleases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleGames, setVisibleGames] = useState(6);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const games: Game[] = useMemo(
    () => [
      {
        id: 1,
        title: "Rainbow Seven",
        category: "FPS",
        categorySlug: "fps",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        image: "/images/case/1.jpg",
        link: "/games/rainbow-seven",
        featured: true,
      },
      {
        id: 2,
        title: "Racing Series 3",
        category: "Adventure",
        categorySlug: "adventure",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        image: "/images/case/2.jpg",
        link: "/games/racing-series-3",
      },
      {
        id: 3,
        title: "Stargazer II",
        category: "FPS",
        categorySlug: "fps",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        image: "/images/case/3.jpg",
        link: "/games/stargazer-ii",
        featured: true,
      },
      {
        id: 4,
        title: "Lost Ark",
        category: "Adventure",
        categorySlug: "adventure",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        image: "/images/case/4.jpg",
        link: "/games/lost-ark",
      },
      {
        id: 5,
        title: "Jungle Pharaoh",
        category: "Platformer",
        categorySlug: "platformer",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        image: "/images/case/5.jpg",
        link: "/games/jungle-pharaoh",
      },
      {
        id: 6,
        title: "World War V",
        category: "RPG",
        categorySlug: "rpg",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        image: "/images/case/6.jpg",
        link: "/games/world-war-v",
      },
    ],
    []
  );

  const categories = [
    { name: "All Games", slug: "all" },
    { name: "FPS", slug: "fps" },
    { name: "Adventure", slug: "adventure" },
    { name: "Platformer", slug: "platformer" },
    { name: "RPG", slug: "rpg" },
  ];

  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? games
        : games.filter((game) => game.categorySlug === selectedCategory);
    setFilteredGames(filtered);
  }, [selectedCategory, games]);

  const loadMoreGames = () => {
    setVisibleGames((prev) => Math.min(prev + 3, filteredGames.length));
  };

  const displayedGames = filteredGames.slice(0, visibleGames);

  return (
    <section className={styles.latestReleases} ref={ref} id="latest-releases">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2
            className={`${styles.sectionTitle} ${inView ? styles.animate : ""}`}
          >
            Latest Releases
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
          {categories.map((category) => (
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
            >
              <div className={styles.gameImageContainer}>
                <Image
                  src={game.image}
                  alt={game.title}
                  width={800}
                  height={500}
                  className={styles.gameImage}
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
          <Link href="/our-games" className={styles.viewAllButton}>
            View All Games
            <i className="fas fa-gamepad"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;

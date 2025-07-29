"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ImageSlider from "./ImageSlider";
import styles from "./LatestReleases.module.css";

interface Game {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  images: string[];
  link: string;
  featured?: boolean;
}

const LatestReleases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleGames, setVisibleGames] = useState(6);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { name: "All Games", slug: "all" },
    { name: "Casual", slug: "casual" },
    { name: "Adventure", slug: "adventure" },
    { name: "Hyper Casual", slug: "hyper-casual" },
    { name: "Idle", slug: "idle" },
  ];
  const games: Game[] = useMemo(
    () => [
      {
        id: 1,
        title: "Demon Ping Pong",
        category: "Casual",
        categorySlug: "casual",
        excerpt:
          "A casual arcade game where players must defeat a demon baseball master using skillful paddle control. The game features realistic ball physics and complex trajectory patterns based on Bezier curves.",
        images: [
          "/images/porfolio/DemonPingPong/maxresdefault.jpg",
          "/images/porfolio/DemonPingPong/maxresdefault (1).jpg",
          "/images/porfolio/DemonPingPong/unnamed.webp",
        ],
        link: "/#portfolio",
        featured: true,
      },
      {
        id: 2,
        title: "Endless World",
        category: "Adventure",
        categorySlug: "adventure",
        excerpt:
          "Inspired by an autonomous world, this game simulates real-world behavior and evolution over time, creating an ever-expanding universe. The game includes climate dynamics, weather systems, and underwater treasures. Various activities, such as mini-games, keep players engaged, including a drone racing game as a core competitive activity.",
        images: ["/images/porfolio/EndlessWorld/DroneRacing.png"],
        link: "/#portfolio",
      },
      {
        id: 3,
        title: "Flower Shooter",
        category: "Hyper Casual",
        categorySlug: "hyper-casual",
        excerpt:
          "A dynamic 2D shooter inspired by classic arcade games, featuring Firebase-integrated leaderboards",
        images: [
          "/images/porfolio/FlowerShooter/banner_wide.jpg",
          "/images/porfolio/FlowerShooter/banner.jpg",
          "/images/porfolio/FlowerShooter/vlcsnap-2025-03-16-09h37m07s259.png",
          "/images/porfolio/FlowerShooter/vlcsnap-2025-03-16-09h37m21s154.png",
          "/images/porfolio/FlowerShooter/vlcsnap-2025-03-16-09h40m19s809.png",
          "/images/porfolio/FlowerShooter/vlcsnap-2025-03-16-09h40m28s027.png",
          "/images/porfolio/FlowerShooter/vlcsnap-2025-03-16-09h40m45s958.png",
        ],
        link: "/#portfolio",
        featured: true,
      },
      {
        id: 5,
        title: "Satan Defeat",
        category: "Adventure",
        categorySlug: "adventure",
        excerpt:
          "Even the all-powerful pointing has no control about the blind texts it is an almost unorthographic life.",
        images: [
          "/images/porfolio/SatanDefeat/75b7bf2601a030dd10d351108769c5ae.jpg",
          "/images/porfolio/SatanDefeat/0809a4f442efd7fc1cbbfe9546ccaca5.jpg",
          "/images/porfolio/SatanDefeat/4af691f6ad82a5538425782ee736c8af.png",
          "/images/porfolio/SatanDefeat/71563544211e7b4534a7b188188dc765.jpg",
          "/images/porfolio/SatanDefeat/83e4925aa17a6043b144a96c4c13023a.jpg",
          "/images/porfolio/SatanDefeat/965b181d3913b7f4559647bac66c3823.jpg",
        ],
        link: "/#portfolio",
      },
      {
        id: 6,
        title: "Tank Loop Assault",
        category: "Hyper Casual",
        categorySlug: "hyper-casual",
        excerpt:
          "A fast-paced arcade shooter where players defend the center by blasting enemy tanks circling around them. Designed with dynamic visuals and responsive controls, this game showcases our expertise in Unity development, gameplay design, and immersive combat mechanics.",
        images: ["/images/porfolio/TankLoopAssault/icon.png"],
        link: "/#portfolio",
      },
      {
        id: 7,
        title: "Idle Bistro Tycoon",
        category: "Idle",
        categorySlug: "idle",
        excerpt:
          "Idle Bistro Tycoon is a charming restaurant simulation game where players manage and grow their own bistro empire. From recruiting skilled chefs and efficient staff to upgrading kitchen stations and boosting productivity with special items, every decision counts. Players optimize workflow across multiple floors, unlock new features, and strive to become the ultimate restaurant mogul—all in a fun, idle-friendly experience.",
        images: [
          "/images/porfolio/IdleBistroTycoon/Image Sequence_001_0124.jpg",
        ],
        link: "/#portfolio",
      },
    ],
    []
  );

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

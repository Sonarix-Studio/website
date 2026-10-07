export const CATEGORIES = [
  { name: "All Games", slug: "all" },
  { name: "Casual", slug: "casual" },
  { name: "Adventure", slug: "adventure" },
  { name: "Hyper Casual", slug: "hyper-casual" },
  { name: "Idle", slug: "idle" },
];

export interface Game {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  images: string[];
  videos: string[];
  link: string;
  playUrl?: string;
  featured?: boolean;
}

export const GAMES: Game[] = [
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
    videos: [],
    link: "/#portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "Endless World",
    category: "Adventure",
    categorySlug: "adventure",
    excerpt:
      "An ever-expanding autonomous world that evolves over time, with dynamic climate, weather systems and underwater treasures. Mini-games keep players engaged, led by competitive drone racing.",
    images: ["/images/porfolio/EndlessWorld/DroneRacing.png"],
    videos: [],
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
    videos: [],
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
    videos: [],
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
    videos: [],
    link: "/#portfolio",
  },
  {
    id: 7,
    title: "Idle Bistro Tycoon",
    category: "Idle",
    categorySlug: "idle",
    excerpt:
      "A charming restaurant sim where you grow your own bistro empire. Hire chefs and staff, upgrade kitchen stations, optimize workflow across multiple floors and become the ultimate restaurant mogul.",
    images: ["/images/porfolio/IdleBistroTycoon/Image Sequence_001_0124.jpg"],
    videos: [],
    link: "/#portfolio",
  },
  {
    id: 8,
    title: "Idle Food Inc: Itaewon",
    category: "Idle",
    categorySlug: "idle",
    excerpt:
      "Build a food empire on the neon streets of Itaewon. Open new restaurants, level up kitchens, hire waiters and speed up deliveries to keep profits flowing, even while you're away.",
    images: [],
    videos: ["https://www.youtube.com/watch?v=R2NHFhWTs0c"],
    link: "/#portfolio",
  },
  {
    id: 9,
    title: "Ninja Panda",
    category: "Idle",
    categorySlug: "idle",
    excerpt:
      "Guide a nimble ninja panda through dungeon floors packed with enemies. Collect angelic blessings like speed and healing boosts, and combine them into a build strong enough to clear every stage.",
    images: [],
    videos: ["https://www.youtube.com/watch?v=jv8b0piQmG8"],
    link: "/#portfolio",
  },
  {
    id: 10,
    title: "We are zombie",
    category: "Casual",
    categorySlug: "casual",
    excerpt:
      "Raise a zombie army and push across the battlefield. Spawn undead units, manage your resources and evolve your horde into stronger forms to overrun the enemy base before it overruns yours.",
    images: [],
    videos: ["https://www.youtube.com/watch?v=bfmnabYvHgc"],
    link: "/#portfolio",
  },
  {
    id: 11,
    title: "Bow of God",
    category: "Casual",
    categorySlug: "casual",
    excerpt:
      "An action defense game that blends claw machine mechanics with strategic combat. Grab Normal, Fire and Ice arrows with a magical claw to defend your castle, then build your style through roguelike upgrades.",
    images: ["/images/porfolio/BowOfGod/BowOfGod.png"],
    videos: [],
    link: "/#portfolio",
    playUrl:
      "https://playground.lunalabs.io/preview/324008/431471/a7d262fa98860ab84e8f65edc5b648a0d717d9d9bc5f5b52a10f768eceaa2a57",
  },
];

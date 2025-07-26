import { HeroSection, FeaturesSection } from "@/components/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

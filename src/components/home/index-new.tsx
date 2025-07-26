import React from "react";
import { Button } from "@/components/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import styles from "./Home.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Welcome to Sonarix Studio</h1>
        <p className={styles.heroDescription}>
          A modern web application built with Next.js, TypeScript, and best
          practices. Create amazing experiences with our powerful tools and
          components.
        </p>
        <div className={styles.heroButtons}>
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Fast Performance",
      description: "Built with Next.js 15 for optimal performance and SEO.",
    },
    {
      title: "Type Safety",
      description: "Full TypeScript support for better developer experience.",
    },
    {
      title: "Modern Design",
      description: "Clean and responsive design that works on all devices.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>Why Choose Sonarix Studio?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

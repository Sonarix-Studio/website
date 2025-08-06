"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./LatestReleases.module.css";
import { getYouTubeThumbnail } from "@/utils/video";

interface ImageSliderProps {
  images: string[];
  videos: string[]; // Optional, in case you want to handle videos in the future
  gameTitle: string;
  rotationInterval?: number;
  isHovered?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images = [],
  videos = [], // Default to empty array if no videos provided
  gameTitle,
  rotationInterval = 1000,
  isHovered = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % images.length;
        console.log(`${gameTitle}: Image ${prev} -> ${next}`);
        return next;
      });
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [images.length, isHovered, rotationInterval, gameTitle]);

  // Reset to first image when not hovering
  useEffect(() => {
    if (!isHovered && images.length > 1) {
      setCurrentImageIndex(0);
    }
  }, [isHovered, images.length]);

  if (images.length === 0 && videos.length === 0) {
    return (
      <div className={styles.sliderImage}>
        <div className={styles.noImage}>No Image Available</div>
      </div>
    );
  }

  if (images.length === 1 && videos.length === 0) {
    return (
      <div className={styles.sliderImage}>
        <Image
          src={images[0]}
          alt={gameTitle}
          width={800}
          height={500}
          className={styles.gameImage}
        />
      </div>
    );
  }

  if (images.length === 0 && videos.length === 1) {
    return (
      <div className={styles.sliderImage}>
        <img
          src={
            getYouTubeThumbnail(videos[0], "maxresdefault") ||
            getYouTubeThumbnail(videos[0], "hqdefault") ||
            "/images/video-placeholder.jpg"
          }
          alt={`${gameTitle} - Image ${1}`}
          width={800}
          height={500}
          className={styles.gameImage}
        />
      </div>
    );
  }

  return (
    <div className={styles.imageSliderContainer}>
      {images.map((img, imgIdx) => (
        <div
          key={imgIdx}
          className={`${styles.sliderImage} ${
            currentImageIndex === imgIdx ? styles.active : styles.inactive
          }`}
        >
          <Image
            src={img}
            alt={`${gameTitle} - Image ${imgIdx + 1}`}
            width={800}
            height={500}
            className={styles.gameImage}
          />
        </div>
      ))}
      {videos.map((video, videoIdx) => (
        <div
          key={videoIdx}
          className={`${styles.sliderImage} ${
            currentImageIndex === videoIdx ? styles.active : styles.inactive
          }`}
        >
          <img
            src={
              getYouTubeThumbnail(video, "maxresdefault") ||
              getYouTubeThumbnail(video, "hqdefault") ||
              "/images/video-placeholder.jpg"
            }
            alt={`${gameTitle} - Image ${videoIdx + 1}`}
            width={800}
            height={500}
            className={styles.gameImage}
          />
        </div>
      ))}

      {/* Image indicators */}
      {images.length > 1 && (
        <div className={styles.imageIndicators}>
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${
                currentImageIndex === idx ? styles.active : ""
              }`}
              onClick={() => setCurrentImageIndex(idx)}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;

"use client";

/* Imports */

// react & nextjs
import { FC, MouseEventHandler } from "react";

// components
import Review from "@/app/ui/components/HomeMain/Presentation/Review/Review";

import Image from "next/image";

// libs
import { motion } from "framer-motion";

// utils
import useFetchProducts from "@/app/ui/hooks/Generic/useFetchProducts";
import useSwitchSlide from "@/app/ui/hooks/HomeMainPage/Presentation/ImageSlides/useSwitchSlide";

// types & interfaces
import type { WindowSize } from "@/utils/windowSize";

// css
import styles from "@/app/ui/components/HomeMain/Presentation/ImageSlides/ImageSlides.module.css";

interface Props {
  windowSize: WindowSize;
}

const ImageSlides: FC<Props> = ({ windowSize }) => {
  const products = useFetchProducts();
  const [currentSlide, _] = useSwitchSlide({
    products,
    switchInterval: 10000,
  });

  const handleImageTab: MouseEventHandler<HTMLImageElement> = () => {
    if (currentSlide !== null) {
      window.history.pushState({}, "", `${currentSlide.imgPath}`);
      window.history.go(0);
    }
  };

  if (currentSlide === null) return null;

  return (
    <motion.div
      className={styles["img-slides"]}
      key={currentSlide.id}
      whileHover={{
        rotateX: 15,
        rotateY: 15,
      }}
      whileTap={{
        scale: 0.95,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          damping: 25,
          stiffness: 700,
        },
      }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <div className={styles["slide-container"]}>
        <Image
          priority
          src={currentSlide.imgPath}
          width={378}
          height={450}
          alt={currentSlide.title}
          onClick={handleImageTab}
        />
        {windowSize.width <= 950 && <Review />}
      </div>
      <div className={styles["slide-footer-container"]}>
        <p className={styles["slide-footer"]}>{currentSlide.title}</p>
      </div>
    </motion.div>
  );
};

export default ImageSlides;

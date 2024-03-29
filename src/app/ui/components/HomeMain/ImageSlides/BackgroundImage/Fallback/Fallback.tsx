/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/ImageSlides/BackgroundImage/Fallback/Fallback.module.css";

interface Props {}

const Fallback: FC<Props> = ({}) => {
  return (
    <div className={styles.fallback}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Fallback;

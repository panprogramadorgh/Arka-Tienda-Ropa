/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Image from "next/image";

// libs

// utils
import useGetWindowSize from "@/app/ui/hooks/Generic/useGetWindowSize";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides.module.css";

interface Props {}

const ImageSlides: FC<Props> = ({}) => {
  const windowSize = useGetWindowSize();
  if (windowSize === null) return;
  return (
    <section className={styles["images-section"]}>
      <article className={styles.page}>
        <div className={styles["image-container"]}>
          <Image
            src="/imgs/background/image2.jpg"
            alt="model 1"
            width={windowSize.width / 2}
            height={windowSize.height}
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/imgs/background/image5.jpg"
            alt="model 2"
            width={windowSize.width / 2}
            height={windowSize.height}
          />
        </div>
      </article>
      <article className={styles.page}>
        <div className={styles["image-container"]}>
          <Image
            src="/imgs/background/image4.jpg"
            alt="model 1"
            width={windowSize.width / 2}
            height={windowSize.height}
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src="/imgs/background/image6.jpg"
            alt="model 2"
            width={windowSize.width / 2}
            height={windowSize.height}
          />
        </div>
      </article>
    </section>
  );
};

export default ImageSlides;

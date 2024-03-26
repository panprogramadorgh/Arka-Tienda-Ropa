/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Image from "next/image";

// libs

// utils
import useGetWindowSize from "@/app/ui/hooks/Generic/useGetWindowSize";
import imageSlidesImages from "@/utils/imageSlidesImages";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides.module.css";

interface Props {}

const ImageSlides: FC<Props> = ({}) => {
  const windowSize = useGetWindowSize();
  if (windowSize === null) return;
  return (
    <section className={styles["images-section"]}>
      {imageSlidesImages.map((page, index) => {
        return (
          <article key={index} className={styles["page"]}>
            {page.map((image) => {
              return (
                <div key={image.src} className={styles["image-container"]}>
                  <Image
                    priority
                    src={image.src}
                    alt={image.alt}
                    width={windowSize.width / 2}
                    height={windowSize.height}
                  />
                </div>
              );
            })}
          </article>
        );
      })}
    </section>
  );
};

export default ImageSlides;

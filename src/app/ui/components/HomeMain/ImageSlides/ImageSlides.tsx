/* Imports */

// react & nextjs
import React, { FC, Suspense } from "react";

// components
import Fallback from "@/app/ui/components/HomeMain/ImageSlides/BackgroundImage/Fallback/Fallback";
// import BackgroundImage from "@/app/ui/components/HomeMain/ImageSlides/BackgroundImage/BackgroundImage";

// libs

// utils
import imageSlidesImages from "@/utils/ImageSlides/images";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides.module.css";

const BackgroundImage = React.lazy(
  () =>
    import(
      "@/app/ui/components/HomeMain/ImageSlides/BackgroundImage/BackgroundImage"
    )
);

interface Props {}

const ImageSlides: FC<Props> = ({}) => {
  return (
    <section className={styles["images-section"]}>
      {imageSlidesImages.map((page, index) => {
        return (
          <article key={index} className={styles["page"]}>
            {page.map((image) => {
              return (
                <Suspense key={image.src} fallback={<Fallback />}>
                  <BackgroundImage {...image} />
                </Suspense>
              );
            })}
          </article>
        );
      })}
    </section>
  );
};

export default ImageSlides;

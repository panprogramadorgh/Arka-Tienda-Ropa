/* Imports */

// react & nextjs
import { FC, MouseEventHandler, useContext } from "react";

// components
import Image from "next/image";

// libs
import { motion } from "framer-motion";

// utils
import imageSlidesImages from "@/utils/ImageSlides/images";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides.module.css";
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

interface Props {}

const ImageSlides: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    if (homePageState !== null) {
      homePageState[1]((prevState) => {
        return {
          ...prevState,
          dropdown: { open: false, navLinks: prevState.dropdown.navLinks },
        };
      });
    }
  };

  if (homePageState === null || homePageState[0].windowSize === null) return;
  return (
    <section className={styles["images-section"]} onClick={handleClick}>
      {imageSlidesImages.map((page, index) => {
        return (
          <article key={index} className={styles["page"]}>
            {page.map((image) => {
              return (
                <motion.div
                  key={image.src}
                  className={styles["image-container"]}
                  initial={{ opacity: 0, zIndex: -100 }}
                  animate={{ opacity: 1, zIndex: -100 }}
                >
                  <Image
                    priority
                    src={image.src}
                    alt={image.alt}
                    width={homePageState[0].windowSize!.width / 2}
                    height={homePageState[0].windowSize!.height}
                    layout={
                      homePageState[0].windowSize!.width > 1395
                        ? "responsive"
                        : undefined
                    }
                  />
                </motion.div>
              );
            })}
          </article>
        );
      })}
    </section>
  );
};

export default ImageSlides;

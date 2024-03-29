/* Imports */

// react & nextjs
import { FC, useContext, MouseEventHandler } from "react";

// components
import Image from "next/image";
import Fallback from "@/app/ui/components/HomeMain/ImageSlides/BackgroundImage/Fallback/Fallback";

// libs
import { motion } from "framer-motion";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/ImageSlides/BackgroundImage/BackgroundImage.module.css";

const fadeIn = {
  hidden: {
    opacity: 0,
    zIndex: -100,
  },
  visible: {
    opacity: 1,
    zIndex: -100,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    zIndex: -100,
  },
};

interface Props {
  src: string;
  alt: string;
}

const BackgroundImage: FC<Props> = ({ src, alt }) => {
  const homePageState = useContext(HomePageContext);

  const handleClick: MouseEventHandler<HTMLImageElement> = () => {
    if (homePageState !== null) {
      homePageState[1]((prevState) => {
        return {
          ...prevState,
          dropdown: { open: false, navLinks: prevState.dropdown.navLinks },
        };
      });
    }
  };

  if (homePageState === null || homePageState[0].windowSize === null) {
    return <Fallback />;
  }
  return (
    <motion.div
      key={src}
      className={styles["image-container"]}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeIn}
    >
      <Image
        priority
        src={src}
        alt={alt}
        width={homePageState[0].windowSize!.width / 2}
        height={homePageState[0].windowSize!.height}
        layout={
          homePageState[0].windowSize!.width > 1395 ? "responsive" : undefined
        }
        onClick={handleClick}
      />
    </motion.div>
  );
};

export default BackgroundImage;

"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import MobileDropdown from "@/app/ui/components/HomeMain/MobileDropdown/MobileDropdown";
// import Presentation from "@/app/ui/components/HomeMain/Presentation/Presentation";
import ImageSlides from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides";

// libs
import { motion, AnimatePresence } from "framer-motion";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMain.module.css";

interface Props {}

const MainHomePage: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);

  return (
    <main className={styles.main}>
      <AnimatePresence>
        {homePageState != null && homePageState[0].showMobileMenu && (
          <MobileDropdown />
        )}
      </AnimatePresence>
      <ImageSlides />
    </main>
  );
};

export default MainHomePage;

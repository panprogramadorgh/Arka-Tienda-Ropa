"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import MobileDropdown from "@/app/ui/components/HomeMain/Dropdown/Dropdown";
// import Presentation from "@/app/ui/components/HomeMain/Presentation/Presentation";
import ImageSlides from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides";

// libs
import { motion, AnimatePresence } from "framer-motion";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context
import useKeyboardShortcut from "@/app/ui/hooks/Generic/useKeyboardShortcut";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMain.module.css";

interface Props {}

const MainHomePage: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  useKeyboardShortcut();

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

"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import MobileDropdown from "@/app/ui/components/HomeMain/Dropdown/Dropdown";
import ImageSlides from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides";
import HomeMainFooter from "@/app/ui/components/HomeMain/HomeMainFooter/HomeMainFooter";

// libs
import { AnimatePresence } from "framer-motion";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context
import useKeyboardShortcut from "@/app/ui/hooks/Generic/useKeyboardShortcut";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMain.module.css";

interface Props {}

const MainHomePage: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  const checkModal = () =>
    homePageState && homePageState[0].dropdown.open ? true : false;
  useKeyboardShortcut();

  return (
    <main className={styles.main}>
      <AnimatePresence>{checkModal() && <MobileDropdown />}</AnimatePresence>
      <ImageSlides />
      <HomeMainFooter />
    </main>
  );
};

export default MainHomePage;

"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import MobileDropdown from "@/app/ui/components/HomeMain/MobileDropdown/MobileDropdown";
// import Presentation from "@/app/ui/components/HomeMain/Presentation/Presentation";
import ImageSlides from "@/app/ui/components/HomeMain/ImageSlides/ImageSlides";

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context
import useDisableScrolling from "@/app/ui/hooks/HomeMainPage/useDisableScrolling";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMain.module.css";

interface Props {}

const MainHomePage: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  // useDisableScrolling(); // removes scrolling when modal is open

  return (
    <main className={styles.main}>
      {homePageState != null && homePageState[0].showMobileMenu === true && (
        <MobileDropdown />
      )}
      <ImageSlides />
    </main>
  );
};

export default MainHomePage;

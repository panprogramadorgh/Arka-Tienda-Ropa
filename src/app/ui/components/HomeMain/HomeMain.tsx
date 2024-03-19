"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import MobileMenu from "@/app/ui/components/HomeMain/MobileDropdown/MobileDropdown";
import Presentation from "@/app/ui/components/HomeMain/Presentation/Presentation";

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomePage"; // home page context
import useCloseMobileDropdownOnResize from "@/app/ui/hooks/useCloseMobileDropdownOnResize";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMain.module.css";

interface Props {}

const MainHomePage: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  useCloseMobileDropdownOnResize(HomePageContext); // closes the mobile menu when window.innerWidth is to long

  if (homePageState != null && homePageState[0].showMobileMenu === true) {
    return <MobileMenu />;
  }
  return (
    <main className={styles.main}>
      <Presentation />
    </main>
  );
};

export default MainHomePage;

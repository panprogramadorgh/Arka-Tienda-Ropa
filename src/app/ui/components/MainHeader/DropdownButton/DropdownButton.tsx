"use client";

/* Imports */

// react & nextjs
import { FC, useContext, useCallback, MouseEventHandler } from "react";

// components

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomePage";

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton.module.css";

interface Props {}

const DropdownButton: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  const handleClick: MouseEventHandler = useCallback(() => {
    if (homePageState != null) {
      const [homePageData, setHomePageState] = homePageState;
      setHomePageState({
        showMobileMenu: !homePageData.showMobileMenu,
        navLinks: homePageData.navLinks,
      });
    }
  }, [homePageState]);

  return (
    <div
      onClick={handleClick}
      className={`${styles.container} ${
        homePageState != null && homePageState[0].showMobileMenu
          ? styles.close
          : ""
      }`.trim()}
    ></div>
  );
};

export default DropdownButton;

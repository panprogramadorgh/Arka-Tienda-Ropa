"use client";

/* Imports */

// react & nextjs
import { FC, useContext, useCallback, MouseEventHandler } from "react";

// components

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton.module.css";

interface Props {
  dark?: boolean;
}

const DropdownButton: FC<Props> = ({ dark }) => {
  const homePageState = useContext(HomePageContext);

  const handleClick: MouseEventHandler = useCallback(() => {
    if (homePageState !== null) {
      homePageState[1]((prevState) => {
        return {
          ...prevState,
          dropdown: {
            open: !prevState.dropdown.open,
            navLinks: prevState.dropdown.navLinks,
          },
        };
      });
    }
  }, [homePageState]);

  return (
    <div
      onClick={handleClick}
      className={`${styles.container} ${
        homePageState != null && homePageState[0].dropdown.open
          ? styles.close
          : ""
      } ${dark ? styles.dark : ""}`.trim()}
    ></div>
  );
};

export default DropdownButton;

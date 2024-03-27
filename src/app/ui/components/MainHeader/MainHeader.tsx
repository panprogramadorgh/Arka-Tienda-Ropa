"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";
import Image from "next/image";
import SearchButton from "@/app/ui/components/Generic/SearchButton/SearchButton";
import Logo from "@/app/ui/components/Generic/Logo/Logo";
import DropdownButton from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton";

// libs
import { motion } from "framer-motion";

// utils
import personIcon from "@/app/ui/icons/person.svg";
import cartIcon from "@/app/ui/icons/cart.svg";
import { HomePageContext } from "../../contexts/HomeMain";

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/MainHeader.module.css";

interface Props {}
const Header: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  const checkModal = () =>
    homePageState && homePageState[0].dropdown.open ? true : false;

  const checkScroll = () => {
    return homePageState &&
      homePageState[0].scrollPos.yPos &&
      homePageState[0].scrollPos.yPos > 0
      ? true
      : false;
  };

  const checkPlayAnimation = () => {
    return checkModal() || checkScroll();
  };

  if (
    homePageState === null ||
    homePageState[0].windowSize === null ||
    homePageState[0].scrollPos.yPos === null
  )
    return;
  return (
    <motion.header
      className={`${styles["header"]}`.trim()}
      animate={
        checkPlayAnimation()
          ? {
              backgroundColor: "rgb(var(--background-start-rgb))",
              outline: "var(--border-width) solid rgb(var(--foreground-rgb))",
            }
          : {}
      }
    >
      <div className={styles["header-nav"]}>
        <DropdownButton dark={checkScroll() || checkModal()} />
        <Logo scrollPos={homePageState[0].scrollPos.yPos} />
      </div>
      <div className={styles["header-container"]}>
        <div className={styles["searchbutton-container"]}>
          <SearchButton />
        </div>
        {homePageState[0].windowSize.width > 950 ? (
          <>
            <Link
              href="/profile"
              className={`${checkPlayAnimation() ? styles.dark : ""}`.trim()}
            >
              Perfil
            </Link>
            <Link
              href="/cart"
              className={`${checkPlayAnimation() ? styles.dark : ""}`.trim()}
            >
              Cesta (0)
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile">
              <Image priority src={personIcon} alt="profile person icon" />
            </Link>
            <Link href="/cart">
              <Image priority src={cartIcon} alt="shop cart icon" />
            </Link>
          </>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

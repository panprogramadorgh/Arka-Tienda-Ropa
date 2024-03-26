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

// utils
import personIcon from "@/app/ui/icons/person.svg";
import cartIcon from "@/app/ui/icons/cart.svg";
import useGetYScrollPos from "@/app/ui/hooks/Generic/useGetYScrollPos";
import { HomePageContext } from "../../contexts/HomeMain";

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/MainHeader.module.css";

interface Props {}
const Header: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  const scrollPos = useGetYScrollPos();
  const checkScroll = () => (scrollPos && scrollPos > 0 ? true : false);

  if (homePageState === null) return;
  return (
    <header
      className={`${styles["header"]} ${checkScroll() ? styles.solid : ""} ${
        homePageState[0].showMobileMenu ? styles.solid : ""
      }`.trim()}
    >
      <div className={styles["header-nav"]}>
        <DropdownButton
          dark={checkScroll() || homePageState[0].showMobileMenu}
        />
        <Logo />
      </div>
      <div className={styles["header-container"]}>
        <div className={styles["searchbutton-container"]}>
          <SearchButton />
        </div>
        <Link href="/profile">
          <Image priority src={personIcon} alt="profile person icon" />
        </Link>
        <Link href="/cart">
          <Image priority src={cartIcon} alt="shop cart icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

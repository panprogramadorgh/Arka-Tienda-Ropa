"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";
import Image from "next/image";
import SearchButton from "@/app/ui/components/MainHeader/SearchButton/SearchButton";
import Logo from "@/app/ui/components/Generic/Logo/Logo";
import DropdownButton from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton";

// libs

// utils
import personIcon from "@/app/ui/icons/person.svg";
import cartIcon from "@/app/ui/icons/cart.svg";
import { HomePageContext } from "@/app/ui/contexts/HomePage"; // home page context

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/MainHeader.module.css";

interface Props {}

const Header: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  return (
    <header className={styles["header"]}>
      <ul className={styles["header-nav"]}>
        <li className={styles.logo}>
          <Logo />
        </li>
        {homePageState &&
          homePageState[0].navLinks.map(({ title, path }) => {
            return (
              <li className={styles.option} key={path}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
      </ul>
      {/* mobile */}
      <div className={styles["header-mobile-container"]}>
        <DropdownButton />
        <Logo />
      </div>
      {/*  */}
      <div className={styles["header-container"]}>
        <div className={styles["searchbutton-container"]}>
          <SearchButton />
        </div>
        <Link href="/profile" className={styles["person-icon"]}>
          <Image priority src={personIcon} alt="profile person icon" />
        </Link>
        <Link href="/cart" className={styles["cart-icon"]}>
          <Image priority src={cartIcon} alt="shop cart icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

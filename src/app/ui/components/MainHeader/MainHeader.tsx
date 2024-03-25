"use client";

/* Imports */

// react & nextjs
import { FC } from "react";

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

import useGetYScrollPos from "@/app/ui/hooks/Generic/useGetYScrollPos";

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/MainHeader.module.css";

interface Props {}
const Header: FC<Props> = ({}) => {
  const scrollPos = useGetYScrollPos();
  const checkScroll = () => scrollPos && scrollPos > 0;

  return (
    <header
      className={`${styles["header"]} ${
        checkScroll() ? styles.blur : ""
      }`.trim()}
    >
      <div className={styles["header-nav"]}>
        <DropdownButton />
        <Logo />
      </div>
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

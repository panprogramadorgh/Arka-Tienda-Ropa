/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";
import Image from "next/image";
import SearchButton from "@/app/ui/headers/mainpage/SearchButton";

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomePage"; // home page context
import arrowRight from "@/app/ui/icons/mainmobile/arrowRight.svg";

// types & interfaces

// css
import styles from "@/app/ui/homepage/MobileMenu.module.css";

interface Props {}

const MobileMenu: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  return (
    <main className={styles.main}>
      <SearchButton mobileMenu placeholderAlignStart long />
      <ul className={styles["option-list"]}>
        {homePageState &&
          homePageState[0].navLinks.map(({ title, path }) => {
            return (
              <li className={styles.option} key={path}>
                <Image
                  className={styles.arrow}
                  src={arrowRight}
                  alt="arrow right"
                />
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
};

export default MobileMenu;

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

// types & interfaces

// css
import styles from "@/app/ui/components/Generic/Logo/Logo.module.css";

interface Props {
  scrollPos: number;
}

const Logo: FC<Props> = ({ scrollPos }) => {
  const homePageState = useContext(HomePageContext);

  const checkModal = () =>
    homePageState && homePageState[0].dropdown.open ? true : false;

  const checkWindowWidth = () => {
    return homePageState &&
      homePageState[0].windowSize &&
      homePageState[0].windowSize.width <= 420
      ? true
      : false;
  };

  // FIXME: Comprobar a quitar `if`
  if (homePageState === null || homePageState[0].windowSize === null) return;
  return (
    <h1>
      <Link
        href="/"
        className={`${styles.logo} ${checkWindowWidth() ? styles.small : ""} ${
          scrollPos > 0 || checkModal() ? styles.dark : ""
        }`.trim()}
      >
        arka
      </Link>
    </h1>
  );
};

export default Logo;

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";

// libs

// utils
import poppins from "@/app/ui/fonts/poppins";
import useGetYScrollPos from "@/app/ui/hooks/Generic/useGetYScrollPos";
import { HomePageContext } from "@/app/ui/contexts/HomeMain";

// types & interfaces

// css
import styles from "@/app/ui/components/Generic/Logo/Logo.module.css";

interface Props {}

const Logo: FC<Props> = ({}) => {
  const scrollPos = useGetYScrollPos();
  const checkPos = () => (scrollPos && scrollPos > 0 ? true : false);

  const homePageState = useContext(HomePageContext);
  const checkModal = (): boolean => {
    return homePageState && homePageState[0].showMobileMenu ? true : false;
  };

  return (
    <h1>
      <Link
        href="/"
        className={`${poppins.className} ${styles.logo} ${styles.link} ${
          checkPos() || checkModal() ? styles.dark : ""
        }`.trim()}
      >
        arka
      </Link>
    </h1>
  );
};

export default Logo;

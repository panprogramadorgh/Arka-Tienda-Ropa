/* Imports */

// react & nextjs
import { FC, useContext, useEffect } from "react";

// components
import Link from "next/link";
import SearchButton from "@/app/ui/components/Generic/SearchButton/SearchButton";
import DropdownButton from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton";

// libs
import { motion } from "framer-motion";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context
import useGetWindowSize from "@/app/ui/hooks/Generic/useGetWindowSize";
import { dropIn, dropInMobile } from "@/utils/MobileDropdownAnimations";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/Dropdown/Dropdown.module.css";

interface Props {}
const MobileDropdown: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  const windowSize = useGetWindowSize();

  // Mientras que el tamaño de la ventana no se sepa entonces no se renderiza el modal
  if (windowSize === null || homePageState === null) return;
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={windowSize.width > 950 ? dropIn : dropInMobile}
    >
      <div className={styles["dropdown-button-container"]}>
        <DropdownButton dark={homePageState[0].showMobileMenu} />
      </div>
      <p>Nuestro catalogo</p>
      <div className={styles["search-button-container"]}>
        <SearchButton />
      </div>
      <ul className={styles["option-list"]}>
        {homePageState &&
          homePageState[0].navLinks.map(({ title, path }) => {
            return (
              <li className={styles.option} key={path}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
        {/* Los option column son solamente visibles si el alto de la pantalla es menor o igual a 580 */}
        <div className={styles["option-column"]}>
          {homePageState &&
            homePageState[0].navLinks
              .slice(0, Math.floor(homePageState[0].navLinks.length / 2) + 1)
              .map(({ title, path }) => {
                return (
                  <li className={styles.option} key={path}>
                    <Link href={path}>{title}</Link>
                  </li>
                );
              })}
        </div>
        <div className={styles["option-column"]}>
          {homePageState &&
            homePageState[0].navLinks
              .slice(
                Math.floor(homePageState[0].navLinks.length / 2) + 1,
                homePageState[0].navLinks.length
              )
              .map(({ title, path }) => {
                return (
                  <li className={styles.option} key={path}>
                    <Link href={path}>{title}</Link>
                  </li>
                );
              })}
        </div>
        {/* ------------------------- */}
      </ul>
    </motion.div>
  );
};

export default MobileDropdown;

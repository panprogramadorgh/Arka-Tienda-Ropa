/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";
import SearchButton from "@/app/ui/components/Generic/SearchButton/SearchButton";
import DropdownButton from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton";

// libs
import { motion } from "framer-motion";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context
import { dropIn, dropInMobile } from "@/utils/Dropdown/DropdownAnimations";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/Dropdown/Dropdown.module.css";

interface Props {}
const MobileDropdown: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);

  const checkModal = () =>
    homePageState && homePageState[0].dropdown.open ? true : false;

  const checkWindowSize = (
    direction: "width" | "height",
    operation: (dimensions: number) => boolean
  ): boolean => {
    const dim =
      homePageState &&
      homePageState[0].windowSize &&
      homePageState[0].windowSize[direction];
    if (dim === null) return false;
    return operation(dim);
  };

  // Mientras que el tamaño de la ventana no se sepa entonces no se renderiza el modal
  if (homePageState === null || homePageState[0].windowSize === null) return;
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={
        checkWindowSize("width", (dimension) => dimension > 950)
          ? dropIn
          : dropInMobile
      }
    >
      {checkWindowSize("width", (dimension) => dimension <= 950) ? (
        <div className={styles["dropdown-button-container"]}>
          <DropdownButton dark={checkModal()} />
        </div>
      ) : null}

      <p>Nuestro catalogo</p>

      <div className={styles["search-button-container"]}>
        <SearchButton />
      </div>

      {/* Cuando la pantalla sea menor o igual a 580, se visualizan los link en dos columnas diferentes */}
      <ul className={styles["option-list"]}>
        {checkWindowSize("height", (dimension) => dimension > 580) ? (
          homePageState[0].dropdown.navLinks.map(({ title, path }) => {
            return (
              <li className={styles.option} key={path}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })
        ) : (
          <>
            <div className={styles["option-column"]}>
              {homePageState[0].dropdown.navLinks
                .slice(
                  0,
                  Math.ceil(homePageState[0].dropdown.navLinks.length / 2)
                )
                .map(({ title, path }) => {
                  return (
                    <li className={styles.option} key={path}>
                      <Link href={path}>{title}</Link>
                    </li>
                  );
                })}
            </div>
            <div className={styles["option-column"]}>
              {homePageState[0].dropdown.navLinks
                .slice(
                  Math.ceil(homePageState[0].dropdown.navLinks.length / 2),
                  homePageState[0].dropdown.navLinks.length
                )
                .map(({ title, path }) => {
                  return (
                    <li className={styles.option} key={path}>
                      <Link href={path}>{title}</Link>
                    </li>
                  );
                })}
            </div>
          </>
        )}
        {/* ------------------------- */}
      </ul>
    </motion.div>
  );
};

export default MobileDropdown;

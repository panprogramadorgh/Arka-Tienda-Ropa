/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import Link from "next/link";
import SearchButton from "@/app/ui/components/Generic/SearchButton/SearchButton";
import DropdownButton from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton";
import Columns from "@/app/ui/components/HomeMain/Dropdown/Columns/Columns";
import Rows from "@/app/ui/components/HomeMain/Dropdown/Rows/Rows";

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

      <ul className={styles["option-list"]}>
        {checkWindowSize("height", (dimension) => dimension > 665) ? (
          <Rows />
        ) : (
          <Columns />
        )}
      </ul>
    </motion.div>
  );
};

export default MobileDropdown;

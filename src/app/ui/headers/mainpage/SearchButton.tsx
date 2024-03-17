/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/headers/mainpage/SearchButton.module.css";

interface Props {
  mobileMenu?: boolean;
  placeholderAlignStart?: boolean;
  long?: boolean;
}

const SearchButton: FC<Props> = ({
  mobileMenu,
  placeholderAlignStart,
  long,
}) => {
  return (
    <button
      className={`${styles.button} ${mobileMenu ? styles.mobile : ""} ${
        placeholderAlignStart ? styles["align-start"] : ""
      } ${long ? styles.long : ""}`.trim()}
    >
      Buscar (ctrl + b)
    </button>
  );
};

export default SearchButton;

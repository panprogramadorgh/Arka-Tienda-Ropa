/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/components/MainHeader/SearchButton/SearchButton.module.css";

interface Props {
  mobileDropdown?: boolean;
  placeholderAlignStart?: boolean;
  long?: boolean;
}

const SearchButton: FC<Props> = ({
  mobileDropdown,
  placeholderAlignStart,
  long,
}) => {
  return (
    <button
      className={`${styles.button} ${mobileDropdown ? styles.mobile : ""} ${
        placeholderAlignStart ? styles["align-start"] : ""
      } ${long ? styles.long : ""}`.trim()}
    >
      Buscar (ctrl + b)
    </button>
  );
};

export default SearchButton;

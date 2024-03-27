/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/components/Generic/SearchButton/SearchButton.module.css";

interface Props {}

const SearchButton: FC<Props> = ({}) => {
  return (
    <Link href="/search" className={`${styles.button}`.trim()}>
      Buscar (ctrl + b)
    </Link>
  );
};

export default SearchButton;

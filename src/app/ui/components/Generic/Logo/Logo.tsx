/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils
import euphoriaScript from "../../../fonts/euphoria_script";

// types & interfaces

// css
import styles from "@/app/ui/components/Generic/Logo/Logo.module.css";

interface Props {
  link?: boolean;
}

const Logo: FC<Props> = ({ link = true }) => {
  let element: JSX.Element;
  if (link) {
    element = (
      <Link
        href="/"
        className={`${euphoriaScript.className} ${styles.logo} ${styles.link}`.trim()}
      >
        Arka
      </Link>
    );
  } else {
    element = (
      <h1
        className={`${euphoriaScript.className} ${styles.logo} ${styles.big}`.trim()}
      >
        Arka
      </h1>
    );
  }
  return element;
};

export default Logo;

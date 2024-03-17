/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils
import caladea from "../../fonts/caladea";

// types & interfaces

// css
import styles from "@/app/ui/headers/mainpage/Logo.module.css";

interface Props {}

const Logo: FC<Props> = ({}) => {
  return (
    <Link href="/" className={`${styles["logo"]} ${caladea.className}`}>
      ARKA
    </Link>
  );
};

export default Logo;

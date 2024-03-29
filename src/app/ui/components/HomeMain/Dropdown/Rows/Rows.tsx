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
import styles from "@/app/ui/components/HomeMain/Dropdown/Rows/Rows.module.css";

interface Props {}

const Rows: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  if (homePageState === null) return;
  return homePageState[0].dropdown.navLinks.map(({ title, path }) => {
    return (
      <li className={styles.option} key={path}>
        <Link href={path}>{title}</Link>
      </li>
    );
  });
};

export default Rows;

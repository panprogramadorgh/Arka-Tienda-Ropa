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
import styles from "@/app/ui/components/HomeMain/Dropdown/Columns/Columns.module.css";

interface Props {}

const Columns: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  if (homePageState === null) return;
  return (
    <>
      <div className={styles["option-column"]}>
        {homePageState[0].dropdown.navLinks
          .slice(0, Math.ceil(homePageState[0].dropdown.navLinks.length / 2))
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
  );
};

export default Columns;

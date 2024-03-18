"use client";

/* Imports */

// react & nextjs
import { FC, useContext } from "react";

// components
import MobileMenu from "@/app/ui/components/HomeMain/MobileDropdown/MobileDropdown";

// libs

// utils
import { HomePageContext } from "@/app/ui/contexts/HomePage"; // home page context
import useCloseMobileMenuOnResize from "@/app/ui/hooks/useCloseMobileMenuOnResize";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMain.module.css";

interface Props {}

const MainHomePage: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  useCloseMobileMenuOnResize(HomePageContext); // closes the mobile menu when window.innerWidth is to long

  if (homePageState != null && homePageState[0].showMobileMenu === true) {
    return <MobileMenu />;
  }
  return (
    <main className={styles.main}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis
        a, corporis maxime fuga esse, blanditiis aut non beatae rerum quo!
        Quidem quam ipsam harum odio ipsa consequatur similique sapiente
        adipisci perferendis repellendus ratione ab, at soluta, alias ipsum
        consectetur! Ut harum vitae voluptates reiciendis, est obcaecati
        corrupti ducimus repellendus dolorem iste atque tempore ipsam id, vero
        aliquid odio odit nobis fugiat ipsa aut perspiciatis quasi libero nihil!
        Dolores corporis odit repellendus neque beatae cupiditate fugit cumque
        reprehenderit esse, accusantium autem voluptatibus id quos totam est non
        tempora voluptate. Nostrum tempore reiciendis fugit sed vero, architecto
        ad perferendis! Explicabo, magnam.
      </p>
    </main>
  );
};

export default MainHomePage;

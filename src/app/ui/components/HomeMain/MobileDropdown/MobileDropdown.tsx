/* Imports */

// react & nextjs
import { FC, useContext, useEffect } from "react";

// components
import Link from "next/link";
import SearchButton from "@/app/ui/components/MainHeader/SearchButton/SearchButton";
import DropdownButton from "@/app/ui/components/MainHeader/DropdownButton/DropdownButton";

// libs
import { motion } from "framer-motion";
import { useMedia } from "use-media";

// utils
import { HomePageContext } from "@/app/ui/contexts/HomeMain"; // home page context
import useGetWindowSize from "@/app/ui/hooks/Generic/useGetWindowSize";
import { dropIn, dropInMobile } from "@/utils/MobileDropdownAnimations";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/MobileDropdown/MobileDropdown.module.css";

interface Props {}
const MobileDropdown: FC<Props> = ({}) => {
  const homePageState = useContext(HomePageContext);
  const windowSize = useGetWindowSize();

  // Mientras que el tamaño de la ventana no se sepa entonces no se renderiza el modal
  if (windowSize === null) return;
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={windowSize.width > 950 ? dropIn : dropInMobile}
    >
      <div className={styles["dropdown-button-container"]}>
        <DropdownButton />
      </div>
      <SearchButton mobileDropdown placeholderAlignStart long />
      <ul className={styles["option-list"]}>
        {homePageState &&
          homePageState[0].navLinks.map(({ title, path }) => {
            return (
              <li className={styles.option} key={path}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </motion.div>
  );
};

export default MobileDropdown;

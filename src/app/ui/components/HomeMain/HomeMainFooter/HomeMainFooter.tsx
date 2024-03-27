/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Link from "next/link";

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/HomeMainFooter/HomeMainFooter.module.css";

interface Props {}

const HomeMainFooter: FC<Props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["social-media"]}>
        <p>¡ Siguenos en redes sociales !</p>
        <ul>
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Tiktok</Link>
          </li>
          <li>
            <Link href="/">X</Link>
          </li>
          <li>
            <Link href="/">Youtube</Link>
          </li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
        </ul>
      </div>
      <div className={styles["info-container"]}>
        <p>Informacion y soporte</p>
        <ul>
          <li>
            <Link href="/">Sobre nosotros</Link>
          </li>
          <li>
            <Link href="/">Envios y devoluciones</Link>
          </li>

          <li>
            <Link href="/">Soporte tecnico</Link>
          </li>
        </ul>
      </div>
      <div className={styles["credits-container"]}>
        <p>
          Sitio web desarrollado por{" "}
          <Link href="https://github.com/panprogramadorgh">
            @panprogrmadorgh
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default HomeMainFooter;

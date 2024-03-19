/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Logo from "@/app/ui/components/Generic/Logo/Logo";
import Image from "next/image";

// libs

// utils

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/Presentation/Presentation.module.css";

interface Props {}

const Presentation: FC<Props> = ({}) => {
  return (
    <div className={styles.presentation}>
      <section className={styles.slogan}>
        <Logo link={false} />
        <hr />
        <p>
          Eleva tu estilo y eleva tu confianza al vestir nuestras prendas
          cuidadosamente diseñadas para realzar tu belleza única y reflejar tu
          personalidad vibrante.
        </p>
      </section>
      <section className={styles["image-section"]}>
        <div>
          <Image src="/imgs/imagen2.jpg" width={390} height={500} alt="" />
        </div>
        <p>Camisa random de color blanco</p>
      </section>
    </div>
  );
};

export default Presentation;

// TODO: Sistema de cambio de imagen
// TODO: Sistema de actualizacion de comentario
// TODO: Crear comentario de reseña

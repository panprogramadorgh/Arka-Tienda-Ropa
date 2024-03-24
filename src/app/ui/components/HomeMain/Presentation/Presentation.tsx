/* Imports */

// react & nextjs
import { FC, Suspense } from "react";

// components
import Logo from "@/app/ui/components/Generic/Logo/Logo";
import Review from "@/app/ui/components/HomeMain/Presentation/Review/Review";
import ImageSlides from "@/app/ui/components/HomeMain/Presentation/ImageSlides/ImageSlides";

// libs

// utils
import useGetWindowSize from "@/app/ui/hooks/Generic/useGetWindowSize";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/Presentation/Presentation.module.css";

interface Props {}

const Presentation: FC<Props> = ({}) => {
  const windowSize = useGetWindowSize();

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
        {windowSize && windowSize.width > 950 && <Review />}
      </section>
      <section className={styles["slides-section"]}>
        <Suspense fallback={<p>hola mundo ...</p>}>
          {windowSize && <ImageSlides windowSize={windowSize} />}
        </Suspense>
      </section>
    </div>
  );
};

export default Presentation;

// TODO: Sistema de actualizacion de comentario
// TODO: Crear comentario de reseña
// TODO: Limpiar todos los use cliente que no sean necesarios
// TODO: Arreglar suspense del componente ImageSliades

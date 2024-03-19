/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Image from "next/image";

// libs

// utils

// types & interfaces
import type { Product as ProductData } from "@/utils/product";

// css
import styles from "@/app/ui/components/HomeMain/ProductSlides/Product/Product.module.css";

interface Props extends ProductData {}

const Product: FC<Props> = ({
  title,
  description,
  materials,
  price,
  sizes,
  imgPath,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{materials}</p>
        <p>{price}</p>
        <p>{sizes}</p>
      </div>
      <div className={styles.image}>
        <Image width={100} height={100} src={imgPath} alt="product image" />
      </div>
    </div>
  );
};

export default Product;

{
  /* <Product
        id={0}
        title="Articulo 2"
        description="Descripcion articulo 2"
        materials={["Algodon", "Poliester"]}
        price={120}
        sizes={["L", "M", "X"]}
        productPath="/products/product2"
        imgPath="/imgs/imagen2.jpg"
      /> */
}

"use client";

/* Imports */

// react & nextjs
import { FC, useState, useEffect } from "react";

// components
import Product from "@/app/ui/components/HomeMain/ProductSlides/Product/Product";

// libs

// utils

// types & interfaces
import { Product as ProductData, FetchError } from "@/utils/product";

// css
import styles from "@/app/ui/components/HomeMain/ProductSlides/ProductSlides.module.css";

interface Props {}

const ProductSlides: FC<Props> = ({}) => {
  const [products, setProducts] = useState<ProductData[] | FetchError | null>(
    null
  );

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products.json");
      const data: ProductData[] = await response.json();
      console.log(data); // prints products
      setProducts(data);
    } catch (error) {
      console.error(error); // prints error
      const fetchErrorMessage: FetchError = {
        message: "There was an error fetching the products",
      };
      setProducts(fetchErrorMessage);
    }
  };

  const checkError = (
    products: ProductData[] | FetchError
  ): products is FetchError => {
    return !(products instanceof Array);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // const getContent = () => {
  //   if (products == null) {
  //     const fetchMessage = <p>Fetching products...</p>;
  //     return fetchMessage;
  //   } else if (checkError(products)) {
  //     const errorMessage = <p>{products.message}</p>;
  //     return errorMessage;
  //   } else {
  //     const elements: JSX.Element[] = products.map((product) => {
  //       return (
  //         <div className={styles.product} key={product.id}>
  //           <h2>{product.title}</h2>
  //           <p>{product.description}</p>
  //           <p>{product.materials}</p>
  //           <p>{product.price}</p>
  //           <p>{product.sizes}</p>
  //         </div>
  //       );
  //     });
  //     return elements;
  //   }
  // };

  return <div className={styles["slides"]}></div>;
};

export default ProductSlides;

// TODO: Determinar que hacer con este componente

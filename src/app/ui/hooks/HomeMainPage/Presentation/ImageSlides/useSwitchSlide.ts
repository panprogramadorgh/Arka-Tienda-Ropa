import { Product } from "@/utils/product";
import { useState, useEffect, useCallback } from "react";

interface UseSwitchSlideParams {
  products: Product[] | null;
  switchInterval: number;
}

type ProductIndex = number;

type UseSwitchSlide = (
  useSwitchSlideObjParams: UseSwitchSlideParams
) => [Product | null, ProductIndex];

const useSwitchSlide: UseSwitchSlide = ({ products, switchInterval }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState<number>(0);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  useEffect(() => {
    setCurrentProduct(getProduct());

    const timeout = setTimeout(async () => {
      await switchProduct();
    }, switchInterval);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentProductIndex, products]);

  const switchProduct = async () => {
    if (products !== null) {
      let newProduct = currentProductIndex + 1;
      if (newProduct > products.length - 1) {
        newProduct = 0;
      }
      setCurrentProductIndex(newProduct);
    }
  };

  const getProduct = () => {
    return products && products[currentProductIndex];
  };

  return [currentProduct, currentProductIndex];
};

export default useSwitchSlide;

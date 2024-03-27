import { useState, useEffect } from "react";
import type { Product } from "@/utils/types&interfaces/product";

export default function useFetchProducts() {
  const [products, setProducts] = useState<Product[] | null>(null);

  const fetchProducts = async () => {
    const response = await fetch("/api/products.json");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return products;
}

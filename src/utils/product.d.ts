export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  materials: string[];
  sizes: string[];
  productPath: string;
  imgPath: string;
}

export interface ImageSlideProduct {
  title: Product["title"];
  imgPath: Product["imgPath"];
}

export interface FetchError {
  message: string;
}

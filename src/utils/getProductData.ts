import productData from "../components/products/ProductsGrid/productData";

export interface IBesides {
  productName: string;
  price?: string; // <-- стало опциональным
  newPrice?: string;
  productImgList: string[];
}

export interface ProductData {
  id?: string;
  index: number;
  img: string;
  imgHover: string;
  title: string;
  price?: string; // <-- тоже сделай опциональным
  newPrice?: string;
  slug: string;
  description?: {
    main?: string;
    material?: string;
    design?: string;
    size?: {
      main?: string;
      details?: string[];
    };
  };
  images?: string[];
  besides?: IBesides[];
}

export const getProductDataByIndex = (
  index: number
): ProductData | undefined => {
  return productData.find((p) => p.index === index);
};

export default getProductDataByIndex;
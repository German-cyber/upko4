import React, { useState } from "react";
import ProductItemInfo from "./ProductItemInfo";
import ProductItemSwiper from "./ProductItemSwiper";
import "./ProductItemSwiperInfo.css";
import { ProductData } from "../../../utils/getProductData";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

interface Props {
  productData: ProductData;
}

const ProductItemSwiperInfo: React.FC<Props> = ({ productData }) => {
  const [selectedBesidesIndex, setSelectedBesidesIndex] = useState<number | null>(null);

  // Определяем картинки для галереи, в зависимости от выбранного besides
  const getGalleryImages = () => {
    if (
      selectedBesidesIndex !== null &&
      productData.besides &&
      productData.besides[selectedBesidesIndex] &&
      productData.besides[selectedBesidesIndex].productImgList &&
      productData.besides[selectedBesidesIndex].productImgList.length > 0
    ) {
      return productData.besides[selectedBesidesIndex].productImgList;
    }
    // Если besides не выбран, вернуть дефолтные картинки (как сейчас)
    return null;
  };

  const galleryImages = getGalleryImages();

  return (
    <section className="container">
      <Breadcrumbs />
      <div className="ProductItemSwiperInfo">
        <ProductItemSwiper
          productData={productData}
          galleryImages={galleryImages}
          selectedBesidesIndex={selectedBesidesIndex ?? -1}  // pass current selected index or -1 if null
          besides={productData.besides}
        />
        <ProductItemInfo
          productData={productData}
          onBesideChange={setSelectedBesidesIndex} // передаем функцию для изменения selectedBesidesIndex
        />
      </div>
    </section>
  );
};

export default ProductItemSwiperInfo;
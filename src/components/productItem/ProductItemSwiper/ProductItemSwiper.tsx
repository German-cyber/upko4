import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductItemSwiper.css";
import { productImagesConfig } from "../../../data/productImagesConfig";
import { ProductData } from "../../../utils/getProductData";

interface ProductItemSwiperProps {
  productData: ProductData;
  galleryImages?: string[] | null; // для подтоваров, если нужно
  besides?: ProductData["besides"]; // массив besides из продукта
  selectedBesidesIndex?: number; // индекс выбранного besides для переключения слайда
}

const ProductItemSwiper: React.FC<ProductItemSwiperProps> = ({
  productData,
  galleryImages,
  besides,
  selectedBesidesIndex = -1,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const mainSwiperRef = useRef<any>(null);

  // 1. Получаем дефолтные картинки продукта (если galleryImages нет)
  const defaultImages = (() => {
    if (galleryImages && galleryImages.length > 0) return galleryImages;

    const config = productImagesConfig[productData.index];
    if (!config) {
      console.error(`No images config found for product ${productData.index}`);
      return [];
    }
    return config.images.map(
      (name) => `/product-images-all/${productData.index}/${name}`
    );
  })();

  // 2. Собираем все картинки без дублирования
  const allImages: string[] = [];
  const besidesStartIndices: number[] = [];
  const seenImages = new Set<string>();

  // Добавляем дефолтные картинки
  defaultImages.forEach((img) => {
    const normalized = img.trim().toLowerCase();
    if (!seenImages.has(normalized)) {
      seenImages.add(normalized);
      allImages.push(img);
    }
  });

  // Добавляем картинки besides
  besides?.forEach((besideItem, idx) => {
    besidesStartIndices[idx] = allImages.length;

    besideItem.productImgList.forEach((img) => {
      const normalized = img.trim().toLowerCase();
      if (!seenImages.has(normalized)) {
        seenImages.add(normalized);
        allImages.push(img);
      }
    });
  });

  // 3. При изменении selectedBesidesIndex переключаем слайдер на нужный слайд
  useEffect(() => {
    if (
      mainSwiperRef.current &&
      selectedBesidesIndex >= 0 &&
      besides &&
      besides[selectedBesidesIndex]
    ) {
      // Получаем первую картинку выбранного besides
      const firstBesidesImg = besides[selectedBesidesIndex].productImgList[0];

      // Ищем её индекс в дефолтных картинках
      const defaultIndex = defaultImages.findIndex((img) => img === firstBesidesImg);

      if (defaultIndex !== -1) {
        // Если нашли такую картинку в дефолтных — переключаемся на неё
        mainSwiperRef.current.slideToLoop(defaultIndex);
      } else {
        // Если не нашли, переключаемся на начало besides
        const startIndex = besidesStartIndices[selectedBesidesIndex];
        if (startIndex !== undefined) {
          mainSwiperRef.current.slideToLoop(startIndex);
        }
      }
    }
  }, [selectedBesidesIndex, besidesStartIndices, besides, defaultImages]);

  if (allImages.length === 0) {
    return <div>No images found for this product</div>;
  }

  return (
    <div className="product-item__gallery product-item__container swiper-and-info-section">
      <div className="product-item__swiper" style={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: ".swiper-button-custom.swiper-button-prev",
            nextEl: ".swiper-button-custom.swiper-button-next",
          }}
          onInit={(swiper) => {
            // @ts-expect-error
            swiper.params.navigation.prevEl =
              ".swiper-button-custom.swiper-button-prev";
            // @ts-expect-error
            swiper.params.navigation.nextEl =
              ".swiper-button-custom.swiper-button-next";
            swiper.navigation.init();
            swiper.navigation.update();
            mainSwiperRef.current = swiper;
          }}
          loop
          spaceBetween={0}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          className="product-item__main-swiper"
        >
          {allImages.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`${productData.title} view ${i + 1}`}
                className="product-item__img"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки навигации */}
        <button
          type="button"
          className="swiper-button-custom swiper-button-prev"
          aria-label="Previous"
        >
          <svg
            className="flickityt4s-button-icon"
            viewBox="0 0 100 100"
            width="28"
            height="28"
          >
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
              fill="#222"
            />
          </svg>
        </button>
        <button
          type="button"
          className="swiper-button-custom swiper-button-next"
          aria-label="Next"
        >
          <svg
            className="flickityt4s-button-icon"
            viewBox="0 0 100 100"
            width="28"
            height="28"
          >
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
              fill="#222"
              transform="translate(100, 100) rotate(180)"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="product-item__thumbs-swiper"
      >
        {allImages.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${productData.title} thumbnail ${i + 1}`}
              className="product-item__thumb"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductItemSwiper;

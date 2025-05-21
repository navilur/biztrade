"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./card.module.css";
import Card from "./Card";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  brand: string;
};

type Props = {
  products: Product[];
};

const ProductCarousel = ({ products }: Props) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true);
    }
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselBtn}>
        <button ref={prevRef} className={styles.prevBtn}>
          <Image src="/images/prev.svg" width={23} height={23} alt="Previous" />
        </button>
        <button ref={nextRef} className={styles.nextBtn}>
          <Image src="/images/next.svg" width={23} height={23} alt="Next" />
        </button>
      </div>

      {navigationReady && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            900: { slidesPerView: 3.5, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "auto" }}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductCarousel;

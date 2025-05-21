"use client";

import React from "react";
import styles from "./quotation.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { review } from "@/constants/constants";

const Review = () => {
  return (
    <div className={styles.review}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {review.map((item) => (
          <SwiperSlide key={item.id} style={{ height: "auto" }}>
            <div className={styles.reviewHeader}>
              <Image src={item.img} alt={item.title} width={49} height={49} />
              <div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
            <h6>{item.message}</h6>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

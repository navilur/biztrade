"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./seller.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { sellers } from "@/constants/constants";

const FeaturedSeller = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true);
    }
  }, []);

  return (
    <div className="container">
      <div className={styles.featured}>
        <h3>Featured Seller</h3>
        <div className={styles.carouselBtn}>
          <button ref={prevRef} className={styles.prevBtn}>
            <Image
              src="/images/prev.svg"
              width={23}
              height={23}
              alt="Previous"
            />
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
            spaceBetween={30}
            slidesPerView={4.5}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1.5, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 15 },
              900: { slidesPerView: 3.5, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {sellers.map((item) => (
              <SwiperSlide key={item.id} style={{ height: "auto" }}>
                <div className={styles.featuredCard}>
                  <div
                    className={styles.verified}
                    style={{ display: item.verified ? "flex" : "none" }}
                  >
                    <Image
                      src="/images/Verified.svg"
                      alt="Verified"
                      width={11.99}
                      height={13}
                    />
                    <h6>Verified</h6>
                  </div>
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={100}
                    height={100}
                  />
                  <h4>{item.label}</h4>
                  <p>{item.text}</p>
                  <div className={styles.rating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.76018 0.490759L10.6012 4.49287C10.6812 4.733 10.9213 4.89308 11.1614 4.97313L15.3236 5.61346C16.044 5.61346 16.2842 6.41389 15.8039 6.89414L12.7623 10.0158C12.6022 10.1759 12.5222 10.496 12.5222 10.7362L13.2425 15.0585C13.3226 15.6988 12.6823 16.2591 12.122 15.9389L8.35997 13.8578C8.11984 13.6977 7.87972 13.6977 7.63959 13.8578L3.8776 15.9389C3.31731 16.2591 2.59693 15.7788 2.75701 15.0585L3.47739 10.7362C3.55743 10.496 3.39735 10.1759 3.23726 10.0158L0.195659 6.89414C-0.204552 6.41389 0.0355743 5.61346 0.675912 5.53342L4.83811 4.89309C5.07824 4.89309 5.31836 4.65296 5.39841 4.41283L7.23938 0.410717C7.63959 -0.149579 8.44001 -0.149579 8.76018 0.490759Z"
                          fill={item.rating >= i + 1 ? "#F88216" : "#F8821630"}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default FeaturedSeller;

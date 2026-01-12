"use client";

import "swiper/css";
import "swiper/css/navigation";

import { FC, useEffect, useRef, useState } from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";

import { TAuction } from "@/entities";
import { Icon } from "@/shared";

import { AuctionCard } from "./_parts";
import styles from "./auction-slider.module.scss";

const BREAKPOINTS: Record<string, number> = {
  XS: 500,
  S: 800,
  M: 1100,
  L: 1500,
  XL: 2000,
};

type TAuctionSliderProps = {
  items: TAuction[];
  mutate?: () => void;
};

export const AuctionSlider: FC<TAuctionSliderProps> = ({ items, mutate }) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setIsMounted(true));
  }, []);

  if (!isMounted) return null;

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Virtual]}
        loop
        virtual
        slidesPerView={7}
        breakpoints={{
          0: { spaceBetween: "32px" },
          [BREAKPOINTS.M]: { spaceBetween: "40px" },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={styles.slider}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index} className={styles.slide}>
            <AuctionCard auction={item} mutate={mutate} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.controls}>
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <Icon name={"arrowLeft"} />
        </button>
        <span />
        <button onClick={() => swiperRef.current?.slideNext()}>
          <Icon name={"arrowRight"} />
        </button>
      </div>
    </div>
  );
};

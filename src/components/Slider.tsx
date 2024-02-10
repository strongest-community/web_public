"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const images = [
  "slider/slider1.jpg",
  "slider/slider2.jpg",
  "slider/slider3.jpg",
];

const Slider = () => {
  return (
    <div className="slider">
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
      >
        {images.map((src) => (
          <SplideSlide>
            <img
              className="slide-img block w-[90vw] h-[90vh] mx-auto"
              style={{ objectFit: "cover" }}
              src={src}
              alt="no image"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;

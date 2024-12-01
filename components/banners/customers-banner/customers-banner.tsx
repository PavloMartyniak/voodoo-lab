"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomersBanner = () => {
  const settings = {
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
  };
  return (
    <div className="slider-container">
      <Slider className="bg-gray-700 p-6" {...settings}>
        <img src="icons/funduk-color.svg" />
        <img src="icons/leroy_merlin-color.png" />
        <img src="icons/nalunu-color.svg" />
        <img src="icons/siltek-color.svg" />
        <img src="icons/optimeal-color.png" />
        <img src="icons/icu-color.svg" />
      </Slider>
    </div>
  );
};

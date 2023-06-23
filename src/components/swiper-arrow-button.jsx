import React from "react";
import { useSwiper } from "swiper/react";
import arrowRight from "../assets/arrowRight.png";

const ArrowButton = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className='h-12 w-12 rounded-full bg-orange-500 absolute top-1/2 -right-0 md:-right-5 flex items-center justify-center opacity-0 group-hover:opacity-100'
    >
      <img src={arrowRight} className='w-5' />
    </button>
  );
};

export default ArrowButton;

import React from "react";
import { useSwiper } from "swiper/react";
import arrowRight from "../assets/arrowRight.png";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='flex gap-10'>
      <button
        className='rounded-full w-16 h-16  bg-[#2D2D2D] text-2xl flex flex-row-reverse items-center justify-center cursor-pointer rotate-180'
        onClick={() => swiper.slidePrev()}
      >
        <img src={arrowRight} className='w-6' />
      </button>
      <button
        className='rounded-full w-16 h-16  bg-[#2D2D2D] text-2xl flex items-center justify-center cursor-pointer'
        onClick={() => swiper.slideNext()}
      >
        <img src={arrowRight} className='w-6' />
      </button>
    </div>
  );
};

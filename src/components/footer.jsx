import React from "react";
import { footerData } from "../data/data";

const Footer = () => {
  return (
    <>
      <div className='bg-[#000000] w-full mx-auto pt-16 pb-10'>
        <div className='flex items-center justify-center gap-8 w-full'>
          {footerData?.map((item, idx) => (
            <img
              src={item.icon}
              key={idx}
              alt='icons'
              className='w-9 cursor-pointer hover:bg-gray-600 transition-all ease-in delay-75 rounded-full'
            />
          ))}
        </div>
        <div className='mt-6  border-b-[1px] border-[#BDBDBD] w-[85%] mx-auto xl:w-11/12' />
        <p className='text-center font-poppins text-[#666666] text-sm font-normal mt-5 md:text-base'>
          Copyright © 2022 All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;

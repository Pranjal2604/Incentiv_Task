import React from "react";
import semicircle from "../assets/semi-circle.png";
import { whatWeOfferData } from "../data/data";
import aboutbg from "../assets/about-card-bg.png";

const WhatWeOffer = () => {
  return (
    <>
      <div
        id='services'
        className='px-6 md:px-10 py-32 lg:px-24 xl:px-40 2xl:px-48 what-we-offer-bg relative xl:bg-center'
      >
        <h2 className='text-lg uppercase font-medium text-orange-700 relative xl:text-base'>
          <div className='flex items-center w-full'>
            <span className='pr-2 font-poppins'>our services</span>
            <hr className='border-t-2 border-orange-700 w-5 md:w-20' />
          </div>
        </h2>
        <h1 className='text-[#FFFFFF] font-bold text-[25px] capitalize leading-relaxed md:text-[52px] md:leading-normal xl:text-[54px] font-poppins'>
          What we offer?
        </h1>
        {/* Card Div */}
        <div className='mt-8 flex flex-col xs:items-center gap-14 xs:gap-3 md:flex-row '>
          {/* Cards */}

          {whatWeOfferData?.map((item, idx) => (
            <div
              key={idx}
              className='bg-[#00000073] w-full xs:w-[90%] h-[400px] xs:h-[300px]  rounded-lg px-5 my-5 flex items-start flex-col justify-center gap-3 relative'
            >
              <div className='hover:translate-y-[100%]'>
                <div className='w-10 '>
                  <img src={item.icon} className='w-full' alt='' />
                </div>
                <h1 className='text-xl font-semibold xs:text-3xl text-[#FFFFFF] font-poppins lg:text-2xl mt-3 xl:text-3xl'>
                  {item.title1} <br className='hidden md:block' />
                  {item.title2}
                </h1>
              </div>
              <div className='image__overlay'>
                {/* <div className='absolute'>
                  <img src={aboutbg} alt='' className='w-full' />
                </div> */}
                <h1 className='text-xl xs:text-2xl font-semibold text-[#FFFFFF] image__title font-poppins lg:text-2xl mt-5 xl:text-3xl'>
                  {item.title1} <br className='hidden md:block' /> {item.title2}
                </h1>
                <p className='text-[#EFEFEF] image__description w-full font-poppins'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-24 absolute right-0 -bottom-24 z-10'>
          <img src={semicircle} className='w-full' alt='' />
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;

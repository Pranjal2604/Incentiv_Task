import React from "react";
import AppButton from "./app-button";
import NavbarDrawer from "./navbar-drawer";
import { useNavigate } from "react-router-dom";

const BannerSection = ({scrollToContact}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id='home'
        className='flex flex-col items-center justify-center  h-[120vh] gap-3 px-2 banner-image  lg:pt-14'
      >

        <div className='absolute block lg:hidden w-full top-0 right-2'>
          <NavbarDrawer />
        </div>
        <h2 className='text-lg uppercase font-medium relative md:text-xl'>
          <div className='flex items-center w-full'>
            <hr className='border-t-2 border-[#fad1c8] w-5 md:w-20' />
            <span className='px-2 text-[#fad1c8] font-poppins'>
              Welcome to XYZ staffing
            </span>
            <hr className='border-t-2 border-[#fad1c8] w-5 md:w-20' />
          </div>
        </h2>
        <h1 className='text-white font-bold text-[25px] capitalize text-center leading-relaxed md:text-[52px] md:leading-normal xl:text-[68px] font-poppins'>
          Your Go-To Resource for <br /> Finding top Talent!
        </h1>
        <p className='text-center font-normal text-sm text-[#fad1c8] w-11/12 md:text-lg md:w-4/5 lg:w-2/3 xl:w-[55%] 2xl:w-[45%] xl:text-xl font-poppins'>
          Are you looking for top talent to help take your business to the next
          level? Look no further than XYZ Staffing. We’re a leading staffing
          agency with years of experience helping businesses across industries
          find the right people for their teams.
        </p>
        <div className='mt-5 w-40 xl:w-40'>
          {/* By applying different classname in css file you can customizse its color  */}
          <AppButton onClick={scrollToContact}  variant='secondary'>Explore More</AppButton>
        </div>
      </div>
    </>
  );
};

export default BannerSection;

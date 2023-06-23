import React from "react";
import aboutusVector from "../assets/about-us-vector.png";
import ellipse from "../assets/about-us-ellipse.png";

const AboutUs = () => {
  return (
    <>
      <div
        id='about-us'
        className='px-6 md:px-10 py-16 lg:px-24 xl:px-40 2xl:px-48 bg-[#0A0A0A] relative '
      >
        <div className='absolute w-full inset-0 -top-6 right-0 md:-top-8 lg:-top-11 xl:-top-16 2xl:-top-[83px] z-10'>
          <img src={ellipse} alt='' className='w-full' />
        </div>
        {/* In order to set the ellipse give margin top to bellow div */}
        <div className='flex flex-col items-center gap-10 mt-20 lg:flex-row-reverse lg:mt-10 xl:items-start xl:gap-0 z-10'>
          <div className='flex items-center justify-center text-center w-full mx-auto md:w-5/6 lg:w-full xl:w-3/4 2xl:w-2/4 z-10'>
            <img src={aboutusVector} alt='about-us-vector' className='w-full' />
          </div>
          <div className='w-full z-10'>
            <div className='my-5 '>
              <h2 className='text-lg uppercase font-medium text-orange-700 relative xl:text-base'>
                <div className='flex items-center w-full'>
                  <span className='pr-2 font-poppins'>About Us</span>
                  <hr className='border-t-2 border-orange-700 w-5 md:w-20' />
                </div>
              </h2>
              <h1 className='text-[#FFFFFF] font-bold text-[25px] capitalize leading-relaxed md:text-[52px] md:leading-normal xl:text-[54px]'>
                Who we are
              </h1>
            </div>
            <p className='text-base text-[#B7B7B7] md:text-xl  xl:w-11/12 2xl:w-3/4 font-poppins'>
              At XYZ Staffing, we’re passionate about helping businesses and job
              seekers connect. Our team has years of experience in the staffing
              industry, and we’re committed to providing personalized service
              and top-notch talent to our clients.
            </p>
            <p className='text-base text-[#B7B7B7] mt-5 md:text-lg xl:w-11/12 2xl:w-3/4 font-poppins'>
              We understand that every business is unique, which is why we take
              a personalized approach to staffing. We’ll work with you to
              understand your business needs and find the right people to help
              you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

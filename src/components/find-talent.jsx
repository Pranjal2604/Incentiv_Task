import React from "react";
import findTalentVector from "../assets/find-talent-vector.png";
import AppButton from "./app-button";
import orangeSemicircle from "../assets/orange-semicircle.png";

const FindTalent = ({scrollToContact}) => {
  return (
    <>
      <div
        id='employers'
        className='px-6 md:px-10 py-32 lg:px-24 xl:px-40 2xl:px-48 bg-[#0A0A0A] relative find-talent-bg  bg-center'
      >
        <div className='flex flex-col items-center gap-10 mt-20 lg:flex-row-reverse lg:mt-10 xl:items-start xl:gap-0 '>
          <div className='w-24 absolute left-0 -top-24 rotate-180'>
            <img src={orangeSemicircle} className='w-full' alt='' />
          </div>
          <div className='flex items-center justify-center text-center w-full mx-auto md:w-5/6 lg:w-full xl:w-3/4 2xl:w-2/4'>
            <img
              src={findTalentVector}
              alt='about-us-vector'
              className='w-full'
            />
          </div>
          <div className='w-full'>
            <div className='my-5 '>
              <h2 className='text-lg uppercase font-medium text-orange-700 relative xl:text-base'>
                <div className='flex items-center w-full'>
                  <span className='pr-2 font-poppins'>Employers</span>
                  <hr className='border-t-2 border-orange-700 w-5 md:w-20' />
                </div>
              </h2>
              <h1 className='text-[#FFFFFF] font-bold text-[25px] capitalize leading-relaxed md:text-[52px] md:leading-normal xl:text-[54px]'>
                Find Talent
              </h1>
            </div>
            <p className='text-base text-[#B7B7B7] md:text-xl  xl:w-11/12 2xl:w-3/4 font-poppins'>
              At XYZ Staffing, we understand that finding the right talent is
              critical to the success of your business. That’s why we offer
              personalized staffing solutions tailored to meet your unique
              needs.
            </p>
            <p className='text-base text-[#B7B7B7] mt-5 md:text-lg xl:w-11/12 2xl:w-3/4 font-poppins'>
              Our team of staffing experts will work with you to understand your
              business goals and find the right people to help you achieve them.
              Whether you’re looking for short-term help or a permanent addition
              to your team, we can help.
            </p>
          </div>
        </div>
        <div className='mt-10 w-[187px] '>
          <AppButton onClick={scrollToContact} type='submit' variant={"primary"}>
            Look For Talent
          </AppButton>
        </div>
      </div>
    </>
  );
};

export default FindTalent;

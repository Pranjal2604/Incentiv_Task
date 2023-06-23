import React from "react";
import findJobsVector from "../assets/fin-jobs-vector.png";
import orangeSemicircle from "../assets/orange-semicircle.png";
import AppButton from "./app-button";

const FindJobs = () => {
  return (
    <>
      <div
        id='job-seekers'
        className='px-6 md:px-10 py-32 lg:px-24 xl:px-40 2xl:px-48 bg-[#0A0A0A] w-full relative'
      >
        <div className='w-24 absolute right-0 -top-16'>
          <img src={orangeSemicircle} className='w-full' alt='' />
        </div>
        <div className='flex flex-col items-center justify-between w-full gap-10 mt-20 lg:flex-row lg:mt-10 2xl:items-start 2xl:ml-48 2xl:gap-x-32'>
          <div className='flex items-center justify-center text-center w-full mx-auto md:w-5/6 lg:w-full xl:w-3/4 2xl:w-2/4'>
            <img
              src={findJobsVector}
              alt='about-us-vector'
              className='w-full'
            />
          </div>
          <div className='w-full'>
            <div className='my-5 '>
              <h2 className='text-lg uppercase font-medium text-orange-700 xl:text-base'>
                <div className='flex items-center w-full'>
                  <span className='pr-2 font-poppins'>Job Seekers</span>
                  <hr className='border-t-2 border-orange-700 w-5 md:w-20' />
                </div>
              </h2>
              <h1 className='text-[#FFFFFF] font-bold text-[25px] capitalize leading-relaxed md:text-[52px] md:leading-normal xl:text-[54px]'>
                Find Jobs
              </h1>
            </div>
            <p className='text-base text-[#B7B7B7] md:text-xl  xl:w-11/12 2xl:w-3/4 font-poppins'>
              Looking for a new job opportunity? Look no further than XYZ
              Staffing. We work with top businesses across industries to help
              connect job seekers with exciting career opportunities.
            </p>
            <p className='text-base text-[#B7B7B7] mt-5 md:text-lg xl:w-11/12 2xl:w-3/4 font-poppins'>
              Our team of staffing experts will work with you to understand your
              skills, experience, and career goals and find the right job
              opportunities for you. We offer a range of job opportunities
              across industries, including administrative, professional, and
              light industrial positions.
            </p>
            <div className='w-44 mt-10'>
              <AppButton type='submit' variant={"primary"}>
                Look For Jobs
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindJobs;

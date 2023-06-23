import React, { useState } from "react";
import contact from "../assets/contact-us.png";
import semicircle from "../assets/semi-circle.png";
import AppButton from "./app-button";

const ContactUs = ({contactRef}) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <div  id="contact-form" className='px-6 md:px-10 py-20 lg:px-24 xl:px-40 2xl:px-48 contact-bg relative overflow-hidden xl:bg-center'>
        {/*  */}
        <h2 className='text-lg uppercase font-medium text-orange-700 relative xl:text-base'>
          <div className='flex items-center w-full'>
            <span className='pr-2'>Get in Touch</span>
            <hr className='border-t-2 border-orange-700 w-5 md:w-20' />
          </div>
        </h2>
        <h1 ref={contactRef}  className='text-[#FFFFFF] font-bold text-[25px] capitalize leading-relaxed md:text-[52px] md:leading-normal xl:text-[54px]'>
          Ready to take the next step <br/> in your career?
        </h1>
        <p className='text-base text-[#666666] font-normal my-4 md:text-xl'>
          Contact us today to learn more about our job opportunities.
        </p>
        {/*  */}
        <div  className='flex flex-col items-center gap-10 mt-20 lg:flex-row md:gap-20 xl:gap-0'>
          <div className='w-24 absolute right-0 top-1/2 md:top-[58%] lg:top-[30%] xl:top-[25%]'>
            <img src={semicircle} className='w-full' alt='' />
          </div>
          <div className='lg:w-2/5 xl:w-[30%] xl:ml-28 2xl:w-1/4'>
            <img src={contact} alt='' className='w-full' />
          </div>
          <div className='border border-orange-950 rounded-2xl w-full p-[1px]  lg:absolute lg:left-1/2 bg-opacity-100 backdrop-filter '>
            <div className='rounded-2xl py-14 px-6 text-white w-full md:px-14 md:py-16 2xl:py-[82px] bg-opacity-100 backdrop-filter '>
              {/* <div className='bg-gradient-to-br from-[#ff62008b]  to-[#ff62000b] rounded-2xl w-full p-[1px]  lg:absolute lg:left-1/2 '>
            <div className='bg-[#000000] rounded-2xl py-14 px-6 text-white w-full md:px-14 md:py-16 2xl:py-[82px]'> */}
              <form
                onSubmit={handleSubmit}
                className=' flex flex-col items-start gap-5'
              >
                <div className='flex flex-col w-[85%] md:w-3/4 lg:w-2/6 xl:w-1/3 '>
                  <label htmlFor=''>Name</label>
                  <input
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    type='text'
                    required
                    placeholder='Name'
                    className='bg-[#bdbdbd0e] border border-[#6f6f6f42] rounded-full py-3 px-5 my-3 outline-none focus:outline-none autofill:bg-[#bdbdbd0e] autofill:'
                  />
                </div>
                <div className='flex flex-col w-[85%] md:w-3/4 lg:w-2/6 xl:w-1/3'>
                  <label htmlFor=''>Email Address </label>
                  <input
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                    type='email'
                    required
                    placeholder='E-mail'
                    className='bg-[#bdbdbd0e] border border-[#6f6f6f42] rounded-full py-3 px-5 my-3 outline-none focus:outline-none autofill:bg-[#bdbdbd0e]'
                  />
                </div>
                <div className='w-32 md:w-44'>
                  <AppButton type='submit' variant={"primary"}>
                    Send
                  </AppButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

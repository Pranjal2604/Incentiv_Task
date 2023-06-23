import React from "react";
import logo from "../assets/logo.png";
import { navbarData } from "../data/data";

const Navbar = ({scrollToContact}) => {
  return (
    <>
      <div className='bg-navbar py-4 mx-auto w-11/12 px-5 rounded-full mt-10 fixed items-center justify-around left-1/2 transform -translate-x-1/2 z-50 backdrop-filter backdrop-blur-[40px] bg-opacity-10 hidden lg:flex'>
        {/* Logo  */}
        <div className='w-14'>
          <img src={logo} alt='' className='w-full' />
        </div>
        {/* A tags */}
        <div>
          <ul className='flex items-center gap-14 text-[#FFFFFF] font-poppins font-normal text-base cursor-pointer'>
            {navbarData?.map((item, idx) => (
              <a
                href={item.id}
                className='active:text-black active:border-b-2 border-[#000000] '
                key={idx}
              >
                {item.title}
              </a>
            ))}
          </ul>
        </div>
        <div className='text-[#FFFFFF] rounded-full border border-[#FFFFFF] px-8 py-2 hover:bg-[#FFFFFF] transition-all ease-in delay-75 hover:text-[#000000] text-base font-semibold'>
          <button onClick={scrollToContact} className='cursor-pointer'>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

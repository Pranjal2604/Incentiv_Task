import Hamburger from "hamburger-react";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { navbarData } from "../data/data";
import logo from "../assets/logo.png";

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className='w-full flex  mt-2 items-center'>
      <div className='w-14 mr-auto ml-4 '>
          <img src={logo} alt='' className='w-full' />
        </div>
        <Hamburger
          color='white  '
          toggled={isOpen}
          toggle={setIsOpen}
          onClick={toggleDrawer}
        />
        <Drawer
          style={{ width: "100%", backgroundColor: "#1E1E1E" }}
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='w-full bg-black'
        >
          <div className='flex justify-end w-full'>
            <Hamburger
              color='white'
              toggled={isOpen}
              toggle={setIsOpen}
              onClick={toggleDrawer}
            />
          </div>
          {
            <ul className='flex flex-col items-center justify-start h-full gap-20 text-[#FFFFFF] font-poppins font-normal text-xl cursor-pointer pt-32'>
              {navbarData?.map((item, idx) => (
                <a
                  href={item.id}
                  className='active:text-black active:border-b-2 border-[#000000] '
                  key={idx}
                  onClick={() => setIsOpen(!setIsOpen)}
                >
                  {item.title}
                </a>
              ))}
            </ul>
          }
        </Drawer>
      </div>
    </>
  );
};

export default NavbarDrawer;

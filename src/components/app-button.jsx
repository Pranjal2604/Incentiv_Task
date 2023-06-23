import React, { useState } from "react";
import btn from "../assets/btn.png";
import btnHover from "../assets/btn-hovered.png";
import cx from "classnames";

const AppButton = ({ children, className, variant, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonClass = cx(className, "btn w-full font-poppins", {
    "primary-btn": variant === "primary",
  });

  return (
    <button
      className={buttonClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className='transition-all delay-1000 ease-in-out flex items-center justify-center text-center font-poppins'>
        <p className='btn-dsc text-base font-poppins font-semibold'>
          {children}
          <span
            className={`half absolute right-3 hover:right-[2.95px] font-poppins`}
          >
            <img src={isHovered ? btnHover : btn} alt='' className='w-full' />
          </span>
        </p>
      </div>
    </button>
  );
};

export default AppButton;

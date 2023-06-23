import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../components/swiper-nav-button";
import expertiseVector from "../assets/expertise.png";
import "../index.css";
import { expertiseData } from "../data/data";
import ArrowButton from "../components/swiper-arrow-button";

const OurExpertise = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
      <div className='px-6 md:px-10 py-20 lg:px-24 xl:px-36 2xl:px-48 contact-bg relative overflow-hidden bg-[#0A0A0A]'>
        <h2 className='text-lg uppercase font-medium text-orange-700 relative xl:text-base'>
          <div className='flex items-center w-full'>
            <span className='pr-2'>Our Expertise</span>
            <hr className='border-t-2 border-orange-700 w-5 md:w-20' />
          </div>
        </h2>
        <h1 className='text-[#FFFFFF] font-bold text-[25px] capitalize leading-relaxed md:text-[52px] md:leading-normal xl:text-[54px]'>
          Industries we serve
        </h1>

        <div className='flex flex-col items-center  gap-8  mt-20 lg:flex-row md:gap-8 xl:gap-8 lg:items-start '>
          <div className='lg:w-2/4 xl:w-[25%] xl:ml-0 2xl:w-1/3'>
            <img src={expertiseVector} alt='' className='w-full' />
          </div>

<div className="lg:w-2/4 xl:w-[75%] xl:ml-0 2xl:w-1/3"> 
          <Swiper
          className="w-full"
            loop={true}
            slidesPerView={1}
            spaceBetween={18}
            breakpoints={{
              // Medium (md) screens and above

              768: {
                slidesPerView: 2,
              },
              // Large (lg) screens and above
              1024: {
                slidesPerView: 2,
              },
              // Extra-large (xl) screens and above
              1280: {
                slidesPerView: 3,
              },
              // 2 Extra-large (2xl) screens and above
              1536: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {/* <SwiperSlide> */}
            {expertiseData?.map((item, idx) => (
              <SwiperSlide
              // key={item.id}
              // className={`group flex flex-col items-center justify-center border border-orange-950 rounded-[48px] gap-5 relative cursor-pointer swiper-slide`}
              // onMouseEnter={() => handleMouseEnter(item.id)}
              // onMouseLeave={handleMouseLeave}
              >
                <div
                  key={idx}
                  className={`group flex flex-col items-center justify-center border border-orange-950 rounded-[48px] gap-5 relative cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  style={{ width: "230px", height: "300px", padding: "0 70px" }}
                >
                  <div className='w-14'>
                    <img
                      src={isHovered === item.id ? item.iconHovered : item.icon}
                      className='w-full'
                      alt={item.title} // Add an alt attribute for accessibility
                    />
                  </div>
                  <h2 className='text-white font-poppins text-xl'>
                    {item.title}
                  </h2>
                  <ArrowButton />
                </div>
              </SwiperSlide>
            ))}
            <div className='mt-10 flex items-center justify-center gap-5 mx-auto w-full'>
              <SwiperNavButtons />
            </div>
          </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;

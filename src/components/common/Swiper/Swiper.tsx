import React from 'react'

import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Navigation } from "swiper";
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Card from '../Card/Card';
import { BlogInterface } from '../../../utils/interfaces';

interface Props {
  blogs: BlogInterface[]
}

export default function Swiper({blogs}:Props) {
  return (
    <SwiperContainer
      breakpoints={{
        "@0.00": {
          slidesPerView: 1.2,
        },
        "@0.75": {
          slidesPerView: 1.4,
        },
        "@1.00": {
          slidesPerView: 2,
        },
        "@1.50": {
          slidesPerView: 3,
        },
      }}
      // slidesPerView={3}
      spaceBetween={0}
      loop={true}
      className="mySwiper relative flex justify-between"
    >
      {blogs.map(blog => {
        return(<SwiperSlide key={blog._id}><Card blog={blog} /></SwiperSlide>)
      })}

        <div className='hidden md:flex absolute w-full justify-between z-10 top-[45%]'>
            <NextBtn />
            <PrevBtn />
        </div>

        <div className='w-full h-8'></div>
    </SwiperContainer>
  )
}

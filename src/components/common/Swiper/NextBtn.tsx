import React from "react";

import { useSwiper } from "swiper/react";

import { MdChevronLeft } from "react-icons/md";

export default function NextBtn() {
  const swiper = useSwiper();

  return (
    <div onClick={() => swiper.slideNext()} className='transition ease-in-out group w-9 h-9 bg-[#F2F2F2] hover:bg-[#00B9FF] cursor-pointer rounded-sm flex items-center justify-center'>
      <MdChevronLeft className="w-5 h-5 text-text transition ease-in-out group-hover:text-[white]" />
    </div>
  );
}

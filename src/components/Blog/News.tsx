import React from 'react'
import { BtnPrimary } from '../common/Btn/Btn'
import Card from '../common/Card/Card'
import Widget from '../common/Widget/Widget'

import { MdOutlineTrendingFlat } from "react-icons/md";

export default function News() {
  return (
    <div className='w-full layoutPadding layoutMarginTop layoutMarginBottom flex flex-col items-center justify-center'>
      <div className='text-title text-2xl font-bold layoutMarginBottom'>Latest News</div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div className='md:col-span-2 col-span-1 grid grid-cols-1 md:grid-cols-2'>
          <div className='mb-5'><Card /></div>
          <div className='mb-5'><Card /></div>
          <div className='mb-5'><Card /></div>
          <div className='mb-5'><Card /></div>
          <div className='mb-5'><Card /></div>
          <div className='mb-5'><Card /></div>

          <div className='md:col-span-2 col-span-1 flex justify-center mt-4'>
            <BtnPrimary title="Load More" action={() => console.log("load more")} icon={<MdOutlineTrendingFlat />} />
          </div>
        </div>
        <Widget />
      </div>
    </div>
  )
}

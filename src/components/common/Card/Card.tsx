import React from 'react'

import { MdOutlineTrendingFlat, MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Card() {
  return (
    <div className='w-full px-3'>
        <div className='shadow-lg rounded-b-lg'>
            <div className='w-full h-[200px] rounded-t-lg'>
                <img alt="Alert" src='/images/alert.png' className='w-full h-full rounded-t-lg object-cover aspect-square' />
            </div>

            <div className='p-4'>
                <div className='text-title text-xl'>Major Crypto Exchanges Face Action Over</div>

                <div className='my-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img alt="person" src="/images/person.png" className='w-7 h-7 rounded-full' />
                        <div className='text-text text-sm'>Darlene Robertson</div>
                    </div>

                    <div className='flex items-center gap-1'>
                        <MdOutlineAccessTimeFilled className='w-4 h-4 text-text' />
                        <div className='text-sm text-text'>5/27/15</div>
                    </div>
                </div>

                <div className='text-sm text-text'>Japan’s financial watchdog is reportedly planning to force improvements at a number of licensed cryptocurrency...</div>

                <div className='flex items-center gap-2 mt-3 cursor-pointer'>
                    <div>Read More</div>
                    <MdOutlineTrendingFlat />
                </div>
            </div>
        </div>
    </div>
  )
}

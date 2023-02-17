import React from 'react'
import { BtnForm } from '../Btn/Btn'

export default function Subscribe() {
  return (
    <div className='layoutPadding bg-primary py-[30px]'>
        <div className='w-full flex flex-col-reverse md:flex-row-reverse items-center gap-1 md:gap-10'>
            <div className='flex-1 flex gap-2 flex-col md:flex-row w-full'>
                <input className='md:flex-1 rounded-md py-2 md:py-0 px-2 md:h-auto outline-none' placeholder='Email Address' type={'text'} />
                <BtnForm title="Subscribe" action={() => console.log("Subscribe")} />
            </div>
            <div className='flex-1'>
                <h1 className='text-2xl text-[white] text-center md:text-left mb-3 md:mb-0'>Subscribe Newslatter & get KBZ Money Alerts</h1>
            </div>
        </div>
    </div>
  )
}

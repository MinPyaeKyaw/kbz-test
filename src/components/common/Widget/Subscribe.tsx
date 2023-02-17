import React from 'react'
import { BtnForm } from '../Btn/Btn'

export default function Subscribe() {
  return (
    <div className='relative mt-4 w-full min-h-[45vh] flex items-center rounded-md bg-primary px-3 overflow-hidden'>
      <div className='absolute z-10'>
        <div className='text-xl text-[white] text-center mb-2'>Subscribe to KBZ Money Alerts</div>
        <div className='flex-1 flex gap-2 flex-col'>
            <input className='md:flex-1 rounded-md py-2 px-2 md:h-auto outline-none' placeholder='Email Address' type={'text'} />
            <BtnForm title="Subscribe" action={() => console.log("Subscribe")} />
        </div>
      </div>

      <img src="/images/widgetSubscribe.png" alt="service" className='absolute bottom-0 right-0 w-full h-full z-0 object-cover' />
    </div>
  )
}

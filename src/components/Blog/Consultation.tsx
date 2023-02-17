import React from 'react'
import { MdOutlineTrendingFlat } from 'react-icons/md'
import { BtnSecondary } from '../common/Btn/Btn'

export default function Consultation() {
  return (
    <div className='w-full relative bg-[#F2FBFF] flex flex-col items-center justify-center py-14'>
      <div className='text-title font-bold text-2xl mb-5 text-center'>Have Questions or Need to Book a Consultation?</div>
    
      <BtnSecondary title="Contact Us Now" action={() => {console.log("Contact us")}} icon={<MdOutlineTrendingFlat />} />
    
      <img src="/images/consult.png" alt="service" className='absolute bottom-0 left-0 w-[8%] z-0' />
      <img src="/images/consult1.png" alt="service" className='absolute top-0 right-0 w-[8%] z-0' />
      <img src="/images/consult2.png" alt="service" className='absolute bottom-0 right-[20%] w-[4%] z-0' />
    </div>
  )
}

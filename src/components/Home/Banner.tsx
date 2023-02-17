import React from 'react'
import { MdOutlineTrendingFlat } from 'react-icons/md'
import { BtnSecondary } from '../common/Btn/Btn'

export default function Banner() {
  return (
    <div className='relative w-full h-auto py-10 md:py-0 md:h-[calc(100vh-65px)] layoutPadding flex items-center justify-center bg-gradient-to-r from-[#eaf9ff] to-[#cff2ff]'>
      <div className='w-full flex flex-col md:flex-row-reverse items-center gap-1 md:gap-10'>
        <div className='flex-1 hidden lg:block'>
            <img alt="current challenges" src="/images/banner.png" className='aspect-square w-[60%] md:w-[75%] lg:w-full z-0 object-contain' />
        </div>
        <div className='flex-1'>
            <h1 className='text-2xl text-title font-bold'><span className='text-primary'>KBZ Money</span> compass anti money laundering technology and services redefined</h1>

            <p className='mt-3 text-text'>KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership.</p>
        
            <div className='mt-5 flex'>
              <BtnSecondary title='Get Started' action={() => console.log('get started')} icon={<MdOutlineTrendingFlat />} />
            </div>
        </div>
      </div>

      <div className='layoutPadding hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 absolute bottom-[-15%]'>
        <div className='rounded-md bg-[white] shadow-lg flex flex-col items-start justify-center p-4'>
          <img alt="banner" src="/images/banner1.png" className='w-10 h-10 mb-3 aspect-square object-contain' />
        
          <h2 className='text-title font-bold'>AML Outsourcing</h2>

          <div className='text-text'>Compliance as a Service ™ or CAS delivers not just systems through its AML Compass...</div>
        </div>

        <div className='rounded-md bg-[white] shadow-lg flex flex-col items-start justify-center p-4'>
          <img alt="banner" src="/images/banner1.png" className='w-10 h-10 mb-3 aspect-square object-contain' />
        
          <h2 className='text-title font-bold'>AML Outsourcing</h2>

          <div className='text-text'>Compliance as a Service ™ or CAS delivers not just systems through its AML Compass...</div>
        </div>

        <div className='rounded-md bg-[white] shadow-lg flex flex-col items-start justify-center p-4'>
          <img alt="banner" src="/images/banner2.png" className='w-10 h-10 mb-3 aspect-square object-contain' />
        
          <h2 className='text-title font-bold'>Crypto Currencies</h2>

          <div className='text-text'>The Crypto currency market is one of the most exciting and rapidly developing...</div>
        </div>
      </div>
    </div>
  )
}

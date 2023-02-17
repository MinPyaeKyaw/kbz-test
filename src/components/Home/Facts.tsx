import React from 'react'

export default function Facts() {
  return (
    <div className='layoutPadding pt-[50px] grid md:hidden grid-cols-1 md:grid-cols-3 gap-4'>
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
  )
}

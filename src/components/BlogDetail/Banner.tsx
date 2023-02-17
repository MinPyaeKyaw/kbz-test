import React from 'react'

export default function Banner() {
  return (
    <div className='relative overflow-hidden w-full h-[40vh] bg-[#063A78] flex flex-col items-center justify-center'>
      <div className='text-2xl font-bold text-[white] text-center'>FinCEN Issues a Geographic Targeting...</div>
      <div className='text-sm text-[white]'><span className='text-[#c6c6c6]'>Home</span> {`>`} Blog</div>
    
      <img src="/images/blogBanner2.png" alt="service" className='absolute bottom-0 left-0 w-[100%] z-0' />
      <img src="/images/blogBanner.png" alt="service" className='absolute bottom-0 left-0 w-[30%] md:w-[10%] z-0' />
      <img src="/images/blogBanner1.png" alt="service" className='absolute bottom-[-20px] right-0 w-[30%] md:w-[7%] z-0' />
    </div>
  )
}

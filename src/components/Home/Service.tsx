import React from 'react'

export default function Service() {
  return (
    <div className='relative layoutPadding layoutVerticlePadding flex flex-col items-center bg-[#F2FBFF] mt-10'>
      <div className='text-2xl text-title mb-6 md:mb-10'>Our Services</div>
      <div className='text-text text-center px-0 md:px-[10%] mb-6 md:mb-10'>KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.</div>
    
      <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>

        <div className='transition ease-in-out cursor-pointer border-2 hover:border-primary border-[transparent] flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg py-10'>
          <img alt={'Consulting'} src={'/images/consulting.png'} className={'w-10 h-10 mb-4'} />
          <div className='text-text text-center'>Consulting</div>
        </div>

        <div className='transition ease-in-out cursor-pointer border-2 hover:border-[#00B9FF] border-[transparent] flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg py-10'>
          <img alt={'Licensing'} src={'/images/Licensing.png'} className={'w-10 h-10 mb-4'} />
          <div className='text-text text-center'>Licensing</div>
        </div>

        <div className='transition ease-in-out cursor-pointer border-2 hover:border-[#DD5BF2] border-[transparent] flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg py-10'>
          <img alt={'Training'} src={'/images/Training.png'} className={'w-10 h-10 mb-4'} />
          <div className='text-text text-center'>Training</div>
        </div>

        <div className='transition ease-in-out cursor-pointer border-2 hover:border-[#51D4A5] border-[transparent] flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg py-10'>
          <img alt={'Correspondent'} src={'/images/Correspondent.png'} className={'w-10 h-10 mb-4'} />
          <div className='text-text text-center'>Correspondent Account</div>
        </div>

        <div className='transition ease-in-out cursor-pointer border-2 hover:border-[#FFB547] border-[transparent] flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg py-10'>
          <img alt={'Independent'} src={'/images/Independent.png'} className={'w-10 h-10 mb-4'} />
          <div className='text-text text-center'>Independent AML/BSA Reviews</div>
        </div>

        <div className='transition ease-in-out cursor-pointer border-2 hover:border-secondary border-[transparent] flex flex-col items-center justify-center bg-[white] rounded-lg shadow-lg py-10'>
          <img alt={'Reviews'} src={'/images/Reviews.png'} className={'w-10 h-10 mb-4'} />
          <div className='text-text text-center'>Look Back Reviews</div>
        </div>

      </div>

      <img src="/images/service1.png" alt="service" className='absolute bottom-5 right-0 w-[7%] z-0' />
      <img src="/images/service2.png" alt="service" className='absolute top-5 right-0 w-[5%] z-0' />
      <img src="/images/service3.png" alt="service" className='absolute bottom-5 left-0 w-[10%] z-0' />
      <img src="/images/service4.png" alt="service" className='absolute top-5 left-0 w-[10%] z-0' />
    </div>
  )
}

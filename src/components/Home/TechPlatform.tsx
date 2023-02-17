import React from 'react'

export default function TechPlatform() {
  return (
    <div className='relative layoutPadding layoutMarginTop bg-primary py-10'>
        <div className='w-full flex flex-col md:flex-row-reverse items-center gap-1 md:gap-10'>
        <div className='flex-1'>
            <img alt="current challenges" src="/images/platform.png" className='aspect-square w-full object-contain' />
        </div>
        <div className='flex-1'>
            <h1 className='text-2xl text-[white]'>AML Compass Technology Platform</h1>

            <p className='mt-3 text-[white]'>Our proprietary AML Compass Suite is a fully automated compliance solution for banks and non-bank financial institutions including hedge funds, broker dealers, insurance companies, and domestic and international MSBs that have regulatory reporting and control…</p>
            </div>
        </div>

        <img src="/images/platformbg.png" alt="service" className='absolute hidden md:block top-[-50px] left-0 w-[20%] z-0' />
    </div>
  )
}

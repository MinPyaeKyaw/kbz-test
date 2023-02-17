import React from 'react'

export default function OurSolutions() {
  return (
    <div className='relative layoutPadding bg-primary py-10 md:py-0 mt-10'>
        <div className='w-full flex flex-col md:flex-row-reverse items-center gap-1 md:gap-10'>
          <div className='flex-1'>
            <img alt="current challenges" src="/images/ourSolution.png" className='aspect-square w-full object-contain' />
          </div>
          <div className='flex-1'>
            <h1 className='text-2xl text-[white]'>Our Solutions</h1>

            <p className='mt-3 text-[white]'>KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.</p>

            <p className='mt-3 text-[white]'>KBZ Money offers a proven skill and delivers best-in-class AML/BSA consulting and automated AML/BSA and OFAC compliance solutions to financial institutions the world over.</p>

            <p className='mt-3 text-[white]'>Our deployment strategies are tailored to meet the individual needs of our clients in the context of a risk-laden world.  Our approach is to provide the most protection in the most intelligent, effective and cost-efficient manner.</p>
          </div>
        </div>

      <img src="/images/solutionbg2.png" alt="service" className='absolute bottom-5 right-0 w-[7%] z-0' />
      <img src="/images/solutionbg3.png" alt="service" className='absolute top-5 right-0 w-[5%] z-0' />
      <img src="/images/solutionbg1.png" alt="service" className='absolute bottom-5 left-3 w-[10%] z-0' />
      <img src="/images/solutionbg.png" alt="service" className='absolute top-5 left-5 w-[6%] z-0' />
    </div>
  )
}

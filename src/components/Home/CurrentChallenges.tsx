import React from 'react'

export default function CurrentChallenges() {
  return (
    <div className='pt-0 md:pt-[100px] layoutPadding'>
      <div className='w-full flex flex-col md:flex-row items-center gap-1 md:gap-10'>
        <div className='flex-1'>
            <img alt="current challenges" src="/images/currentChallenges.png" className='aspect-square w-full object-contain' />
        </div>
        <div className='flex-1'>
            <h1 className='text-2xl text-title'>Current Challenges</h1>

            <p className='mt-3 text-text'>Legal requirements and recent developments compel Financial Institutions to adopt comprehensive and effective risk-based controls to prevent misuse by money launderers or purveyors of terrorist acts.</p>
        
            <p className='mt-3 text-text'>Anti Money Laundering, Terrorism Financing, Fraud, and related regulations continue to increase compliance operating costs for companies in the financial services space.</p>
        
            <p className='mt-3 text-text'>Untested, rubber stamp solutions adopted to appease regulators will not do in today’s environment.</p>
        </div>
      </div>
    </div>
  )
}

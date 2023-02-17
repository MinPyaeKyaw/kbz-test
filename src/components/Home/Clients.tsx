import React from 'react'
import { lands } from '../../utils/lands'

export default function Clients() {
  return (
    <div className='layoutPadding layoutMarginTop flex flex-col items-center'>
      <div className='text-2xl text-title mb-6 md:mb-10'>Our Clients and Footprint</div>
      <div className='text-text text-center px-0 md:px-[10%] mb-6 md:mb-10'>Clients include Banks, Non-Banking Financial Institutions, Non-Financial Institutions, Insurance Companies, Broker Dealers, Payment Processors, Check Cashers, Digital Payments Companies, Money Transmitters, and Crypto Currency Solution Companies including Exchanges and Market Places.
    </div>
    
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
        {/* {lands.map(land => {
          const bg = `bg-[${land.bg}]`;
            return(
              <div key={land.id}>
                <div className='flex flex-col items-start justify-start bg-[white] rounded-lg shadow-lg'>
                    <div className={`w-full ${bg} p-4 rounded-t-md flex items-center justify-center`}>
                        <img alt={land.name} src={land.image} className={'w-[80%] aspect-square object-contain mb-4'} />
                    </div>

                    <div className='text-title text-xl w-full px-4 pt-4 font-bold'>
                      <div className='border-b-[1px] border-[#b9b9b9] pb-2'>{land.name}</div>
                    </div>

                    <div className='p-4'>
                        <div>
                            {land.countries?.map(country => {
                                return(<div className='text-text mb-1' key={country}>{country}</div>)
                            })}
                        </div>
                    </div>
                </div>
              </div>
            )
        })} */}

        <div>
          <div className='flex flex-col items-start justify-start bg-[white] rounded-lg shadow-lg'>
            <div className={`w-full bg-[#FFF4E3] p-4 rounded-t-md flex items-center justify-center`}>
              <img alt={'land'} src={'/images/land.png'} className={'w-[80%] aspect-square object-contain mb-4'} />
            </div>

            <div className='text-title text-xl w-full px-4 pt-4 font-bold'>
              <div className='border-b-[1px] border-[#b9b9b9] pb-2'>North America & Caribbean</div>
            </div>

            <div className='p-4'>
              <div>
                {lands[0].countries?.map(country => {
                  return(<div className='text-text mb-1' key={country}>{country}</div>)
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-start justify-start bg-[white] rounded-lg shadow-lg'>
            <div className={`w-full bg-[#F2FBFF] p-4 rounded-t-md flex items-center justify-center`}>
              <img alt={'land'} src={'/images/land1.png'} className={'w-[80%] aspect-square object-contain mb-4'} />
            </div>

            <div className='text-title text-xl w-full px-4 pt-4 font-bold'>
              <div className='border-b-[1px] border-[#b9b9b9] pb-2'>Central & South America</div>
            </div>

            <div className='p-4'>
              <div>
                {lands[1].countries?.map(country => {
                  return(<div className='text-text mb-1' key={country}>{country}</div>)
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-start justify-start bg-[white] rounded-lg shadow-lg'>
            <div className={`w-full bg-[#FCEBFF] p-4 rounded-t-md flex items-center justify-center`}>
              <img alt={'land'} src={'/images/land2.png'} className={'w-[80%] aspect-square object-contain mb-4'} />
            </div>

            <div className='text-title text-xl w-full px-4 pt-4 font-bold'>
              <div className='border-b-[1px] border-[#b9b9b9] pb-2'>Europe & Africa</div>
            </div>

            <div className='p-4'>
              <div>
                {lands[2].countries?.map(country => {
                  return(<div className='text-text mb-1' key={country}>{country}</div>)
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-start justify-start bg-[white] rounded-lg shadow-lg'>
            <div className={`w-full bg-[#E1F7EF] p-4 rounded-t-md flex items-center justify-center`}>
              <img alt={'land'} src={'/images/land3.png'} className={'w-[80%] aspect-square object-contain mb-4'} />
            </div>

            <div className='text-title text-xl w-full px-4 pt-4 font-bold'>
              <div className='border-b-[1px] border-[#b9b9b9] pb-2'>Middle East & Far East</div>
            </div>

            <div className='p-4'>
              <div>
                {lands[3].countries?.map(country => {
                  return(<div className='text-text mb-1' key={country}>{country}</div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

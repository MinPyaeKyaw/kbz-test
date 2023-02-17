import React from 'react'
import { MdCall, MdOutlineFacebook, MdRoom, MdSend } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { aboutusLinks, quicklinks } from '../../../utils/quicklinks'

export default function Footer() {
  return (
    <div className='layoutPadding bg-[#063A78] pt-[20px] relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-10'>
            <div>
                <div>
                    <img src='/images/logoWhite.png' alt="KBZ logo" className='h-12' />
                </div>

                <div className='flex gap-1 mt-4'>
                    <MdRoom className='w-7 h-7 text-[#FFB547]' />
                    <div className='text-[white] text-sm'>1250 Capital of Texas Hwy. South Building 3, Suite 400 Austin, TX 78746</div>
                </div>

                <div className='flex gap-1 mt-4'>
                    <MdSend className='w-5 h-5 text-[#FFB547]' />
                    <div className='text-[white] text-sm'>Support: admin@kbzmoney.com</div>
                </div>

                <div className='flex gap-1 mt-4'>
                    <MdCall className='w-5 h-5 text-[#FFB547]' />
                    <div className='text-[white] text-sm'>Hotline: +959 7980 65880</div>
                </div>
            </div>

            <div className='ml-4 mt-5 md:mt-0'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div>
                        <div className='text-[white] mb-5'>Quick Links</div>

                        <div className='grid grid-cols-2 grid-rows-5 gap-3'>
                            {quicklinks.map(link => {
                                return(<Link to={link.route} key={link.id} className='transition ease-in-out text-[white] hover:text-[#FFB547] text-sm'>{link.name}</Link>)
                            })}
                        </div>
                    </div>

                    <div className='mt-5 md:mt-0'>
                        <div className='text-[white] mb-5'>About us</div>

                        <div className='grid grid-cols-1 grid-rows-5 gap-3'>
                            {aboutusLinks.map(link => {
                                return(<Link to={link.route} key={link.id} className='transition ease-in-out text-[white] hover:text-[#FFB547] text-sm'>{link.name}</Link>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-t-[1px] border-t-[#ffffff] py-5 flex flex-col md:flex-row justify-between items-center mt-5'>
            <div className='text-[white] text-sm mb-3 md:mb-0'>Copyright © 2022 <span className='text-[#FFB547]'>KBZ Money</span>. All Rights Reserved.</div>

            <div className='flex gap-4'>
                <Link to="/" className='cursor-pointer rounded-full border-[1px] border-[white] p-1 group transition ease-in-out hover:bg-[#FFB547]'>
                    <MdOutlineFacebook className='w-4 h-4 text-[white] group-hover:text-[white]' />
                </Link>

                <Link to="/" className='cursor-pointer rounded-full border-[1px] border-[white] p-1 group transition ease-in-out hover:bg-[#FFB547]'>
                    <MdOutlineFacebook className='w-4 h-4 text-[white] group-hover:text-[white]' />
                </Link>

                <Link to="/" className='cursor-pointer rounded-full border-[1px] border-[white] p-1 group transition ease-in-out hover:bg-[#FFB547]'>
                    <MdOutlineFacebook className='w-4 h-4 text-[white] group-hover:text-[white]' />
                </Link>

                <Link to="/" className='cursor-pointer rounded-full border-[1px] border-[white] p-1 group transition ease-in-out hover:bg-[#FFB547]'>
                    <MdOutlineFacebook className='w-4 h-4 text-[white] group-hover:text-[white]' />
                </Link>
            </div>
        </div>

        <img src="/images/footerbg.png" alt="service" className='absolute hidden md:block bottom-0 left-0 w-full z-0' />
    </div>
  )
}

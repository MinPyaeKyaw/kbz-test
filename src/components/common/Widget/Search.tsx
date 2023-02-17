import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search() {
  return (
    <div className='border-[1px] border-[#E6EDF3] w-full relative bg-[#fcfdff] rounded-md flex items-center'>
      <MdSearch className='w-5 h-5 text-text mx-2' />
      <input type={'text'} placeholder="Search" className='bg-[#fcfdff] py-2 outline-none flex-1' />
    </div>
  )
}

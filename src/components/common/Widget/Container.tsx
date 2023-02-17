import React from 'react'
import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

export default function Container({title, children}:Props) {
  return (
    <div className='border-[1px] border-[#E6EDF3] w-full relative bg-[white] rounded-md'>
      <div className='bg-[#fcfdff] py-2 px-2 text-title border-b-[1px] border-b-[#E6EDF3]'>{title}</div>
    
      {children}
    </div>
  )
}

import React from 'react'

import { BtnInterface } from '../../../utils/interfaces'

export function BtnPrimary({title, action, icon}:BtnInterface) {
  return (
    <div onClick={action} className='px-6 py-2 bg-primary cursor-pointer text-[white] rounded-full flex items-center justify-center gap-2'>
      {title} {icon && icon}
    </div>
  )
}

export function BtnSecondary({title, action, icon}:BtnInterface) {
    return (
      <div onClick={action} className='px-6 py-2 bg-secondary cursor-pointer text-[white] rounded-full flex items-center justify-center gap-2'>
        {title} {icon && icon}
      </div>
    )
}

export function BtnWhite({title, action, icon}:BtnInterface) {
    return (
      <div onClick={action} className='px-6 py-2 bg-[white] cursor-pointer text-text rounded-full flex items-center justify-center gap-2'>
        {title} {icon && icon}
      </div>
    )
}

export function BtnForm({title, action}:BtnInterface) {
    return (
      <div onClick={action} className='px-6 py-2 bg-[white] cursor-pointer text-text rounded-md flex items-center justify-center gap-2'>
        {title}
      </div>
    )
}
import React from 'react'

interface Props {
    title: string;
    image: string;
    time: string;
}

export default function HorizontalCard({title, image, time}:Props) {
  return (
    <div className='p-2 flex gap-2'>
      <img alt={title} src={image} className={'rounded-sm w-[20%] aspect-square object-cover'} />

      <div>
        <div className='text-title text-sm'>{title}</div>
        <div className='text-xs text-text'>{time}</div>
      </div>
    </div>
  )
}

import React from 'react'
import { TagInterface } from '../../../utils/interfaces';
import Container from './Container'

interface Props {
  tags: TagInterface[];
}

export default function Tags({tags}:Props) {
  return (
    <div className='mt-4'>
        <Container title="Tags">
            <div className='p-2 flex flex-wrap gap-2'>
              {tags.map(tag => {
                return(<div key={tag._id} className='transition ease-in-out border-[1px] border-[#E6EDF3] bg-[#fcfdff] hover:bg-[#efeff0] rounded-sm py-1 px-2 text-xs cursor-pointer'>{tag.name}</div>)
              })}
            </div>
        </Container>
    </div>
  )
}

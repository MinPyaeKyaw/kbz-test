import React from 'react'
import Container from './Container'

export default function Tags() {
  return (
    <div className='mt-4'>
        <Container title="Tags">
            <div className='p-2 flex flex-wrap gap-2'>
                <div className='transition ease-in-out border-[1px] border-[#E6EDF3] bg-[#fcfdff] hover:bg-[#efeff0] rounded-sm py-1 px-2 text-xs cursor-pointer'>Tag Name</div>
            </div>
        </Container>
    </div>
  )
}

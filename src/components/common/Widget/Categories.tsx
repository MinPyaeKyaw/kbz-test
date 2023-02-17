import React from 'react'
import { CategoryInterface } from '../../../utils/interfaces';
import Container from './Container'

interface Props {
  categories: CategoryInterface[];
}

export default function Categories({categories}:Props) {
  return (
    <div className='mt-4'>
        <Container title="Categories">
            <div>
                {categories.map(category => {
                    return(
                        <div key={category._id} className='flex justify-between text-sm p-2'>
                            <div>{category.name}</div>
                            <div>35</div>
                        </div>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}

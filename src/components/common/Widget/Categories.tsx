import React from 'react'
import Container from './Container'

export default function Categories() {
  return (
    <div className='mt-4'>
        <Container title="Categories">
            <div>
                <div className='flex justify-between text-sm p-2'>
                    <div>Alerts</div>
                    <div>35</div>
                </div>

                <div className='flex justify-between text-sm p-2'>
                    <div>Company News</div>
                    <div>28</div>
                </div>
            </div>
        </Container>
    </div>
  )
}

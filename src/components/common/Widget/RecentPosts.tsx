import React from 'react'
import HorizontalCard from '../Card/HorizontalCard'
import Container from './Container'

export default function RecentPosts() {
  return (
    <div className='mt-4'>
        <Container title="Recent Posts">
            <div>
                <HorizontalCard title="Major Crypto Exchanges Face Action Over" time="8 hours ago" image="/images/alert.png" />
                <HorizontalCard title="Major Crypto Exchanges Face Action Over" time="8 hours ago" image="/images/alert.png" />
                <HorizontalCard title="Major Crypto Exchanges Face Action Over" time="8 hours ago" image="/images/alert.png" />
                <HorizontalCard title="Major Crypto Exchanges Face Action Over" time="8 hours ago" image="/images/alert.png" />
            </div>
        </Container>
    </div>
  )
}

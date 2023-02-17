import React from 'react'
import Categories from './Categories'
import RecentPosts from './RecentPosts'
import Search from './Search'
import Subscribe from './Subscribe'
import Tags from './Tags'

export default function Widget() {
  return (
    <div className='hidden md:block'>
      <Search />

      <Categories />

      <RecentPosts />

      <Tags />

      <Subscribe />
    </div>
  )
}

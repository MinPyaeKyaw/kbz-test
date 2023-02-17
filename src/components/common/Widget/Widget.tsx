import React from 'react'
import { BlogInterface, CategoryInterface, TagInterface } from '../../../utils/interfaces'
import Categories from './Categories'
import RecentPosts from './RecentPosts'
import Search from './Search'
import Subscribe from './Subscribe'
import Tags from './Tags'

interface Props {
  latestsBlogs: BlogInterface[];
  tags: TagInterface[];
  categories: CategoryInterface[];
}

export default function Widget({latestsBlogs, tags, categories}:Props) {
  return (
    <div className='hidden md:block'>
      <Search />

      <Categories categories={categories} />

      <RecentPosts latestsBlogs={latestsBlogs} />

      <Tags tags={tags} />

      <Subscribe />
    </div>
  )
}

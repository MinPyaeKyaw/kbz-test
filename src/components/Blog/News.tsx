import React from 'react'
import { BtnPrimary } from '../common/Btn/Btn'
import Card from '../common/Card/Card'
import Widget from '../common/Widget/Widget'

import { MdOutlineTrendingFlat } from "react-icons/md";
import { BlogInterface, CategoryInterface, TagInterface } from '../../utils/interfaces';

interface Props {
  blogs: BlogInterface[];
  latestsBlogs: BlogInterface[];
  tags: TagInterface[];
  categories: CategoryInterface[];
  handleLoadMore: () => void;
}

export default function News({blogs, latestsBlogs, tags, categories, handleLoadMore}:Props) {
  return (
    <div className='w-full layoutPadding layoutMarginTop layoutMarginBottom flex flex-col items-center justify-center'>
      <div className='text-title text-2xl font-bold layoutMarginBottom'>Latest News</div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div className='md:col-span-2 col-span-1'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {blogs.map(blog => {
              return(<div key={blog._id} className='mb-5'><Card blog={blog} /></div>)
            })}

            <div className='md:col-span-2 col-span-1 flex items-start justify-center mt-4'>
              <BtnPrimary title="Load More" action={handleLoadMore} icon={<MdOutlineTrendingFlat />} />
            </div>
          </div>
        </div>
        <Widget latestsBlogs={latestsBlogs} tags={tags} categories={categories} />
      </div>
    </div>
  )
}

import { MdDateRange, MdOutlineAccessTimeFilled } from 'react-icons/md'
import { HiEye } from "react-icons/hi";
import Widget from '../common/Widget/Widget'

import { BlogInterface, CategoryInterface, TagInterface } from '../../utils/interfaces';

import moment from 'moment';

interface Props {
  blog: BlogInterface;
  latestsBlogs: BlogInterface[];
  tags: TagInterface[];
  categories: CategoryInterface[];
}

export default function Blog({blog, latestsBlogs, tags, categories}:Props) {
  return (
    <div className='w-full layoutPadding layoutMarginTop layoutMarginBottom flex flex-col items-center justify-center'>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='md:col-span-2 col-span-1'>
          <div className='text-title font-bold text-2xl'>{blog.title}</div>
        
          <div className='my-3 flex flex-col md:flex-row items-start md:items-center justify-between'>
            <div className='flex items-center gap-2 md:mb-0 mb-4'>
              <img alt="person" src="/images/person.png" className='w-7 h-7 rounded-full' />
              <div className='text-text text-sm'>Darlene Robertson</div>
            </div>

            <div className='flex gap-5 items-center'>
                <div className='flex items-center gap-1'>
                    <MdDateRange className='w-4 h-4 text-text' />
                    <div className='text-sm text-text'>{moment(blog.createdAt).format('l')}</div>
                </div>

                <div className='flex items-center gap-1'>
                    <HiEye className='w-4 h-4 text-text' />
                    <div className='text-sm text-text'>21k viewers</div>
                </div>

                <div className='flex items-center gap-1'>
                    <MdOutlineAccessTimeFilled className='w-4 h-4 text-text' />
                    <div className='text-sm text-text'>4 mins read</div>
                </div>
            </div>
          </div>

          <img alt="blog" src={blog.photo} className='my-5 rounded-lg w-full' />

          <p>{blog.body}</p>
        </div>

        <Widget latestsBlogs={latestsBlogs} tags={tags} categories={categories} />
      </div>
    </div>
  )
}

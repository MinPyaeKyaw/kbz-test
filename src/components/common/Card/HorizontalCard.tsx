import moment from 'moment';
import { Link } from 'react-router-dom';
import { BlogInterface } from '../../../utils/interfaces';

interface Props {
  blog: BlogInterface;
}

export default function HorizontalCard({blog}:Props) {
  return (
    <Link to={`/blogs/${blog._id}`} className='p-2 flex gap-2'>
      <img alt={blog.title} src={blog.photo} className={'rounded-sm w-[20%] aspect-square object-cover'} />

      <div>
        <div className='text-title text-sm'>{blog.title.length > 50 ? blog.title.substr(0, 50)+"..." : blog.title}</div>
        <div className='text-xs text-text'>{moment(blog.createdAt).startOf('day').fromNow()}</div>
      </div>
    </Link>
  )
}

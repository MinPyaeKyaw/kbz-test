import { useNavigate } from "react-router-dom";

import { MdOutlineTrendingFlat, MdOutlineAccessTimeFilled } from "react-icons/md";
import { BlogInterface } from '../../../utils/interfaces';

interface Props {
    blog: BlogInterface;
}

export default function Card({blog}:Props) {

  const navigate = useNavigate();

  return (
    <div className='w-full px-3'>
        <div className='shadow-lg rounded-b-lg'>
            <div className='w-full h-[200px] rounded-t-lg'>
                <img alt="Alert" src={blog.photo} className='w-full h-full rounded-t-lg object-cover aspect-square' />
            </div>

            <div className='p-4'>
                <div className='text-title text-xl'>{blog.title.length > 40 ? blog.title.substr(0, 40)+"..." : blog.title}</div>

                <div className='my-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img alt="person" src={"/images/person.png"} className='w-7 h-7 rounded-full' />
                        <div className='text-text text-sm'>Darlene Robertson</div>
                    </div>

                    <div className='flex items-center gap-1'>
                        <MdOutlineAccessTimeFilled className='w-4 h-4 text-text' />
                        <div className='text-sm text-text'>5/27/15</div>
                    </div>
                </div>

                <div className='text-sm text-text'>{blog.body.length > 100 ? blog.body.substr(0, 100)+"..." : blog.body}</div>

                <div onClick={() => navigate(`/blogs/${blog._id}`)} className='flex items-center gap-2 mt-3 cursor-pointer'>
                    <div>Read More</div>
                    <MdOutlineTrendingFlat />
                </div>
            </div>
        </div>
    </div>
  )
}

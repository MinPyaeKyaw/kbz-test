import { BlogInterface } from '../../utils/interfaces'
import Swiper from '../common/Swiper/Swiper'

interface Props {
  blogs: BlogInterface[]
}

export default function RelatedCourse({blogs}:Props) {
  return (
    <div className='layoutPadding layoutMarginBottom layoutMarginTop flex flex-col items-center'>
      <div className='text-2xl text-title mb-6 md:mb-10'>Related Course</div>
    
      <div className='w-full mb-4'>
        <Swiper blogs={blogs} />
      </div>
    </div>
  )
}

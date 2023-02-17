import Swiper from '../common/Swiper/Swiper'

export default function RelatedCourse() {
  return (
    <div className='layoutPadding layoutMarginBottom layoutMarginTop flex flex-col items-center'>
      <div className='text-2xl text-title mb-6 md:mb-10'>Related Course</div>
    
      <div className='w-full mb-4'>
        <Swiper />
      </div>
    </div>
  )
}

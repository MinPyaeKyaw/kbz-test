import { MdOutlineTrendingFlat } from 'react-icons/md'
import {BtnSecondary} from '../common/Btn/Btn'
import Swiper from '../common/Swiper/Swiper'


export default function MoneyAlert() {
  return (
    <div className='layoutPadding layoutMarginBottom layoutMarginTop flex flex-col items-center'>
      <div className='text-2xl text-title mb-6 md:mb-10'>KBZ Money Alert</div>
    
      <div className='w-full mb-4'>
        <Swiper />
      </div>

      <BtnSecondary title="Load More" action={() => console.log("Load More")} icon={<MdOutlineTrendingFlat />} />
    </div>
  )
}

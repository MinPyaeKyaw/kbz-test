import React, {useState} from 'react'

import { motion } from 'framer-motion';

import { Link } from "react-router-dom";
import { navigation } from '../../../utils/navigation';

import useCurrentPath from '../../../hooks/useCurrentPath';

import { MdSearch, MdClose } from "react-icons/md";

export default function DesktopNav() {

  const {isCurrentPath} = useCurrentPath();

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleSearchbar = ():void => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <nav className='flex gap-4 items-center justify-between w-full h-[65px] bg-white shadow-lg shadow-gray-200 layoutPadding'>
      <div className='flex-1 items-center h-full flex'>
        <Link to={'/'}>
            <img alt="KBZ Bank" src="/images/logo.png" className='h-[45px] object-contain' />
        </Link>

        {navigation.map(nav => {
            let flag = isCurrentPath(nav.route);
            return(<Link className={`flex items-center ml-[5%] h-full border-b-2 ${flag ? 'border-primary text-primary' : 'border-[transparent]'}`} key={nav.id} to={nav.route}>{nav.name}</Link>)
        })}
      </div>

      <div className='flex-1 relative flex items-center justify-end'>
        {isSearchOpen && 
        <motion.div 
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        className='flex w-full items-center justify-end absolute right-0 z-10'>
            <input type='text' className='flex-1 border-gray-400 border-[1px] rounded-sm mr-3 px-2 outline-none h-8' />
            <MdClose onClick={toggleSearchbar} className='w-6 h-6 cursor-pointer' />
        </motion.div>}

        <motion.div 
        onClick={toggleSearchbar}
        initial={{ opacity: isSearchOpen ? 1 : 0 }}
        animate={{ opacity: !isSearchOpen ? 1 : 0 }}>
            <MdSearch className='w-6 h-6 cursor-pointer' />
        </motion.div>
      </div> 
    </nav>
  )
}

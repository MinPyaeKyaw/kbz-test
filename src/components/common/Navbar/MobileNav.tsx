import React, {useState} from 'react'

import { motion } from 'framer-motion';

import { Link } from "react-router-dom";
import { navigation } from '../../../utils/navigation';

import { MdSearch, MdClose, MdSegment } from "react-icons/md";

export default function MobileNav() {

    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  
    const toggleSearchbar = ():void => {
      setIsSearchOpen(!isSearchOpen);
    }

    const toggleMobileNav = ():void => {  
      setIsNavOpen(!isNavOpen)
      if(isNavOpen) {
        document.body.style.overflow = "none"
      }else {
        document.body.style.overflow = "initial"
      }
    }

    const navigationListVariants = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
    };

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(0px at 0px 0px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

    return (
        <>
            <motion.div 
            initial={false}
            animate={isNavOpen ? "open" : "closed"}>
                <motion.div variants={sidebar} className='w-full h-[100vh] absolute top-0 left-0 bg-gradient-to-r from-[#00B9FF] to-[#5C80FF] z-50 flex flex-col items-center justify-center'>
                    
                    <MdClose onClick={toggleMobileNav} className='absolute top-5 right-5 w-6 h-6 cursor-pointer text-[white]' />
                    
                    {navigation.map(nav => {
                        return(
                        <motion.div 
                        key={nav.id} 
                        variants={navigationListVariants}
                        className="text-2xl mb-5 text-[white]">
                            <Link to={nav.route}>
                            {nav.name}
                            </Link>
                        </motion.div>)
                    })}
                </motion.div>
            </motion.div>

            <nav className='flex gap-4 items-center justify-between w-full h-[65px] bg-[white] shadow-lg shadow-gray-200 layoutPadding'>
                <div className='relative w-full flex-1'>
                    {isSearchOpen ? 
                        <motion.div 
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className='w-full'>
                            <input type='text' className='w-full border-gray-400 border-[1px] rounded-sm px-2 outline-none h-8' />
                        </motion.div>
                        :
                        <div className='flex-1 items-center h-full flex'>
                            <Link to={'/'}>
                                <img alt="KBZ Bank" src="/images/logo.png" className='h-[40px] object-contain' />
                            </Link>
                        </div>
                    }
                </div>

                <div className='flex items-center justify-end'>
                    <div 
                    onClick={toggleSearchbar}>
                        {isSearchOpen ? <MdClose className='w-6 h-6 cursor-pointer' /> : <MdSearch className='w-6 h-6 cursor-pointer' />}
                    </div>

                    <div className='ml-4' onClick={toggleMobileNav}>
                        <MdSegment className='w-6 h-6 cursor-pointer' />
                    </div>
                </div> 
            </nav>
        </>
    )
}

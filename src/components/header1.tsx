"use client"
import React from 'react'
import img1 from '../../public/images/Mountain of Fire and Miracles Ministry Logo PNG Vector (SVG) Free Download.jpg';
import Image from 'next/image';
import { Menu, useNavstate } from '@/stores/navStore';
import { FaChevronDown } from 'react-icons/fa'
import { HiMenu ,HiX } from 'react-icons/hi'
import Link from 'next/link';



const Header1 = () => {
const {menu,isOpen,handleOpen}= useNavstate()
  return (
    <header className='fixed top-0 left-0 w-full min-h-[10vh]  z-[99] text-white ' >
        <div className="header-content relative  max-w-[1200px] mx-auto min-h-[10vh] flex justify-between items-center px-[20px] sm:px-0 ">
            {/* logo */}
            <div className="text-[15px] leading-[20px] font-bold flex items-center gap-[10px]">
            <div className="img w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image src={img1} alt="Mfm Ijaiye Mega Region IV Logo" />
            </div>
            <div className="logo-write-up hidden sm:flex flex-col items-center text-white">
                <span>Mfm Ijaiye</span>
                <span>Mega Region IV</span>
            </div>
            </div>
            {/* desktop nav */}
            <nav className='hidden sm:block ' >
                <ul className='flex gap-[30px]  ' >
                    {
                        menu.map((obj:Menu,index)=>{
                            return(
                                <>
                                    <li key={index} > <Link href={''} className='flex items-center gap-[5px] ' >
                                    {obj.name}
                                        {obj.submenu&&<FaChevronDown/>}
                                    </Link> </li>
                                </>
                            )
                        })
                    }
                   
                </ul>
            </nav>
            {/* hamburger menu */}
            <div
            onClick={handleOpen}
            className="sm:hidden text-[black] text-2xl cursor-pointer"
            aria-label="Toggle menu"
            >
                <HiMenu/>
            </div>
            {/* mobile nav */}
            <nav className={`sm:hidden border overflow-hidden ${isOpen?'w-[50%]':'w-[0%]'}  transition-all duration-1000 h-[100vh] bg-[#eee] absolute right-0 top-0 z-[50]`} >
                <div 
                onClick={handleOpen}
                className="close flex justify-center ">
                    <div className="text-black">
                        <HiX/>
                    </div>
                </div>
                <ul>
                    mobile
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header1
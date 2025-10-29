
"use client"

import React, { useEffect, useState } from 'react'
import { NavUrl, useNavStore } from '../stores/navstore';
import Link from 'next/link';
import { Home } from 'lucide-react';
// import { li, ul } from 'framer-motion/client';

const Header = () => {

    const{scrolled,setScrolled,items,toggle,isOpen,dropdown,isOpenDropdown}= useNavStore();

    useEffect(() => { 
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[setScrolled])

  return (
    <header className='fixed top-0 w-full text-white z-99 ' >
        <div className={`container relative  mx-auto flex justify-between items-center py-4 px-6 transition-all duration-300 ${scrolled ? ' bg-purple-600  shadow-md' : 'bg-transparent'}`}>
            <div className="logo text-xl md:2xl font-bold">Church Logo</div>
            <nav className='desktop hidden md:block   '  >
                <ul className="flex space-x-4 text-white ">
                   {
                    items.map((item: NavUrl) => (
                        <li key={item.name} className="relative group/menu ">
                            <Link href={item.url ? item.url : '#'} className="text-white hover:text-purple-400 font-bold ">{item.name}</Link>
                            {item.submenu && (

                                <ul className="ml-4 absolute top-full left-0 border cursor scale-0 px-[15px] py-2.5 group-hover/menu:scale-100 bg-white flex flex-col gap-2.5 rounded-lg  text-gray-400 " >
                                    {item.submenu.map((subitem) => (
                                        <li className='group/submenu relative' key={subitem.name}>
                                            <Link href={subitem.url ? subitem.url : '#'} className="text-gray-400 text-sm hover:text-purple-600 hover:font-bold">{subitem.name}</Link>
                                            {/* nexted */}
                                            {
                                                subitem.submenu &&(
                                                    <ul className='ml-4 absolute top-0 right-[-200px] border cursor scale-0 px-[15px] py-2.5 group-hover/submenu:scale-100 bg-white flex flex-col gap-2.5 rounded-lg  text-gray-400 w-[200px] '>
                                                        {
                                                            subitem.submenu.map((anothersub)=>{
                                                                return(
                                                                    <li key={anothersub.name} >
                                                                        <Link href={anothersub.url?anothersub.url:'#'}
                                                                        className="text-gray-400 text-sm  hover:text-purple-600 hover:font-bold "
                                                                        >{anothersub.name}</Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                   ))}
                </ul>
            </nav>


            {/* mobile */}
            <nav onClick={toggle} className={`mobile transition-all duration-500 ease-linear md:hidden absolute top-0  right-0 border  ${isOpen?'w-screen bg-[rgba(0,0,0,0.67)]  ':'w-0 overflow-hidden bg-[rgba(0,0,0,0)] '}  h-screen visible flex justify-end  `}  >
                <ul onClick={toggle} className={` transition-all duration-1000 ease-linear flex flex-col space-y-4 border bg-purple-500  ${isOpen?'w-[50vw] bg-amber-400 ':'w-0 overflow-hidden '}   w-[50vw] pl-[5px] pt-5  `}>
                   {
                    items.map((item: NavUrl) => (
                        <li onClick={ item.submenu? (e)=>{dropdown(e)}:()=>{console.log('nothing')}}  key={item.name} className={` transition-all duration-1000 ease-linear ${item.submenu?'border   ':''} ${isOpenDropdown?' h-[200px]  ':' h-[30px] overflow-hidden '} `}>
                            <Link onClick={item.submenu? ()=>{}:toggle}  href={item.url ? item.url : '#'} className=" hover:text-gray-300 text-white ">{item.name}</Link>
                            {item.submenu && (

                                <ul className="ml-4  cursor  px-[15px] py-2.5   " >
                                    {item.submenu.map((subitem) => (
                                        <li className='' key={subitem.name}>
                                            <Link href={subitem.url ? subitem.url : '#'} className="text-white hover:text-gray-300  ">{subitem.name}</Link>
                                            {subitem.submenu && (
                                                <ul className="ml-4  cursor  px-[15px] py-2.5   " >
                                                    {subitem.submenu.map((anothersub) => (
                                                        <li key={anothersub.name}>
                                                            <Link href={anothersub.url ? anothersub.url : '#'}
                                                                className="text-black hover:text-gray-300  ">{anothersub.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                   ))}
                </ul>
            </nav>
            <Home onClick={toggle} className="w-6 h-6 text-white-600 md:hidden " />
        </div>
    </header>
  )
}

export default Header
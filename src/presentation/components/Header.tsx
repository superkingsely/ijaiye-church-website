"use client"

import React, { useEffect, useState } from 'react'
import { NavUrl, useNavStore } from '../stores/navstore';
import Link from 'next/link';

const Header = () => {

    const{scrolled,setScrolled,items}= useNavStore();

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
    <header className='fixed top-0 w-full ' >
        <div className={`container  border mx-auto flex justify-between items-center py-4 px-6 transition-all duration-300 ${scrolled ? ' bg-pink-600  shadow-md' : 'bg-transparent'}`}>
            <div className="logo text-2xl font-bold">Church Logo</div>
            <nav>
                <ul className="flex space-x-4">
                   {
                    items.map((item: NavUrl) => (
                        <li key={item.name} className="relative group ">
                            <Link href={item.url ? item.url : '#'} className="text-black hover:text-gray-300">{item.name}</Link>
                            {item.submenu && (

                                <ul className="ml-4 absolute top-full left-0 border cursor scale-0 px-[15px] py-[10px] group-hover:scale-100 " >
                                    {item.submenu.map((subitem) => (
                                        <li key={subitem.name}>
                                            <Link href={subitem.url ? subitem.url : '#'} className="text-black hover:text-gray-300">{subitem.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                   ))}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
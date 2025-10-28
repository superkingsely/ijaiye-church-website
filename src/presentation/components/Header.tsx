



// "use client";

// import React, { useEffect } from "react";
// import Link from "next/link";
// import { Home } from "lucide-react";
// import { NavUrl, useNavStore } from "../stores/navstore";

// import '../../styles/globals.css';

// const Header = () => {
//   const { scrolled, setScrolled, items } = useNavStore();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [setScrolled]);

//   return (
//     <header className="fixed top-0 w-full z-[99]">
//       <div
//         className={`container relative mx-auto flex justify-between items-center py-4 px-6 transition-all duration-300 ${
//           scrolled ? "bg-purple-600 shadow-md" : "bg-transparent"
//         }`}
//       >
//         <div className="logo text-xl md:text-2xl font-bold">Church Logo</div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-4 text-white">
//             {items.map((item: NavUrl) => (
//               <li key={item.name} className="relative menu-item">
//                 <Link
//                   href={item.url || "#"}
//                   className="text-white hover:text-purple-400 font-bold px-3 py-2 block"
//                 >
//                   {item.name}
//                 </Link>

//                 {/* Submenu (direct child of menu-item) */}
//                 {item.submenu && (
//                   <ul className="submenu absolute top-full left-0 mt-0 min-w-[200px] bg-white text-gray-700 rounded-lg shadow-md z-40">
//                     {item.submenu.map((subitem) => (
//                       <li
//                         key={subitem.name}
//                         className={`relative submenu-item px-3 py-2 hover:bg-gray-100`}
//                       >
//                         <Link
//                           href={subitem.url || "#"}
//                           className="text-sm text-gray-700 hover:text-purple-600 block"
//                         >
//                           {subitem.name}
//                         </Link>

//                         {/* Subsubmenu: direct child of submenu-item */}
//                         {subitem.submenu && (
//                           <ul className="subsubmenu absolute top-0 left-[90%] ml-2 min-w-[200px] bg-white text-gray-700 rounded-lg shadow-md z-50">
//                             {subitem.submenu.map((anothersub) => (
//                               <li
//                                 key={anothersub.name}
//                                 className="px-3 py-2 hover:bg-gray-100"
//                               >
//                                 <Link
//                                   href={anothersub.url || "#"}
//                                   className="text-sm text-gray-700 hover:text-purple-600 block"
//                                 >
//                                   {anothersub.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mobile simplified (click to expand ideally) */}
//         <nav className="md:hidden">
//           <Home className="w-6 h-6 text-white" />
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;













// "use client";

// import React, { useEffect } from "react";
// import Link from "next/link";
// import { Home } from "lucide-react";
// import { NavUrl, useNavStore } from "../stores/navstore";

// const Header = () => {
//   const { scrolled, setScrolled, items } = useNavStore();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [setScrolled]);

//   return (
//     <header className="fixed top-0 w-full text-white z-[99]">
//       <div
//         className={`container relative mx-auto flex justify-between items-center py-4 px-6 transition-all duration-300 ${
//           scrolled ? "bg-purple-600 shadow-md" : "bg-transparent"
//         }`}
//       >
//         <div className="logo text-xl md:text-2xl font-bold">Church Logo</div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-4 text-white">
//             {items.map((item: NavUrl) => (
//               <li key={item.name} className="relative group/menu">
//                 <Link
//                   href={item.url || "#"}
//                   className="text-white hover:text-purple-400 font-bold"
//                 >
//                   {item.name}
//                 </Link>

//                 {/* Submenu */}
//                 {item.submenu && (
//                   <ul className="absolute top-full left-0 mt-2 bg-white text-gray-600 rounded-lg shadow-md scale-0 group-hover/menu:scale-100 origin-top transition-transform duration-1000">
//                     {item.submenu.map((subitem) => (
//                       <li
//                         key={subitem.name}
//                         className="relative group/submenu px-4 py-2 hover:bg-gray-100"
//                       >
//                         <Link
//                           href={subitem.url || "#"}
//                           className="text-sm hover:text-purple-600"
//                         >
//                           {subitem.name}
//                         </Link>

//                         {/* Subsubmenu */}
//                         {subitem.submenu && (
//                           <ul className="absolute top-0 left-full ml-2 bg-white text-gray-600 rounded-lg shadow-md scale-0 group-hover/submenu:scale-100 origin-left transition-transform duration-1000">
//                             {subitem.submenu.map((anothersub) => (
//                               <li
//                                 key={anothersub.name}
//                                 className="px-4 py-2 hover:bg-gray-100"
//                               >
//                                 <Link
//                                   href={anothersub.url || "#"}
//                                   className="text-sm hover:text-purple-600"
//                                 >
//                                   {anothersub.name}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Mobile Menu */}
//         <nav className="md:hidden absolute top-0 right-0 border w-[50vw] h-screen bg-purple-900/95">
//           <ul className="flex flex-col space-y-4 p-4">
//             {items.map((item: NavUrl) => (
//               <li key={item.name} className="relative group">
//                 <Link
//                   href={item.url || "#"}
//                   className="text-white hover:text-gray-300"
//                 >
//                   {item.name}
//                 </Link>
//                 {item.submenu && (
//                   <ul className="ml-4 border px-[15px] py-[10px] hidden group-hover:block bg-white text-black rounded-lg">
//                     {item.submenu.map((subitem) => (
//                       <li key={subitem.name}>
//                         <Link
//                           href={subitem.url || "#"}
//                           className="hover:text-purple-600"
//                         >
//                           {subitem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <Home className="w-6 h-6 text-white md:hidden" />
//       </div>
//     </header>
//   );
// };

// export default Header;











"use client"

import React, { useEffect, useState } from 'react'
import { NavUrl, useNavStore } from '../stores/navstore';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { li, ul } from 'framer-motion/client';

const Header = () => {

    const{scrolled,setScrolled,items,toggle,isOpen}= useNavStore();

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
                <ul onClick={toggle} className={` transition-all duration-1000 ease-linear flex flex-col space-y-4 border bg-purple-500  ${isOpen?'w-[50vw]':'w-0 overflow-hidden '}   w-[50vw] pl-[5px] pt-5  `}>
                   {
                    items.map((item: NavUrl) => (
                        <li key={item.name} className="  ">
                            <Link onClick={toggle}  href={item.url ? item.url : '#'} className=" hover:text-gray-300 text-white ">{item.name}</Link>
                            {item.submenu && (

                                <ul className="ml-4  cursor  px-[15px] py-[10px]   " >
                                    {item.submenu.map((subitem) => (
                                        <li className='' key={subitem.name}>
                                            <Link href={subitem.url ? subitem.url : '#'} className="text-white hover:text-gray-300  ">{subitem.name}</Link>
                                            {subitem.submenu && (
                                                <ul className="ml-4  cursor  px-[15px] py-[10px]   " >
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
"use client"

import React, { useState } from 'react'
import { useNavStore } from '../stores/navstore';
import Link from 'next/dist/client/link';

const Header = () => {

    // const{activeMenu,setActiveMenu}= useNavStore();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  return (
    <header>
        <div className="header-content max-w-[1200px] mx-auto px-4 md:px-0 py-2 flex justify-between items-center">
        <div className="logo text-2xl font-bold">Church Logo</div>

    <nav className="bg-blue-900 text-white">
      <ul className="flex gap-8 px-6 py-4">
        <li>
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
        </li>

        {/* ABOUT dropdown: group + focus-within + no gap */}
        <li className="relative group">
          <button
            aria-haspopup="true"
            aria-expanded="false"
            className="hover:text-yellow-400 transition focus:outline-none"
          >
            About Us ▾
          </button>

          {/* submenu: use opacity + pointer-events so it doesn't disappear */}
          <ul
            className="
              absolute left-0 top-full
              mt-0 /* no gap */
              w-48
              bg-white text-blue-900 rounded-md shadow-lg
              z-50
              transform
              origin-top
              opacity-0 scale-95
              pointer-events-none
              transition-all duration-150
              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
              group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto
            "
            role="menu"
          >
            <li className="px-4 py-2 hover:bg-blue-100" role="menuitem">
              <Link href="/about/mission">Our Mission</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100" role="menuitem">
              <Link href="/about/vision">Our Vision</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100" role="menuitem">
              <Link href="/about/team">Our Team</Link>
            </li>
          </ul>
        </li>

        {/* MINISTRIES dropdown: same pattern */}
        <li className="relative group">
          <button className="hover:text-yellow-400 transition focus:outline-none">
            Ministries ▾
          </button>

          <ul
            className="
              absolute left-0 top-full mt-0 w-52 bg-white text-blue-900 rounded-md shadow-lg z-50
              transform origin-top opacity-0 scale-95 pointer-events-none
              transition-all duration-150
              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
              group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto
            "
          >
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link href="/ministries/youth">Youth Ministry</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link href="/ministries/choir">Choir</Link>
            </li>
            <li className="px-4 py-2 hover:bg-blue-100">
              <Link href="/ministries/evangelism">Evangelism</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
        
        {/* <nav className="bg-gray-800 text-white relative">
            <ul className="flex space-x-6 px-6 py-4">
                <li
                className="relative"
                onMouseEnter={() => setActiveMenu("products")}
                onMouseLeave={() => setActiveMenu(null)}
                >
                <button className="hover:text-yellow-400">Products</button>
                {activeMenu === "products" && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/products/phones">Phones</Link>
                    </li>
                    </ul>
                )}
                </li>
            </ul>
        </nav> */}
        </div>
    </header>
  )
}

export default Header
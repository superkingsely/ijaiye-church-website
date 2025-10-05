"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbarr() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-gray-800 text-white relative">
      <ul className="flex space-x-6 px-6 py-4">
        {/* Products */}
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
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/products/laptops">Laptops</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/products/accessories">Accessories</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li
          className="relative"
          onMouseEnter={() => setActiveMenu("contact")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="hover:text-yellow-400">Contact</button>

          {activeMenu === "contact" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/contact/email">Email Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/contact/support">Support</Link>
              </li>
            </ul>
          )}
        </li>

        {/* About */}
        <li
          className="relative"
          onMouseEnter={() => setActiveMenu("about")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="hover:text-yellow-400">About</button>

          {activeMenu === "about" && (
            <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/company">Company</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about/team">Team</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

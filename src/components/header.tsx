// "use client";

// import { useEffect, useState, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import img1 from '../../public/images/Mountain of Fire and Miracles Ministry Logo PNG Vector (SVG) Free Download.jpg';

// type MenuItem = {
//   name: string;
//   path?: string;
//   submenu?: MenuItem[];
// };

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
//   const pathname = usePathname();

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setOpenDropdown(null);
//         setOpenSubmenu(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const dropdowns: Record<string, MenuItem[]> = {
//     "Who We Are": [
//       { name: "About Us", path: "/who-we-are/about" },
//       {
//         name: "Leadership",
//         path: "/who-we-are/leadership",
//         submenu: [
//           { name: "Pastors", path: "/who-we-are/leadership/pastors" },
//           { name: "Deacons", path: "/who-we-are/leadership/deacons" },
//         ],
//       },
//       { name: "History", path: "/who-we-are/history" },
//     ],
//     "What We Do": [
//       { name: "Programs", path: "/what-we-do/programs" },
//       { name: "Events", path: "/what-we-do/events" },
//       { name: "Community", path: "/what-we-do/community" },
//     ],
//     "Resources": [
//       { name: "Blog", path: "/resources/blog" },
//       { name: "Sermons", path: "/resources/sermons" },
//       { name: "Downloads", path: "/resources/downloads" },
//     ],
//   };

//   // Render nested submenu recursively with click toggling
//   const renderSubMenu = (items: MenuItem[], parentName: string) => {
//     return (
//       <ul className="absolute top-0 left-full mt-0 w-48 bg-purple-900 rounded shadow-lg z-50">
//         {items.map(({ name, path, submenu }) => (
//           <li key={name} className="relative">
//             <div
//               className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-purple-700 hover:text-yellow-400 whitespace-nowrap"
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent event bubbling up
//                 if (submenu) {
//                   // Toggle submenu open state
//                   setOpenSubmenu(openSubmenu === name ? null : name);
//                 } else {
//                   // If no submenu, close dropdown and submenu
//                   setOpenDropdown(null);
//                   setOpenSubmenu(null);
//                 }
//               }}
//             >
//               {path ? (
//                 <Link href={path} onClick={() => { setOpenDropdown(null); setOpenSubmenu(null); }} className="flex-1">
//                   {name}
//                 </Link>
//               ) : (
//                 <span className="flex-1">{name}</span>
//               )}
//               {submenu && (
//                 <span className="ml-2 select-none">{openSubmenu === name ? "▲" : "▼"}</span>
//               )}
//             </div>

//             {/* Nested submenu */}
//             {submenu && openSubmenu === name && renderSubMenu(submenu, name)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full min-h-[10vh] z-50 transition-colors duration-300 ${
//         scrolled ? "bg-purple-900 text-gray-200 shadow-md" : "bg-transparent text-gray-200"
//       }`}
//     >
//       <div className="max-w-[1200px] min-h-[10vh] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-[15px] leading-[20px] font-bold flex items-center gap-[10px]">
//           <div className="img w-[50px] h-[50px] rounded-full overflow-hidden">
//             <Image src={img1} alt="Mfm Ijaiye Mega Region IV Logo" />
//           </div>
//           <div className="logo-write-up flex flex-col items-center text-white">
//             <span>Mfm Ijaiye</span>
//             <span>Mega Region IV</span>
//           </div>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 relative" ref={dropdownRef}>
//           {Object.entries(dropdowns).map(([name, items]) => (
//             <div key={name} className="relative">
//               <button
//                 type="button"
//                 className={`flex items-center gap-1 hover:text-yellow-400 focus:outline-none ${
//                   pathname.includes(name.toLowerCase().replace(/\s+/g, "-"))
//                     ? "underline"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   setOpenDropdown(openDropdown === name ? null : name)
//                 }
//               >
//                 {name}
//                 <svg
//                   className="w-3 h-3 inline-block"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d={openDropdown === name ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"}
//                   ></path>
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               {openDropdown === name && (
//                 <div className="absolute top-full left-0 mt-1 w-48 bg-purple-900 rounded shadow-lg z-50">
//                   {renderSubMenu(items, name)}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Other top-level links */}
//           {[
//             ["Home", "/"],
//             ["Live", "/live"],
//             ["Give", "/give"],
//             ["Contact", "/contact"],
//           ].map(([name, path]) => (
//             <Link
//               key={name}
//               href={path}
//               className={`hover:text-yellow-400 ${
//                 pathname === path ? "underline" : ""
//               }`}
//             >
//               {name}
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger for mobile */}
//         <div
//           className="md:hidden text-white text-2xl cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           ☰
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-purple-900 px-4 py-4 flex flex-col space-y-3 text-white">
//           {[...Object.entries(dropdowns), ["Home", "/"], ["Live", "/live"], ["Give", "/give"], ["Contact", "/contact"]].map(
//             ([name, itemsOrPath]) => {
//               if (Array.isArray(itemsOrPath)) {
//                 return (
//                   <div key={name} className="flex flex-col">
//                     <Link
//                       href={`/${name.toLowerCase().replace(/\s+/g, "-")}`}
//                       className="hover:text-yellow-400"
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       {name}
//                     </Link>
//                     <ul className="pl-4 mt-1 space-y-1">
//                       {itemsOrPath.map(({ name: itemName, path: itemPath }) => (
//                         <li key={itemName}>
//                           <Link
//                             href={itemPath!}
//                             className="text-gray-300 hover:text-yellow-400"
//                             onClick={() => setMenuOpen(false)}
//                           >
//                             {itemName}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               }
//               return (
//                 <Link
//                   key={name}
//                   href={itemsOrPath}
//                   className="hover:text-yellow-400"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {name}
//                 </Link>
//               );
//             }
//           )}
//         </div>
//       )}
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Home, ImageIcon, Users, Settings, Menu, X } from "lucide-react";
import { useAdminStore } from "@/presentation/stores/adminStore";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar, closeSidebar } = useAdminStore();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Hero Section", href: "/admin/hero-manager", icon: ImageIcon },
    { name: "Members", href: "/admin/members", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className=" app-admin flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-blue-900 text-white flex flex-col z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 text-center text-xl font-bold border-b border-blue-700 flex justify-between items-center md:block">
          <span>MFM Admin</span>
          <button onClick={toggleSidebar} className="md:hidden">
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-blue-700 text-white"
                    : "hover:bg-blue-800 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-blue-700 text-sm text-center">
          © {new Date().getFullYear()} MFM IJAIYE
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-2xl font-semibold text-gray-700">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm hidden sm:block">
              Admin
            </span>
            <img
              src="/images/mfm-logomain.jpg"
              alt="Admin"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}





// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ReactNode } from "react";
// import { Home, ImageIcon, Users, Settings } from "lucide-react"; // free icon library

// export default function AdminLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();

//   const navItems = [
//     { name: "Dashboard", href: "/dashboard", icon: Home },
//     { name: "Hero Section", href: "/dashboard/hero", icon: ImageIcon },
//     { name: "Members", href: "/dashboard/members", icon: Users },
//     { name: "Settings", href: "/dashboard/settings", icon: Settings },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white flex flex-col">
//         <div className="p-4 text-center text-xl font-bold border-b border-blue-700">
//           MFM Admin
//         </div>

//         <nav className="flex-1 p-4 space-y-2">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
//                   isActive
//                     ? "bg-blue-700 text-white"
//                     : "hover:bg-blue-800 hover:text-white"
//                 }`}
//               >
//                 <Icon size={18} />
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t border-blue-700 text-sm text-center">
//           © {new Date().getFullYear()} MFM IJAIYE
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-semibold text-gray-700">
//             Admin Dashboard
//           </h1>
//           <div className="flex items-center gap-3">
//             <span className="text-gray-600">Admin</span>
//             <img
//               src="/images/mfm-logomain.jpg"
//               alt="Admin"
//               className="w-8 h-8 rounded-full border"
//             />
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// }

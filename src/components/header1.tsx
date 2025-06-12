import React from 'react'
import img1 from '../../public/images/Mountain of Fire and Miracles Ministry Logo PNG Vector (SVG) Free Download.jpg';
import Image from 'next/image';
interface Menu{
    name:string,
    path:string,
    submenu?:Menu[]|any
}
const Header1 = () => {
    const navData:Menu[]=[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Who We Are',
            path:''
        },
        {
            name:'What We Do',
            path:''
        },
        {
            name:'Resource',
            path:''
        },
        {
            name:'Contact',
            path:''
        },
        {
            name:'Live',
            path:''
        },
        {
            name:'Give',
            path:''
        },
    ]
  return (
    <header className='sticky top-0 left-0 w-full min-h-[10vh] border ' >
        <div className="header-content relative  max-w-[1200px] mx-auto min-h-[10vh] flex justify-between items-center px-[20px] sm:px-0 ">
            {/* logo */}
            <div className="text-[15px] leading-[20px] font-bold flex items-center gap-[10px]">
            <div className="img w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image src={img1} alt="Mfm Ijaiye Mega Region IV Logo" />
            </div>
            <div className="logo-write-up flex flex-col items-center text-white">
                <span>Mfm Ijaiye</span>
                <span>Mega Region IV</span>
            </div>
            </div>
            {/* desktop nav */}
            <nav className='hidden sm:block ' >
                <ul className='flex gap-[30px]  ' >
                    {
                        navData.map((obj:Menu)=>{
                            return(
                                <>
                                    <li><a href="">{obj.name}</a></li>
                                </>
                            )
                        })
                    }
                   
                </ul>
            </nav>
            {/* hamburger menu */}
            <div
            className="sm:hidden text-[black] text-2xl cursor-pointer"
            aria-label="Toggle menu"
            >
                ☰
            </div>
            {/* mobile nav */}
            <nav className='sm:hidden border w-[50%] h-[100vh] bg-[#eee] absolute right-0 top-0 z-[50] ' >
                <div className="close">close</div>
                <ul>
                    mobile
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header1
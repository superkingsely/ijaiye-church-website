
"use client"
import { useHerostore } from '@/stores/heroStore'
import React from 'react'
import { HiChevronRight, HiChevronLeft} from 'react-icons/hi'


const HeroSection = () => {
  const {count,heroh1,herop,herop1}=useHerostore()
  return (
    <section className="section relative flex justify-center mt-[0] border-blue-800 min-h-[100vh] border-[4px] bg-hero " id="home"   >
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] min-h-[100vh] w-full ">
          
        <div className="section-content max-w-[1200px] w-[100%] border-[2px] border-red-500  min-h-[80vh] mt-[10vh] mx-auto  text-white flex items-center flex-col ">
            <div className="h1 flex justify-center  text-[20px] sm:text-[50px] font-[700] mt-[100px] ">
              <span className='text-center ' >{heroh1[count]}</span>
            </div>
            <div className="p flex justify-center flex-col max-w-[530px] ">
              <span className='text-center ' >{herop[count]}</span> <br />
              <span className='text-center ' >{herop1[count]}</span>
            </div>
            <div className="action-btn flex gap-[30px] mt-[30px] ">
               <div className="pup-btn">JOIN US LIVE</div>
               <div className="org-btn">WHORSHIP WITH US</div>
            </div>
            <div className="indicator flex justify-center mt-[20px] ">
                <div className="dot w-[10px] h-[10px] rounded-full bg-[25,25,25,1] border cursor-pointer "></div>
            </div>
            <div className="ab-el">
                <div 
                className="prev w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.3)] border flex justify-center items-center text-[40px] absolute left-0 top-[50%] cursor-pointer ">
                  <HiChevronLeft/>
                </div>
                 <div 
                className="next w-[50px] h-[50px] rounded-full bg-[rgba(0,0,0,0.3)] border flex justify-center items-center text-[40px] absolute right-0 top-[50%] cursor-pointer ">
                  <HiChevronRight/>
                </div>
            </div>
        </div>
      </div>
   </section>
  )
}

export default HeroSection
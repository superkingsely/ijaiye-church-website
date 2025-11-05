import Image from 'next/image'
import React from 'react'
interface SectionBannerProps{
    title?:string;
    subtitle?:string;
}
const SectionBanner = ({title,subtitle}:SectionBannerProps) => {
  return (
    <div className=' h-[300px]   relative ' >
        <div className="img h-full w-full ">
            <Image src={'/images/mfm-ijaiye-pics.png'} alt='section-banner' width={1920} height={300} className='w-full h-full object-cover ' />
            <div className="cover absolute top-0 left-0 w-full h-full bg-[rgba(53,0,46,0.67)] flex justify-center items-center  ">
                <div className="content max-w-[1200px] mx-auto p-6 min-h-[300px] flex flex-col justify-center items-center text-white ">
                    <span className='title text-[50px] font-bold ' >{title}</span>
                    <span className='subtitle text-[22px] ' >{subtitle}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionBanner
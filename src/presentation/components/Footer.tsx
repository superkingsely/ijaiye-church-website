import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import imgface from '../../../public/images/social-media-pngitem-icons/facebook.png'
import imgInsta from '../../../public/images/social-media-pngitem-icons/instagram.png'
import imgtwitter from '../../../public/images/social-media-pngitem-icons/PngItem_teitter.png'
import imgyoutube from '../../../public/images/social-media-pngitem-icons/whatsap.png'

const Footer = () => {
  return (
    <footer className=' ' >
        <div className="footer-content max-w-[1200px] mx-auto ">
            <div className="ads-footer">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-black text-white p-6 ">
                    <div className="ad-item flex flex-col gap-4 ">
                        <h2 className='text-lg font-bold mb-2' >CONTACT</h2>
                        <div className="">
                            Phone: +234 (907) 088-8888, +234 (806) 000-4322
                        </div>
                        <div className="">
                            Email: enquiries@mountainoffire.org
                        </div>
                        <div className="">
                            MFM IJAIYE REGION 4
                            13 Olasimbo St, [Onike], Yaba,
                            Lagos 100213.
                        </div>
                    </div>
                    <div className="ad-item">
                        <h2 className='text-lg font-bold mb-2' >NAVIGATIONS</h2>
                        <ul className='flex flex-col gap-2 ' >
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/mission">Mission and Vision</Link></li>
                            <li><Link href="/give">Give</Link></li>
                        </ul>
                    </div>
                    <div className="ad-item">
                        <h2 className='text-lg font-bold mb-2' >QUICK LINKS</h2>
                        <ul className='flex flex-col gap-2 ' >
                            <li><Link href="/dko-ebooks">D.K.O E-Books</Link></li>
                            <li><Link href="/mfm-ebooks">MFM E-Books</Link></li>
                            <li><Link href="/dko-foundation">D.K.O Foundation M.T.U</Link></li>
                            <li><Link href="/privacy">Privacy</Link></li>
                        </ul>
                    </div>
                    <div className="ad-item">
                        <h2 className='text-lg font-bold mb-2' >SOCIALS</h2>
                        <ul className='flex gap-2 ' >
                            <li className='w-[50px] rounded-full ' >
                                <Image src={imgface} alt='' width={100} height={100} className='object-cover'  />
                            </li>
                            <li className='w-[50px] rounded-full ' >
                                <Image src={imgInsta} alt='' width={100} height={100} className='object-cover'  />
                            </li>
                            <li className='w-[50px] rounded-full ' >
                                <Image src={imgtwitter} alt='' width={100} height={100} className='object-cover' />

                            </li>
                            {/* <li className='w-[100px] rounded-full ' >
                                <Image src={imgtwitter} alt='' />
                                youtube
                            </li> */}
                        </ul>
                        <h2 className='text-lg font-bold mb-2' >SERVICE TIMES</h2>
                        <ul className='flex flex-col gap-2 ' >
                            <li>Sundays at 7:00 am</li>
                            <li>Mondays at 5:00 am</li>
                            <li>Wednesdays at 4:30 pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <div className="copyright min-h-[10vh] bg-purple-600 flex items-center justify-center ">
                <p className='text-white text-center py-4'>Copyright © 2025 - Mountain of Fire and Miracles Ministries. All Rights Reserved</p>
            </div>
    </footer>
  )
}

export default Footer
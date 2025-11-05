
import SectionBanner from '@/presentation/components/SectionBanner'
import React from 'react'

const Page = () => {
  return (
    <section className='  w-full' >
        <SectionBanner title="CONTACT" subtitle="KEEP IN TOUCH WITH US" />
        <div className="section-content contact-section-content max-w-[1200px] mx-auto p-6 min-h-[80vh] ">
            <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
        </div>
    </section>
  )
}

export default Page
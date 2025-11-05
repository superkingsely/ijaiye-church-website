
import SectionBanner from '@/presentation/components/SectionBanner'
import React from 'react'

const Page = () => {
  return (
    <section className='  w-full' >
        <SectionBanner title="GIVE" subtitle="Pay your offerings, tithes, first fruit offering etc via any of the listed platforms." />
        <div className="section-content give-section-content max-w-[1200px] mx-auto p-6 min-h-[80vh] ">
            <h1 className='text-3xl font-bold mb-4'>GIVE</h1>
        </div>
    </section>
  )
}

export default Page
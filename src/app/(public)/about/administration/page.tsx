import React from 'react'
import SectionBanner from '@/presentation/components/SectionBanner'

const Page = () => {
  return (
    <section className="w-full bg-white">
      <SectionBanner title="ADMINISTRATION" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ADMINISTRATION
        </h2>

        {/* Introduction */}
        <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none mb-8">
          <p>
            By the grace of God, the Mountain of Fire & Miracles Ministries is led by our 
            Father-in-the-Lord, <strong>Dr. Daniel Kolawole Olukoya</strong>. The smooth and 
            effective running of the ministry is supported by a strong administrative structure 
            overseen by seven Assistant General Overseers (AGOs).
          </p>

          <p>
            These leaders ensure the proper coordination, guidance, and spiritual supervision 
            of all church operations both within Nigeria and around the world.
          </p>
        </div>

        {/* AGO Header */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Assistant General Overseers (AGOs)
        </h3>

        {/* AGO List */}
        <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed prose-lg max-w-none mb-10">
          <li>Pastor Kehinde Adegbolahan</li>
          <li>Pastor Gbesan Adebambo</li>
          <li>Pastor Timothy Akano</li>
          <li>Pastor Abiodun Ladejola</li>
          <li>Pastor Lawrence Olaseinde</li>
          <li>Pastor Felix Peters</li>
          <li>Pastor Femi Ajila</li>
        </ul>

        {/* Extra Info */}
        <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none">
          <p>
            MFM also has a large number of senior pastors and ministers who cater to the 
            spiritual needs of the ever-growing church membership and branches worldwide.
          </p>

          <p className="mt-4">
            Please click below to explore our branch network across the globe.
          </p>

          {/* Button or Link placeholder */}
          <a 
            href="#"
            className="inline-block mt-3 px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Branch Network
          </a>
        </div>
      </div>
    </section>
  )
}

export default Page

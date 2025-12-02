import SectionBanner from '@/presentation/components/SectionBanner'
import React from 'react'

const Page = () => {
  return (
    <section className="w-full">
      <SectionBanner title="History of MFM" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">
        <h2 className="text-3xl font-bold mb-6">History of MFM</h2>

        <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none">
          <p>
            Soon after completing his Ph.D. in the United Kingdom, and while working at the Nigerian Institute of
            Medical Research, Dr. Daniel Kolawole Olukoya (DKO) summoned a prayer meeting in his living room in 1989.
            Twenty-four brethren attended that first meeting.
          </p>

          <p>
            After the first gathering, the prompting of the Holy Spirit inspired consistent weekly meetings. The power
            of God moved mightily, and verifiable miracles were recorded. Word spread, and the number of attendees grew
            rapidly as people came from far and near seeking divine intervention.
          </p>

          <p>
            As the crowd increased, the prayer group moved to 60 Old Yaba Road, Yaba, Lagos. Attendance continued to
            multiply beyond the available space, prompting another relocation.
          </p>

          <p>
            By divine direction, the prayer group acquired an abandoned slum at 13 Olasimbo Street, Onike, Yaba. This
            property, located near the second gate of the University of Lagos, was transformed into what is now the
            International Headquarters of Mountain of Fire and Miracles Ministries (MFM).
          </p>

          <p>
            The name "Mountain of Fire & Miracles Ministries" was revealed to Dr. Olukoya during prayer. The first
            official church service was held on April 24, 1994, marking the beginning of the ministry as a full church.
          </p>

          <p>
            With continued explosive growth, the church adopted a strategic expansion plan: establishing branches in all
            states, local government areas, and major communities—both within Nigeria and internationally.
          </p>

          <p>
            MFM’s first international branches were founded in London, then quickly spread to the United States, Canada,
            Europe, the Caribbean, Africa, and Asia. Today, the ministry is recognized as one of the fastest-growing
            Pentecostal movements across the globe.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Page;

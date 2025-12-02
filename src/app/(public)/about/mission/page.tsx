import React from 'react'
import SectionBanner from '@/presentation/components/SectionBanner'

const Page = () => {
  return (
    <section className="w-full bg-white">
      <SectionBanner title="MISSION AND VISION" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          MISSION AND VISION
        </h2>

        {/* Introduction */}
        <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none mb-8">
          <p>
            MFM Ministries is a full gospel ministry devoted to the Revival of Apostolic Signs,
            Holy Ghost Fireworks, and the unlimited demonstration of the power of God to deliver
            to the uttermost. Absolute holiness—within and without—is taught openly as the greatest
            spiritual insecticide and a prerequisite for Heaven.
          </p>

          <p>
            MFM is a do-it-yourself Gospel ministry where your hands are trained to wage war and
            your fingers to do battle. Aggressive prayer is considered vital for spiritual focus
            and as a guard against the works of the flesh. At MFM Prayer City, prayer continues
            24 hours a day, 7 days a week—non-stop.
          </p>
        </div>

        {/* Objectives Header */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          The objectives of this ministry are:
        </h3>

        {/* Objectives List */}
        <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed prose-lg max-w-none">
          <li>To propagate the gospel of our Lord Jesus Christ all over the world.</li>
          <li>To promote the revival of Apostolic signs, wonders, and miracles.</li>
          <li>To bring together children of God who are lost in dead churches.</li>
          <li>
            To train believers in the art and science of spiritual warfare,
            making them an aggressive and victorious army for the Lord.
          </li>
          <li>
            To train believers to receive Holy Ghost baptism and fire, and to
            walk daily in relationship with the Holy Spirit.
          </li>
          <li>
            To turn the joy of our enemies to sorrow — hence the emphasis on deliverance ministry.
            If you do not believe in deliverance, you are not supposed to be in MFM.
          </li>
          <li>
            To build an aggressive end-time army for the Lord. MFM is an end-time church
            where sinners must make a choice: repent or refuse to return.
          </li>
          <li>
            To deliver those who have become slaves to pastors, prophets, and apostles.
          </li>
          <li>
            To raise heavenly-bound and aggressive Christians. The priority is Heaven—
            not worldly pursuits.
          </li>
          <li>To build up prayer eagles.</li>
          <li>To purify the Pentecostal disorder and spiritual pollution of this age.</li>
        </ul>
      </div>
    </section>
  )
}

export default Page

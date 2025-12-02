import React from 'react'
import SectionBanner from '@/presentation/components/SectionBanner'

const Page = () => {
  return (
    <section className="w-full bg-white">
      <SectionBanner title="WHAT WE BELIEVE" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          WHAT WE BELIEVE
        </h2>

        {/* Beliefs List */}
        <ul className="list-disc pl-6 space-y-4 text-gray-800 leading-relaxed prose-lg max-w-none">

          <li>
            The Scriptures are the inspired Word of God; the only basis for our faith and fellowship.
          </li>

          <li>
            The One True God, eternally existent in three Persons: God the Father, God the Son, and God the Holy Spirit.
          </li>

          <li>
            The fall and deprivation of mankind, necessitating redemption through the Blood of Jesus Christ.
          </li>

          <li>
            The salvation of mankind through the redeeming work of Jesus Christ and the regenerative work of the Holy Spirit.
            Sanctification is seen as an act of separation from all evil.
          </li>

          <li>
            The Baptism of the Holy Spirit — Acts 2:4; 10:44; 19:1–6.
          </li>

          <li>
            Restitution for past wrongs where possible.
          </li>

          <li>
            The Ordinances of the Church: the Lord's Supper and Water Baptism.
          </li>

          <li>
            The Church Universal — both visible and invisible.
          </li>

          <li>
            The Ministry: divinely called and scripturally ordained as approved by Almighty God.
          </li>

          <li>
            Divine healing as provided by the Lord Jesus Christ.
          </li>

          <li>
            The Rapture, which will usher all believers into the Marriage Supper of the Lamb, and the second advent of Jesus Christ when He will physically return to earth.
          </li>

          <li>
            The Millennial Reign of Christ.
          </li>

          <li>
            The Final Judgment.
          </li>

          <li>
            The New Heaven and the New Earth.
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Page

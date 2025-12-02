import React from 'react'
import SectionBanner from '@/presentation/components/SectionBanner'

const Page = () => {
  const groups = [
    "USHERING TEAM",
    "FOUNDATIONAL CLASS/SEARCH THE SCRIPTURES",
    "MINISTRY TO GLORIOUS CHILDREN",
    "TRACKS AND PUBLICATIONS",
    "MINISTRY TO AFRICAN COUNTRY",
    "ROVING EVANGELISM",
    "DRAMA & EVANGELICAL MINISTRY",
    "BANNER OF LOVE",
    "TESTIMONY MINISTRY",
    "WECARE MINISTRY",
    "PRAISE AND WORSHIP",
    "HOSPITAL AND HEALING MINISTRY",
    "COUNSELLING",
    "PROPHETIC",
    "EVANGELISM",
    "PEF",
    "CHRISTIAN TENT MAKERS",
    "TERITORIAL INTERCESSORS",
    "MINISTRY TO SCHOOL",
    "MINISTRY TO DRUG ADDICT",
    "CHOIR",
    "GVVA",
    "PRAYER WARRIOR",
    "INTERPRETER & TRANSLATOR",
    "WELCOMING TEAM",
    "WATCHMAN INTERCESSORS",
    "MISSION OUTREACH",
    "VISITATION TEAM",
    "EVENING DELIVERANCE",
    "ASK TEAM",
    "MEMBERSHIP CLASS",
    "SENOIR CITIZENS",
    "REVIVAL MINISTRY",
    "WOMEN FOUNDATION",
    "MEN OF VALOUR",
    "COMMAND THE MORNING",
    "ANTI- JEZEBEL SQUAD",
    "EDO BRETHREN",
    "JESUS AT THE DOOR",
    "MFM ESTATE AGENT, SURVAYORS VALUES GROUP",
    "LEGAL AID COUNCIL",
    "WIDOW'S GROUP",
    "GOSPEL BAND",
    "PRAISE BAND",
    "PSALMIST BAND",
    "HAPPY HOME MINISTRY",
    "TASK FORCE",
    "IGBO BRETHREN",
    "WELFARE",
    "ONDO INDIGENE GROUP",
    "CHILDREN MINISTRY",
    "TEENAGE MINISTRY",
  ];

  return (
    <section className="w-full bg-white">
      <SectionBanner title="GROUPS" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">
        
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          GROUPS IN MFM INTERNATIONAL HQ
        </h2>

        {/* Description */}
        <p className="prose prose-lg text-gray-800 leading-relaxed mb-8">
          The Mountain of Fire and Miracles Ministries International Headquarters
          is blessed with several ministry groups dedicated to service, evangelism,
          worship, discipleship, and spiritual growth. Below is the complete list 
          of official groups within the church.
        </p>

        {/* 3 Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-gray-100 rounded-lg text-gray-900 font-medium shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page

"use client"
import React, { useState } from "react";
import Image from "next/image";
import SectionBanner from "@/presentation/components/SectionBanner";

const Page = () => {
  const [activeTab, setActiveTab] = useState<"daddy" | "mummy">("daddy");

  return (
    <section className="w-full bg-white">
      <SectionBanner title="Mummy & Daddy G.O" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Mummy & Daddy G.O
        </h2>

        {/* Toggle Buttons */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("daddy")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all 
            ${activeTab === "daddy" ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            About Dr. Daniel Olukoya (Daddy G.O)
          </button>

          <button
            onClick={() => setActiveTab("mummy")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all 
            ${activeTab === "mummy" ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            About Pst. (Mrs.) Shade Olukoya (Mummy G.O)
          </button>
        </div>

        {/* Image + Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Image Section */}
          <div className="w-full">
            <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-md">
              {activeTab === "daddy" ? (
                <Image
                  src="/images/daddy-go.jpg" // <-- replace with your real image path
                  alt="Daddy G.O"
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/images/mummy-go.jpg" // <-- replace with your real image path
                  alt="Mummy G.O"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2 prose prose-lg text-gray-800 leading-relaxed max-w-none">

            {activeTab === "daddy" ? (
              <>
                <h3 className="text-2xl font-bold mb-4">About Dr. Daniel Kolawole Olukoya</h3>

                <p>
                  Dr. Daniel Kolawole Olukoya (DKO) was born in Akure, Ondo State, Nigeria,
                  to Mr. Olukoya, a police officer, and Mrs. Olukoya, a trader. He excelled academically
                  from childhood and graduated top of his class at St. John’s CAC Primary School.
                </p>

                <p>
                  After moving to Lagos, he attended St. Jude’s Primary School, Ebute Metta,
                  where he continued to perform brilliantly. He later attended Methodist Boys’
                  High School (MBHS), where he became born again and graduated as the best student
                  of his set.
                </p>

                <p>
                  In 1976, he gained admission into the University of Lagos to study Microbiology,
                  graduating with a first-class degree—the first ever in the history of the department.
                  His GPA remains the highest on record (as of 2010).
                </p>

                <p>
                  He later obtained a PhD in Molecular Genetics at the University of Reading, UK,
                  completing the program in just 3 years.
                </p>

                <p>
                  Upon returning to Nigeria, he joined the Nigerian Institute of Medical Research (NIMR),
                  publishing over 70 scientific papers and becoming one of Africa’s most respected geneticists.
                </p>

                <p>
                  Raised in a strong Christian home, Dr. Olukoya’s ministry is heavily influenced by
                  Apostle Ayo Babalola. He has authored over 250 Christian books through the
                  Battle Cry Christian Ministries.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-4">About Pst. (Mrs.) Shade Olukoya</h3>

                <p>
                  Mrs. Shade Olukoya is the wife of the General Overseer of MFM Ministries.
                  She provides unwavering support, leadership, and spiritual strength alongside her husband.
                </p>

                <p>
                  Born the 5th of 7 children to Mr. & Mrs. George F. Adesanya, she grew up in a strong
                  Christian home and attended Christ Apostolic Church from childhood.
                </p>

                <p>
                  She attended Surulere Baptist School for primary education and later Reagan Memorial
                  Baptist Girls Secondary School, Yaba. She also studied in London, earning diplomas in
                  Fashion Design, Fine Arts, Interior Decoration, and later a Bachelor and Masters degree
                  in Fine Art.
                </p>

                <p>
                  A talented artist, she illustrated nearly all 250 books authored by her husband.
                  Her artistic creativity was evident from childhood and nurtured by her father.
                </p>

                <p>
                  Mrs. Olukoya is also the International Coordinator of the MFM Women’s Foundation,
                  empowering women through skill acquisition and literacy programs.
                </p>

                <p>
                  A gifted soloist and firebrand minister, she is known for deep spiritual insight,
                  powerful ministrations, and inspirational Christian musical performances.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;













// import React from 'react'
// import SectionBanner from '@/presentation/components/SectionBanner'
// import Image from 'next/image'

// const Page = () => {
//   return (
//     <section className="w-full bg-white">
//       <SectionBanner title="ADMINISTRATION" subtitle="Mummy & Daddy G.O" />

//       <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh]">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">Mummy & Daddy G.O</h2>

//         {/* Image Section */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
//           <div className="flex flex-col items-center text-center">
//             <Image 
//               src="/images/daddy-go.jpg" 
//               alt="Dr. D.K. Olukoya" 
//               width={350} 
//               height={420} 
//               className="rounded-lg shadow-md object-cover" 
//             />
//             <h3 className="text-xl font-semibold text-gray-900 mt-4">Dr. Daniel Kolawole Olukoya (Daddy G.O)</h3>
//           </div>

//           <div className="flex flex-col items-center text-center">
//             <Image 
//               src="/images/mummy-go.jpg" 
//               alt="Pst. (Mrs.) Shade Olukoya" 
//               width={350} 
//               height={420} 
//               className="rounded-lg shadow-md object-cover" 
//             />
//             <h3 className="text-xl font-semibold text-gray-900 mt-4">Pst. (Mrs.) Shade Olukoya (Mummy G.O)</h3>
//           </div>
//         </div>

//         {/* Daddy G.O Heading */}
//         <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Dr. Daniel Kolawole Olukoya (Daddy G.O)</h3>

//         <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none mb-10">
//           <p>
//             Dr. Daniel Kolawole Olukoya (DKO) was born in Akure, Ondo State, Nigeria to a police officer father and a trader mother.
//             He attended St. John’s CAC Primary School, Akure, where he was recognized as an exceptionally intelligent student.
//             When the family moved to Lagos, he completed his primary education at St. Jude's Primary School, Ebute Metta.
//           </p>

//           <p>
//             He proceeded to Methodist Boys’ High School (MBHS), Lagos, where he became born again. Inspired by an Indian teacher who said,
//             <em>“Boys, if you want to escape poverty, READ YOUR BOOKS!”</em>, Dr. Olukoya studied daily from 9pm to 3am.
//             He graduated as the best student of his set.
//           </p>

//           <p>
//             In 1976, DKO gained admission into the University of Lagos (Unilag) to study Microbiology. He graduated in 1980 with a first-class degree—the first in the department—
//             and holds the highest GPA ever recorded in that course (as of 2010).
//           </p>

//           <p>
//             Shortly after graduation, he won a scholarship for a PhD in Molecular Genetics at the University of Reading, United Kingdom. Despite the challenges of the programme,
//             he completed the PhD in just three years.
//           </p>

//           <p>
//             Upon returning to Nigeria, he joined the Nigerian Institute of Medical Research (NIMR) Yaba, quickly establishing himself as a leading geneticist.
//             He published over 70 scientific papers, taught genetics, served as an external examiner, and presented research across multiple continents.
//           </p>

//           <p>
//             Through the Daniel & Fola Biotechnology Foundation, DKO continues to contribute to modern molecular biology and biotechnology training in Nigeria.
//           </p>

//           <p>
//             Raised in a Christian home rooted in CAC doctrine, DKO remained committed to God throughout his education.
//             His ministry was greatly influenced by Apostle Joseph Ayodele Babalola, whose aggressive prayer lifestyle and revival ministry shaped DKO’s spiritual mandate.
//           </p>

//           <blockquote>
//             Apostle Babalola was a man mightily used by God to silence demons, empty hospitals, disgrace witchcraft, and pioneer Holy Ghost revival in Nigeria.
//             His legacy of aggressive evangelism remains unmatched.
//           </blockquote>

//           <p>
//             Today, Dr. Olukoya has authored over 250 Christian books (as of July 2015), published under Battle Cry Christian Ministries, along with audio and video resources.
//           </p>
//         </div>

//         {/* Mummy G.O Placeholder (You can add content later) */}
//         <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Pst. (Mrs.) Shade Olukoya (Mummy G.O)</h3>
//         <p className="text-gray-700 text-lg leading-relaxed mb-12">
//           Content coming soon... You can add her biography and ministry impact here.
//         </p>
//       </div>
//     </section>
//   )
// }

// export default Page;
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionBanner from "@/presentation/components/SectionBanner";

const Page = () => {
  return (
    <div>
      {/* Banner */}
      <SectionBanner
        title="TEENAGE MINISTRY"
        subtitle="Helping Teens Grow Spiritually and Socially"
      />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Intro */}
        <div className="prose prose-lg max-w-none">
          <p>
            The Teenage Ministry is an arm of the mother church—Mountain of Fire
            and Miracles Ministries—that caters for the spiritual and academic
            needs of both teenagers and pre-teens between the ages of Ten to
            Nineteen (10–19).
          </p>

          <p>
            The Teenage Ministry was founded in 1995 as envisioned by
            <strong> Dr. Daniel Olukoya</strong>, the General Overseer of MFM
            Worldwide. He recognized the need for an environment where teenagers
            can interact freely, receive sound biblical teaching, and be guided
            by Holy Spirit–filled leaders dedicated to their growth. The current
            Coordinating Pastor is <strong>(Mrs.) Adeyinka Adeleke</strong>.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">VISION</h2>
            <p className="text-gray-700 leading-relaxed">
              To nurture and mould our teenagers into Christlikeness, anchoring
              their lives on the Lord, so that they may be found worthy of
              eternal life in Christ Jesus.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">MISSION</h2>
            <p className="text-gray-700 leading-relaxed">
              We guide and encourage our teenagers in building and maintaining a
              solid relationship with God through the teaching of the Word of
              God and an unparalleled prayer lifestyle.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>

          <p className="text-gray-700 mb-4">
            Please feel free to visit us when you are in the Yaba area.
            <br /> We promise to make you feel at home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-purple-600 w-6 h-6" />
              <p className="text-gray-700">
                8 Professor Awojobi St., <br />
                Onike-Yaba, Lagos 100213
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-purple-600 w-6 h-6" />
              <p className="text-gray-700">+234 (0)706 528-8261</p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-purple-600 w-6 h-6" />
              <p className="text-gray-700">mfmteens@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

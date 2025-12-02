
"use client";

import React, { useState } from "react";
import SectionBanner from "@/presentation/components/SectionBanner";

const Page = () => {
  const [activeSection, setActiveSection] = useState("manna");

  return (
    <section className="w-full">
      {/* Banner */}
      <SectionBanner
        title="SPECIAL PROGRAMMES"
        subtitle="Explore Our Weekly & Monthly Power Services"
      />

      <div className="max-w-[1200px] mx-auto p-6 min-h-[80vh]">

        {/* SIDEBAR TABS (HORIZONTAL ON MOBILE, VERTICAL ON DESKTOP) */}
        <div className="flex flex-wrap gap-4 mb-10 font-semibold text-gray-800">

          {[
            { key: "manna", label: "Wednesday Manna Water" },
            { key: "prayerRain", label: "Prayer Rain" },
            { key: "pmch", label: "PMCH" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={
                activeSection === item.key
                  ? "text-red-700 border-b-2 border-red-700 pb-1"
                  : "hover:text-red-700"
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ================== CONTENT SECTIONS ================== */}

        {/* === WEDNESDAY MANNA WATER === */}
        {activeSection === "manna" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Wednesday Manna Water</h1>

            <p className="mb-4">
              A powerful weekly prayer and fasting programme designed to break chains,
              release blessings, and empower believers through Holy Ghost-filled prophetic prayers.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Venue:</strong> Mountain of Fire and Miracles Ministries Headquarters
              </li>
              <li>
                <strong>Date:</strong> Every Wednesday
              </li>
              <li>
                <strong>Note:</strong> Come fasting and bring your bottle(s) of water.
              </li>
            </ul>
          </div>
        )}

        {/* === PRAYER RAIN === */}
        {activeSection === "prayerRain" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Prayer Rain</h1>

            <p className="mb-4">
              Prayer Rain is a spiritual warfare programme held weekly for aggressive prayers.
              It is designed to rain acidic prayers upon stubborn problems and provoke divine breakthroughs.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Venue:</strong> MFM Prayer City, Km 12 Lagos–Ibadan Expressway, Ogun State
              </li>
              <li>
                <strong>Date:</strong> Every Friday (except the Friday preceding PMCH)
              </li>
              <li>
                <strong>Contact:</strong> +234 (816) 179-6087, +234 (907) 088-8888
              </li>
            </ul>
          </div>
        )}

        {/* === POWER MUST CHANGE HANDS (PMCH) === */}
        {activeSection === "pmch" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Power Must Change Hands (PMCH)</h1>

            <p className="mb-4">
              PMCH is a global deliverance and breakthrough service held once every month.
              It is a time of intense warfare prayers, healing, deliverance, and divine intervention.
              The service reaches millions through live satellite broadcast and online streaming.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Venue:</strong> MFM International Headquarters,
                13 Olasimbo St, Onike, Yaba, Lagos
              </li>
              <li>
                <strong>Date:</strong> First Saturday of every month, 7:00 AM – 12:00 PM WAT
              </li>
              <li>
                <strong>Contact:</strong> +234 (816) 179-6087, +234 (907) 088-8888
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#"
                className="text-red-700 font-semibold underline hover:text-red-900"
              >
                Watch Us Live
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Page;

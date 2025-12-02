"use client";
import React from "react";
import SectionBanner from "@/presentation/components/SectionBanner";

const Page = () => {
  const [active, setActive] = React.useState("about");

  return (
    <section className="w-full bg-white">
      <SectionBanner title="MEN OF VALOUR" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="flex md:flex-col flex-row md:space-y-4 space-x-4 md:space-x-0 text-gray-900 font-semibold text-lg border md:border-none p-4 md:p-0 rounded-lg">
          <button
            onClick={() => setActive("about")}
            className={active === "about" ? "text-red-700" : "hover:text-red-700"}
          >
            About
          </button>
          <button
            onClick={() => setActive("groups")}
            className={active === "groups" ? "text-red-700" : "hover:text-red-700"}
          >
            Groups
          </button>
          <button
            onClick={() => setActive("events")}
            className={active === "events" ? "text-red-700" : "hover:text-red-700"}
          >
            Events
          </button>
        </aside>

        {/* Main Section */}
        <div className="prose prose-lg text-gray-800 leading-relaxed max-w-none">
          {active === "about" && (
            <div>
              {/* ABOUT SECTION */}
              <h2 id="about" className="text-3xl font-bold mb-4">
                Welcome
              </h2>

              <p>
                I am delighted and happy to present to you <strong>MEN OF VALOUR</strong> of Mountain of Fire and
                Miracles Ministries Worldwide. Men of Valour has been set up to achieve the following objectives:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Empower men spiritually because when men are spiritually empowered they can possess their possessions
                </li>
                <li>Establish, recreate an array of men who will remake the world</li>
                <li>Empower men that will cause a change in the household of God and in the society</li>
                <li>Empower men that will live impactful lives</li>
              </ul>

              <p>
                The above will be achieved through seminars and workshops, prayer meetings, deliverance services, marriage
                seminars, mini bible school, mini deliverance school, and other life-impacting programmes.
              </p>

              <p>
                I therefore welcome you to be part of our vision, <strong>MFM MEN OF VALOUR</strong>, for your spiritual and
                physical empowerment.
              </p>

              <p>
                <strong>Dr. D.K. Olukoya</strong>
                <br />
                General Overseer, Mountain of Fire and Miracles Ministries Worldwide
              </p>

              <h2 id="man-of-valour" className="text-2xl font-bold mt-12 mb-4">
                A Man of Valour...
              </h2>

              <p>
                A man of Valour can be defined as the total man who has discovered himself and has known God by revelation.
                A man of Valour therefore differs from other men by possessing these qualities:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>A man who knows God</li>
                <li>A man who loves God and others</li>
                <li>A man who fears God</li>
                <li>A man who trusts God in all things</li>
                <li>A man of exceptional courage</li>
                <li>A man of integrity</li>
                <li>A man of strength</li>
                <li>A man who is faithful</li>
                <li>A man of peace</li>
                <li>A man who protects others</li>
                <li>A man of honour</li>
                <li>A man of his words</li>
              </ul>

              <h2 id="vision" className="text-2xl font-bold mt-12 mb-4">
                Our Vision
              </h2>

              <p>
                For men to discover themselves, to recover their lost glory and be repositioned to fulfill their divine
                destiny (Ezekiel 36:26).
              </p>

              <h2 id="mission" className="text-2xl font-bold mt-12 mb-4">
                Our Mission
              </h2>

              <p>
                To change lives of men by making them discover themselves, bringing them closer to God, and encouraging
                them to become men of integrity who will make meaningful impact in their families, society, and the world.
              </p>

              <p>
                The mission seeks to see Christian men financially and economically buoyant, placing them at the center of
                the economy and restoring dignity to their families.
              </p>

              <p>
                It also seeks to empower men to cause positive changes in their lives, families, the household of God and in
                the society. It seeks to raise men that will live impactful lives.
              </p>

              <h2 id="core-values" className="text-2xl font-bold mt-12 mb-4">
                Our Core Values
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Holy</li>
                <li>Righteous in Christ</li>
                <li>Filled and guided by the Holy Spirit</li>
                <li>Christ-like</li>
                <li>An example of a believer</li>
                <li>Patient</li>
                <li>Loving husbands and fathers</li>
                <li>Committed to the Word of God</li>
                <li>Husband of one wife</li>
                <li>Prayer eagle</li>
                <li>Financial and spiritual heads of our homes</li>
              </ul>
            </div>
          )}

          {active === "groups" && (
            <div>
              {/* GROUPS SECTION */}
              <h1 id="groups" className="text-3xl font-bold mb-4">
                Groups
              </h1>

              <h2 id="bible-club" className="text-2xl font-semibold mt-8 mb-2">
                Bible Club
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To teach men in-depth truth of God's word...</li>
                <li>To help men apply the word in daily living...</li>
                <li>To help men understand mysteries of God through Scripture...</li>
              </ul>

              <h2 id="empowerment-group" className="text-2xl font-semibold mt-8 mb-2">
                Empowerment Group
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To empower others using talents and knowledge...</li>
                <li>To activate hidden talents through training...</li>
                <li>To win back lost men through open seminars...</li>
              </ul>

              <h2 id="evangelism-group" className="text-2xl font-semibold mt-8 mb-2">
                Evangelism Group
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To sensitize men about evangelism...</li>
                <li>To gather lost sheep into God's family...</li>
                <li>To reach unreached areas with the gospel...</li>
              </ul>

              <h2 id="joshua-hur" className="text-2xl font-semibold mt-8 mb-2">
                Joshua + Hur Group
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To raise men willing to finance God's work...</li>
                <li>To ensure orderliness and execution of programs...</li>
                <li>To supervise church projects and infrastructure...</li>
              </ul>

              <h2 id="music-group" className="text-2xl font-semibold mt-8 mb-2">
                Music Group
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To involve musically gifted men in God's work...</li>
                <li>To train men to sing and play instruments...</li>
                <li>To use musical talents to spread the gospel...</li>
              </ul>

              <h2 id="prayer-eagle-group" className="text-2xl font-semibold mt-8 mb-2">
                Prayer Eagle Group
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To raise eagle men in prayer...</li>
                <li>To stand in the gap for the nation and church...</li>
                <li>To train men to become God's confidants in prayer...</li>
              </ul>

              <h2 id="think-tank-group" className="text-2xl font-semibold mt-8 mb-2">
                Think Tank Group
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To give ideas that grow the church...</li>
                <li>To solve problems using God-given abilities...</li>
                <li>To plan and strategize for church and men's progress...</li>
              </ul>
            </div>
          )}

          {active === "events" && (
            <div>
              {/* EVENTS SECTION */}
              <h1 id="events" className="text-3xl font-bold mb-4">
                Events
              </h1>
              <p>There are no upcoming events. Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;

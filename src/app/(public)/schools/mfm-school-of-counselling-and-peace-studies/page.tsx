"use client";

import React from "react";
import SectionBanner from "@/presentation/components/SectionBanner";

const Page: React.FC = () => {
  const [active, setActive] = React.useState<
    "about" | "admission" | "academics" | "rules" | "sections"
  >("about");

  // active subsection inside Sections (two groups)
  const [activeSectionGroup, setActiveSectionGroup] = React.useState<
    "main" | "lecture"
  >("main");

  // optional: the currently focused subsection id (for scrolling)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // convenience: render sidebar button
  const SideBtn: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
    active?: boolean;
    aria?: string;
  }> = ({ onClick, children, active, aria }) => (
    <button
      onClick={onClick}
      aria-label={aria}
      className={`px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1
        ${active ? "text-red-700 font-semibold" : "hover:text-red-700"}
        `}
      style={{ cursor: "pointer" }}
    >
      {children}
    </button>
  );

  return (
    <section className="w-full bg-white">
      <SectionBanner title="SCHOOL OF COUNSELLING & PEACE STUDIES" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar - vertical on md+, horizontal on small */}
        <aside
          className="flex md:flex-col flex-row md:space-y-4 space-x-4 md:space-x-0 text-gray-900 font-semibold text-lg border md:border-none p-4 md:p-0 rounded-lg bg-white"
          aria-label="Page navigation"
        >
          <SideBtn onClick={() => setActive("about")} active={active === "about"} aria="About">
            About
          </SideBtn>

          <SideBtn
            onClick={() => setActive("admission")}
            active={active === "admission"}
            aria="Admission"
          >
            Admission
          </SideBtn>

          <SideBtn
            onClick={() => setActive("academics")}
            active={active === "academics"}
            aria="Academics"
          >
            Academics
          </SideBtn>

          <SideBtn onClick={() => setActive("rules")} active={active === "rules"} aria="Rules">
            Rules
          </SideBtn>

          <div className="flex items-center">
            <SideBtn
              onClick={() => {
                setActive("sections");
                setActiveSectionGroup("main");
                // scroll to top of sections area after render
                setTimeout(() => scrollTo("sections-top"), 80);
              }}
              active={active === "sections"}
              aria="Sections"
            >
              Sections
            </SideBtn>
          </div>
        </aside>

        {/* Content area */}
        <main className="prose prose-lg text-gray-800 leading-relaxed max-w-none">
          {/* ABOUT */}
          {active === "about" && (
            <article>
              <h2 className="text-3xl font-bold mb-4">About</h2>

              <h3 className="text-2xl font-semibold mt-6">Background</h3>
              <p>
                Established and commissioned on 9th April, 2002 by Dr. D.K. Olukoya, the School of
                Counselling and Peace Studies began as one of 13 schools under the Institute of
                Spiritual Warfare. The school runs full- and part-time programmes designed to equip
                ministers, workers and interested Christians with practical and biblical counselling
                skills.
              </p>

              <h3 className="text-2xl font-semibold mt-6">Objectives</h3>
              <p>
                The school was established to provide short and medium-length programmes (3-month and
                6-month courses) in areas such as Christian Counselling, Integrated Counselling, Peace
                Keeping, Mediation & Conflict Resolution, and Career Counselling and Empowerment. The
                curriculum blends scripture-based teaching with practical case studies, power nights,
                and hands-on training.
              </p>

              <h3 className="text-2xl font-semibold mt-6">Governing Board</h3>
              <p>
                The School operates under a governing board. The General Overseer (the G.O.) serves as
                Visitor/President to whom the Rector is accountable.
              </p>

              <h3 className="text-2xl font-semibold mt-6">The Motto</h3>
              <p>
                <em>Every Purpose Is Established By Counsel</em> — Proverbs 20:18a
              </p>

              <h3 className="text-2xl font-semibold mt-6">School's Anthem</h3>
              <p>
                <em>
                  "O God thou art my God. I will exalt thee, I will praise thy name for thou hast done
                  wonderful things; thy counsels of old are faithfulness and truth." — Isaiah 25:1
                </em>
              </p>
            </article>
          )}

          {/* ADMISSION */}
          {active === "admission" && (
            <article>
              <h2 className="text-3xl font-bold mb-4">Admission</h2>

              <h3 className="text-2xl font-semibold mt-4">Courses</h3>
              <p>
                School of Counselling and Peace Studies offers 3-month full-time and 6-month
                part-time courses (English and Yoruba) in:
              </p>
              <ul className="list-disc pl-6">
                <li>Christian Counselling</li>
                <li>Integrated Counselling</li>
                <li>Peace Keeping, Mediation & Conflict Resolution</li>
                <li>Career Counselling & Empowerment</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-4">Who are these courses for?</h3>
              <p>Ministers of God, church leaders, workers, interested members and Christians.</p>

              <h3 className="text-2xl font-semibold mt-4">Where to obtain a form</h3>
              <p>
                Forms are available at the School office at MFM HQ (Prayer City), regional campuses
                and selected geo-regional offices. Forms cost ₦500.
              </p>

              <h3 className="text-2xl font-semibold mt-4">Entry Requirements</h3>
              <p>
                A minimum of WASC/NECO with a good grade in English. Attendance at School of Biblical
                Studies, School of Prayer and School of Deliverance is recommended. Salvation and Holy
                Spirit baptism are prerequisites.
              </p>

              <h3 className="text-2xl font-semibold mt-4">Benefits</h3>
              <ul className="list-disc pl-6">
                <li>Seasoned lecturers with anointing</li>
                <li>Conducive learning environment</li>
                <li>Case studies and power nights</li>
                <li>Affiliations with LASU, BABCOCK, etc.</li>
                <li>Diploma award on successful completion</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-4">School Fees</h3>
              <p>Tuition for a full session: NGN 14,000 (tuition + packs + certificate).</p>
            </article>
          )}

          {/* ACADEMICS */}
          {active === "academics" && (
            <article>
              <h2 className="text-3xl font-bold mb-4">Academics</h2>

              <h3 className="text-2xl font-semibold mt-4">Lecture Periods</h3>
              <p>
                Full-time: 8:00am – 5:00pm Mondays to Thursdays.
                <br />
                Part-time: 4:00pm – 7:30pm Tuesdays and Thursdays.
                <br />
                Intensive weekend lectures are scheduled in regional campuses.
              </p>

              <h3 className="text-2xl font-semibold mt-4">Venue</h3>
              <p>
                MFM International Headquarters (Prayer City) and satellite campuses at Agege, Ajah,
                Ogba, Mushin, Festac, Ijaiye, Ketu, Ikorodu and other locations. Geo-regional HQs
                include Abuja, Kano, Benin, Ibadan, Osogbo, Ado-Ekiti, Akure and Abeokuta.
              </p>

              <h3 className="text-2xl font-semibold mt-4">Language of Instruction</h3>
              <p>English and Yoruba (interpreters used for foreign students where necessary).</p>

              <h3 className="text-2xl font-semibold mt-4">Exams & Continuous Assessment</h3>
              <p>
                Assessment includes entry exam in scriptural affairs and English, weekly tests,
                mid-term & final exams, power nights, one-month industrial training and project
                writing.
              </p>

              <h3 className="text-2xl font-semibold mt-4">Grading</h3>
              <ul className="list-disc pl-6">
                <li>Continuous Assessment — 40%</li>
                <li>Seasonal Examination — 60%</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-4">Requirements for Graduation</h3>
              <ul className="list-disc pl-6">
                <li>At least 70% attendance</li>
                <li>Full payment of fees</li>
                <li>Satisfactory performance in assessments & exams</li>
                <li>Active participation in power nights & projects</li>
              </ul>
            </article>
          )}

          {/* RULES */}
          {active === "rules" && (
            <article>
              <h2 className="text-3xl font-bold mb-4">Rules & Regulations</h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Lecturers and students must live a life aligned with MFM's visions and mission —
                  godliness, humility and Christ-likeness are required.
                </li>
                <li>Prayer, ministration and counselling must be part of school life.</li>
                <li>No double registration; no graduation for incomplete students.</li>
                <li>Lateness and absenteeism are not tolerated.</li>
                <li>Maintain discipline and integrity; examine malpractice is severely punished.</li>
                <li>Students must carry school ID to lectures.</li>
                <li>Absolute loyalty to the school and MFM is expected of staff and students.</li>
                <li>Visitors are restricted; lecturers must notify the school if absent.</li>
                <li>All students/staff must be born again and spirit-filled.</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6">Contact Information</h3>
              <p>
                Pastor J.I. Ilori — P: +234 (0)803 721-8999 — E: julorassociates@gmail.com
                <br />
                Pastor Precious Arit Eyo — P: +234 (0)806 955-7903 — E: eyoprecious@ymail.com
                <br />
                Pastor Olorungbade Oluwatoyin — P: +234 (0)706 186-1492 — E: toyinmi@yahoo.com
              </p>
            </article>
          )}

          {/* SECTIONS (main group with anchorable subsections) */}
          {active === "sections" && (
            <article id="sections-top">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-6">
                {/* left: sub-navigation for Sections */}
                <nav className="mb-4 md:mb-0">
                  <div className="flex md:flex-col gap-2 flex-wrap">
                    <button
                      onClick={() => {
                        setActiveSectionGroup("main");
                        // scroll to top of sections content
                        setTimeout(() => scrollTo("sections-main"), 60);
                      }}
                      className={`px-3 py-2 rounded ${activeSectionGroup === "main" ? "text-red-700 font-semibold" : "hover:text-red-700"}`}
                      style={{ cursor: "pointer" }}
                    >
                      Background / Objectives / Board / Motto / Anthem
                    </button>

                    <button
                      onClick={() => {
                        setActiveSectionGroup("lecture");
                        setTimeout(() => scrollTo("sections-lecture"), 60);
                      }}
                      className={`px-3 py-2 rounded ${activeSectionGroup === "lecture" ? "text-red-700 font-semibold" : "hover:text-red-700"}`}
                      style={{ cursor: "pointer" }}
                    >
                      Lecture Periods / Venue / Language / Exams / Grading / Requirements
                    </button>
                  </div>
                </nav>

                {/* right: sections content */}
                <div className="prose prose-lg text-gray-800 max-w-none">
                  {/* Group 1 */}
                  <section id="sections-main" className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Background</h2>
                    <p>
                      Established and commissioned on 9th April, 2002 by Dr. D.K. Olukoya, the School of
                      Counselling and Peace Studies was launched as part of the Institute of Spiritual
                      Warfare to train ministers and interested Christians in counselling, mediation,
                      and related disciplines.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Objectives of the School</h3>
                    <p>
                      The school offers 3-month full-time and 6-month part-time courses (English and Yoruba),
                      providing training in Christian Counselling, Integrated Counselling, Peace-keeping,
                      Mediation & Conflict Resolution and Career Counselling & Empowerment.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Governing Board & Visitor</h3>
                    <p>
                      The G.O. serves as Visitor/President. The Rector (current: Pastor (Dr.) J.I. Ilori)
                      is responsible to the G.O.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">The Motto</h3>
                    <p><em>Every Purpose Is Established By Counsel</em> — Proverbs 20:18a</p>

                    <h3 className="text-2xl font-semibold mt-8">The School's Anthem</h3>
                    <p>
                      O God thou art my God. I will exalt thee, I will praise thy name for thou hast done wonderful things;
                      thy counsels of old are faithfulness and truth. — Isaiah 25:1
                    </p>
                  </section>

                  {/* Group 2 */}
                  <section id="sections-lecture" className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Lecture Periods</h2>
                    <p>
                      Full-time: 8:00am — 5:00pm (Mon–Thu). Part-time: 4:00pm — 7:30pm (Tue & Thu).
                      Intensive weekend lectures run in regional campuses.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Venue</h3>
                    <p>
                      Lectures are held at MFM International Headquarters (Prayer City), satellite campuses
                      and geo-regional headquarters across the country.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Language of Instruction</h3>
                    <p>English and Yoruba (with interpreters for foreign students where required).</p>

                    <h3 className="text-2xl font-semibold mt-8">Examinations & Continuous Assessment</h3>
                    <p>
                      Assessment mix: entry tests, weekly assignments, mid-term and final examinations, power nights,
                      practical training and project work.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8">Examination Grading</h3>
                    <table className="table-auto border-collapse border border-gray-200 w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-3 py-2 text-left">Letter</th>
                          <th className="border px-3 py-2 text-left">Grade %</th>
                          <th className="border px-3 py-2 text-left">Point</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-3 py-2">A</td>
                          <td className="border px-3 py-2">70% and above</td>
                          <td className="border px-3 py-2">5</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">B</td>
                          <td className="border px-3 py-2">60 - 69</td>
                          <td className="border px-3 py-2">4</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">C</td>
                          <td className="border px-3 py-2">50 - 59</td>
                          <td className="border px-3 py-2">3</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">D</td>
                          <td className="border px-3 py-2">45 - 49</td>
                          <td className="border px-3 py-2">2</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">E</td>
                          <td className="border px-3 py-2">40 - 44</td>
                          <td className="border px-3 py-2">1</td>
                        </tr>
                        <tr>
                          <td className="border px-3 py-2">FAIL</td>
                          <td className="border px-3 py-2">Below 40</td>
                          <td className="border px-3 py-2">0</td>
                        </tr>
                      </tbody>
                    </table>

                    <h3 className="text-2xl font-semibold mt-8">Requirements for Graduation</h3>
                    <ul className="list-disc pl-6">
                      <li>Minimum 70% lecture attendance</li>
                      <li>Full payment of fees</li>
                      <li>Satisfactory performance in assessments and exams</li>
                      <li>Full participation in power nights, case studies and project</li>
                      <li>Project completed and defended</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
          )}
        </main>
      </div>
    </section>
  );
};

export default Page;

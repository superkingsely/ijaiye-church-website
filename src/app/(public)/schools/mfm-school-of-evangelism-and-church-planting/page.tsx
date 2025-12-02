"use client";
import React from "react";
import SectionBanner from "@/presentation/components/SectionBanner";

export default function Page() {
  const [active, setActive] = React.useState("home");
  const [activeSection, setActiveSection] = React.useState("requirements");

  return (
    <section className="w-full bg-white">
      <SectionBanner title="SCHOOL OF EVANGELISM & CHURCH PLANTING" subtitle="" />

      <div className="max-w-[1200px] mx-auto p-6 py-12 min-h-[80vh] grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">

        {/* SIDEBAR */}
        <aside className="flex md:flex-col flex-row md:space-y-4 space-x-4 md:space-x-0 text-gray-900 font-semibold text-lg border md:border-none p-4 md:p-0 rounded-lg">
          <button
            onClick={() => setActive("home")}
            className={active === "home" ? "text-red-700" : "hover:text-red-700"}
          >
            Home
          </button>

          <button
            onClick={() => setActive("about")}
            className={active === "about" ? "text-red-700" : "hover:text-red-700"}
          >
            About
          </button>

          <button
            onClick={() => setActive("academics")}
            className={active === "academics" ? "text-red-700" : "hover:text-red-700"}
          >
            Academics
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">

          {/* ========== HOME SECTION ========== */}
          {active === "home" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Background Information</h2>

              <p>
                School of Evangelism is one of the schools in MFM Educational Institution. Through
                its well-coordinated system of training, it equips Christians to fulfill the Great Commission.
              </p>

              <p>
                The main goal of the school is to mobilize believers to join the end-time armies of God
                who are trained to carry out evangelism using various strategies, principles, and methods
                to saturate the world with the gospel of Christ.
              </p>

              <p>
                Emphasis is placed on sound biblical teaching, covering both theoretical and practical aspects
                of evangelism—without neglecting spiritual and academic development.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Contact Information</h2>

              <p>
                <strong>Pastor (Mrs.) F.I. Banwo</strong>, Rector - SECP<br />
                P: +234(0)803 843 5606, +234 (0)805 929 5885<br />
                E: felitayo2013@gmail.com, soeandchpl@gmail.com
              </p>
            </div>
          )}

          {/* ========== ABOUT SECTION ========== */}
          {active === "about" && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Vision</h2>

              <p>
                School of Evangelism and Church Planting acts as a fulcrum through which the Evangelism Ministry
                of MFM Worldwide and the body of Christ radiates.
              </p>

              <p>
                We equip and impact passion for lost souls into students, resulting in explosive outreach in
                villages, cities, and nations—leading to depopulating hell, discipling converts, and church planting.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Mission</h2>

              <p>
                The school exists to glorify God by equipping believers for real evangelization of villages, cities,
                and nations—winning souls and making them ready for God's kingdom.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Satellite Study Centers</h2>

              <p>
                The school operates study centers across Lagos and outstations. Competent graduates and experienced
                personnel are appointed as coordinators for easier access to training.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Contact Information</h2>

              <p>
                <strong>Pastor (Mrs.) F.I. Banwo</strong>, Rector - SECP<br />
                P: +234(0)803 843 5606, +234 (0)805 929 5885<br />
                E: felitayo2013@gmail.com, soeandchpl@gmail.com
              </p>
            </div>
          )}

          {/* ========== ACADEMICS SECTION ========== */}
          {active === "academics" && (
            <div>
              <h1 className="text-3xl font-bold mb-6">Academics</h1>

              {/* SUB-SECTIONS TABS */}
              <div className="flex flex-wrap gap-4 mb-8 font-semibold text-gray-800">
                {[
                  "requirements",
                  "duration",
                  "lectures",
                  "grading",
                  "graduation",
                  "admission",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={
                      activeSection === item
                        ? "text-red-700 border-b-2 border-red-700 pb-1"
                        : "hover:text-red-700"
                    }
                  >
                    {item === "requirements" && "Requirements"}
                    {item === "duration" && "Duration"}
                    {item === "lectures" && "Lectures"}
                    {item === "grading" && "Grading System"}
                    {item === "graduation" && "Requirements for Graduation"}
                    {item === "admission" && "Admission Requirements"}
                  </button>
                ))}
              </div>

              {/* === REQUIREMENTS === */}
              {activeSection === "requirements" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be born again</li>
                    <li>Full membership of MFM</li>
                    <li>Ability to read and write</li>
                    <li>Graduate of at least one MFM school</li>
                    <li>Any faithful Christian from other denominations</li>
                    <li>Entrance exam or interview is required</li>
                  </ul>
                </div>
              )}

              {/* === DURATION === */}
              {activeSection === "duration" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Duration of Studies</h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>3 months (Full-time Morning)</li>
                    <li>5 months (Part-time Saturdays)</li>
                    <li>Emergency ad-hoc program as directed</li>
                  </ul>

                  <p>
                    Extension may apply if a student is considered below average.
                  </p>
                </div>
              )}

              {/* === LECTURES === */}
              {activeSection === "lectures" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Time of Lectures</h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tuesdays & Thursdays — 8:00am to 2:00pm (Morning)</li>
                    <li>Part-time — Saturdays 8:00am to 2:00pm</li>
                    <li>Weekends — Satellite Campuses</li>
                  </ul>
                </div>
              )}

              {/* === GRADING === */}
              {activeSection === "grading" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Examinations & Continuous Assessment</h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Attendance — 15%</li>
                    <li>Assignment & Test — 15%</li>
                    <li>Practical — 15%</li>
                    <li>Project — 15%</li>
                    <li>G.O’s Book — 10%</li>
                    <li>Final Exams — 25%</li>
                    <li>Endurance Test — 5%</li>
                  </ul>

                  <p><strong>Total = 100%</strong></p>
                </div>
              )}

              {/* === GRADUATION === */}
              {activeSection === "graduation" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements for Graduation</h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Minimum of 60 credit units, maximum of 72</li>
                    <li>Must meet entrance requirements</li>
                    <li>Satisfactory attendance record</li>
                    <li>Average score across all program activities</li>
                    <li>Course completion is mandatory</li>
                  </ul>

                  <p>
                    Graduation takes place at headquarters for Lagos satellite schools and at outstations as directed.
                  </p>
                </div>
              )}

              {/* === ADMISSION === */}
              {activeSection === "admission" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

                  <p>
                    <strong>Pastor (Mrs.) F.I. Banwo</strong>, Rector - SECP<br />
                    P: +234(0)803 843 5606, +234 (0)805 929 5885<br />
                    E: felitayo2013@gmail.com, soeandchpl@gmail.com
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

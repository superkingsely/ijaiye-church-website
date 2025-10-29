
"use client";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
  subItems?: AccordionItem[];
}

const data: AccordionItem[] = [
  {
    title: "Our Mission",
    content: "To spread the gospel and reach communities with love and service.",
    subItems: [
      {
        title: "Spiritual Growth",
        content: "Helping members grow through teaching and discipleship.",
      },
      {
        title: "Community Service",
        content: "Organizing outreach and humanitarian projects.",
      },
    ],
  },
  {
    title: "Our Vision",
    content: "To build a God-centered community of believers.",
    subItems: [
      {
        title: "Faith Development",
        content: "Empowering people to live strong Christian lives.",
      },
      {
        title: "Leadership",
        content: "Raising new leaders with integrity and excellence.",
      },
    ],
  },
];

const NestedAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<Record<number, number | null>>({});

  const toggleMain = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSub = (mainIndex: number, subIndex: number) => {
    setOpenSubIndex(prev => ({
      ...prev,
      [mainIndex]: prev[mainIndex] === subIndex ? null : subIndex,
    }));
  };

  return (
    <section>
      <div className="about-section-content max-w-[1200px] mx-auto px-4 md:px-0 py-20 text-center min-h-[80vh]">
        <h1 className="text-3xl md:text-5xl font-bold mb-10">WHO WE ARE</h1>

        <div className="max-w-3xl mx-auto text-left space-y-4">
          {data.map((item, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMain(i)}
                className="w-full flex justify-between items-center px-4 py-3 bg-purple-700 text-white font-medium"
              >
                {item.title}
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>

              {openIndex === i && (
                <div className="p-4 bg-purple-50 text-gray-800">
                  <p className="mb-4">{item.content}</p>

                  {item.subItems && (
                    <div className="pl-4 border-l border-purple-300 space-y-3">
                      {item.subItems.map((sub, j) => (
                        <div key={j} className="border rounded-md overflow-hidden">
                          <button
                            onClick={() => toggleSub(i, j)}
                            className="w-full flex justify-between items-center px-3 py-2 bg-purple-100 font-medium"
                          >
                            {sub.title}
                            <span>{openSubIndex[i] === j ? "−" : "+"}</span>
                          </button>

                          {openSubIndex[i] === j && (
                            <div className="p-3 bg-white text-sm">{sub.content}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NestedAccordion;

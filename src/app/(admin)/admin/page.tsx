"use client";

import { BarChart3, Users, Mail, ImageIcon, Calendar, Eye } from "lucide-react";

export default function DashboardHome() {
  // Dummy Stats
  const stats = [
    {
      title: "Website Visits",
      value: "4,512",
      change: "+12%",
      icon: Eye,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "New Messages",
      value: "18",
      change: "+3",
      icon: Mail,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Registered Members",
      value: "265",
      change: "+5 this week",
      icon: Users,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Uploaded Hero Slides",
      value: "7",
      change: "active",
      icon: ImageIcon,
      color: "bg-orange-100 text-orange-700"
    },
  ];

  // Dummy Events
  const events = [
    { title: "Bible Study Service", date: "Wednesday - 6 PM" },
    { title: "Sunday Worship", date: "Sunday - 8 AM" },
    { title: "Youth Prayer Meeting", date: "Friday - 5 PM" },
  ];

  return (
    <div className="space-y-6">

      {/* ---- PAGE TITLE ---- */}
      <h2 className="text-2xl font-bold text-gray-700">Dashboard Overview</h2>

      {/* ---- STAT CARDS ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-gray-600 text-sm">{s.title}</p>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-xs text-green-600">{s.change}</p>
              </div>

              <div className={`p-3 rounded-full ${s.color}`}>
                <Icon size={22} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ---- CHART SECTION (Static Dummy UI) ---- */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Weekly Visitors</h3>
          <BarChart3 size={20} className="text-gray-600" />
        </div>

        {/* Fake chart bars */}
        <div className="grid grid-cols-7 gap-2 h-28 items-end">
          {[40, 60, 50, 80, 30, 70, 90].map((h, i) => (
            <div
              key={i}
              className="bg-blue-600 rounded-sm"
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-2">
          (Demo chart — replace later with real analytics)
        </p>
      </div>

      {/* ---- RECENT EVENTS ---- */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>

        <ul className="space-y-3">
          {events.map((e, i) => (
            <li
              key={i}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium text-gray-700">{e.title}</p>
                <p className="text-sm text-gray-500">{e.date}</p>
              </div>

              <Calendar size={20} className="text-blue-700" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




"use client";

import { useHeroStore } from "@/presentation/stores/heroStore";
import Image from "next/image";
import React, { useState } from "react";

export default function Dashboard() {
  const { views, addHero, updateHero, deleteHero } = useHeroStore();
  const [form, setForm] = useState({ title: "", subtitle: "" });

  const handleAdd = () => {
    if (!form.title.trim() || !form.subtitle.trim()) return;
    addHero({
      title: form.title,
      subtitle: form.subtitle,
      img: views[0].img,
    });
    setForm({ title: "", subtitle: "" });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
          Hero Manager
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Manage your homepage hero slides here.
        </p>
      </div>

      {/* Add new hero */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-700">
          Add New Hero
        </h3>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Hero title"
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            placeholder="Hero subtitle"
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Add
          </button>
        </div>
      </div>

      {/* Hero List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {views.map((hero, i) => (
          <div
            key={i}
            className="bg-white p-4 shadow rounded-lg relative hover:shadow-lg transition"
          >
            <Image
              src={hero.img}
              alt={hero.title}
              width={400}
              height={200}
              className="rounded-lg mb-3 w-full object-cover"
            />
            <h3 className="font-semibold text-lg">{hero.title}</h3>
            <p className="text-gray-600">{hero.subtitle}</p>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() =>
                  updateHero(i, { title: hero.title + " (Updated)" })
                }
                className="text-blue-700 font-medium hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHero(i)}
                className="text-red-600 font-medium hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}








// "use client";

// import { useHeroStore } from "@/presentation/stores/heroStore";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function Dashboard() {
//   const { views, addHero, updateHero, deleteHero } = useHeroStore();
//   const [form, setForm] = useState({ title: "", subtitle: "" });

//   const handleAdd = () => {
//     if (!form.title.trim() || !form.subtitle.trim()) return;
//     addHero({
//       title: form.title,
//       subtitle: form.subtitle,
//       img: views[0].img,
//     });
//     setForm({ title: "", subtitle: "" });
//   };

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h2 className="text-3xl font-bold mb-2 text-blue-900">Hero Manager</h2>
//         <p className="text-gray-600">Manage your homepage hero slides here.</p>
//       </div>

//       {/* Add new hero */}
//       <div className="bg-white p-6 rounded-lg shadow space-y-4">
//         <h3 className="text-xl font-semibold text-gray-700">Add New Hero</h3>
//         <div className="flex flex-col md:flex-row gap-3">
//           <input
//             type="text"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             placeholder="Hero title"
//             className="border p-2 rounded flex-1"
//           />
//           <input
//             type="text"
//             value={form.subtitle}
//             onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
//             placeholder="Hero subtitle"
//             className="border p-2 rounded flex-1"
//           />
//           <button
//             onClick={handleAdd}
//             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* Hero List */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {views.map((hero, i) => (
//           <div
//             key={i}
//             className="bg-white p-5 shadow rounded-lg relative hover:shadow-lg transition"
//           >
//             <Image
//               src={hero.img}
//               alt={hero.title}
//               width={500}
//               height={250}
//               className="rounded-lg mb-3"
//             />
//             <h3 className="font-semibold text-lg">{hero.title}</h3>
//             <p className="text-gray-600">{hero.subtitle}</p>

//             <div className="flex justify-end gap-3 mt-4">
//               <button
//                 onClick={() =>
//                   updateHero(i, { title: hero.title + " (Updated)" })
//                 }
//                 className="text-blue-700 font-medium hover:underline"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteHero(i)}
//                 className="text-red-600 font-medium hover:underline"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// "use client";

// import { useHeroStore } from "@/presentation/stores/heroStore";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function Dashboard() {
//   const { views, addHero, updateHero, deleteHero } = useHeroStore();
//   const [form, setForm] = useState({ title: "", subtitle: "" });

//   const handleAdd = () => {
//     if (!form.title.trim() || !form.subtitle.trim()) return;
//     addHero({
//       title: form.title,
//       subtitle: form.subtitle,
//       img: views[0].img, // temporary placeholder
//     });
//     setForm({ title: "", subtitle: "" });
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       {/* Add new hero */}
//       <div className="mb-6 space-x-2">
//         <input
//           type="text"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           placeholder="Hero title"
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           value={form.subtitle}
//           onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
//           placeholder="Hero subtitle"
//           className="border p-2 rounded"
//         />
//         <button
//           onClick={handleAdd}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Hero
//         </button>
//       </div>

//       {/* List existing hero sections */}
//       <div className="grid md:grid-cols-2 gap-4">
//         {views.map((hero, i) => (
//           <div key={i} className="bg-white p-4 shadow rounded">
//             <Image
//               src={hero.img}
//               alt={hero.title}
//               width={400}
//               height={200}
//               className="rounded mb-3"
//             />
//             <h2 className="font-semibold text-lg">{hero.title}</h2>
//             <p className="text-gray-600">{hero.subtitle}</p>

//             <div className="flex justify-end gap-2 mt-3">
//               <button
//                 onClick={() =>
//                   updateHero(i, { title: hero.title + " (Updated)" })
//                 }
//                 className="text-blue-600 hover:underline"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteHero(i)}
//                 className="text-red-600 hover:underline"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

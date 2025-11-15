



"use client";

import React, { useEffect, useState } from "react";
import { useHeroStore, HeroObject } from "@/presentation/stores/heroStore";
import Image, { type StaticImageData } from "next/image";
import { X } from "lucide-react";

type HeroImage = string | StaticImageData;
export default function HeroAdminPage() {
  const { views, addHero, updateHero, deleteHero, loadFromStorage, clearAll } =
    useHeroStore();

  const [form, setForm] = useState({ title: "", subtitle: "" });
  const [selectedFilePreview, setSelectedFilePreview] = useState<HeroImage | undefined>(undefined);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [editForm, setEditForm] = useState<{ title: string; subtitle: string; img?: HeroImage }>({
    title: "",
    subtitle: "",
    img: undefined,
  });
  const [editPreview, setEditPreview] = useState<string | undefined>(undefined);

  // Load persisted data
  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  // Convert file to preview
  const handleFile = (file?: File, setPreview?: (s: string | undefined) => void) => {
    if (!file) return setPreview?.(undefined);
    const reader = new FileReader();
    reader.onload = () => setPreview?.(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.subtitle.trim()) return;

    addHero({
      title: form.title,
      subtitle: form.subtitle,
      img: selectedFilePreview ?? views[0]?.img ?? undefined,
    });

    setForm({ title: "", subtitle: "" });
    setSelectedFilePreview(undefined);
  };

  const handleEditSave = () => {
    if (editingIndex === null) return;

    updateHero(editingIndex, {
      title: editForm.title,
      subtitle: editForm.subtitle,
      img: editPreview ?? editForm.img ?? undefined,
    });

    setEditingIndex(null);
    setEditForm({ title: "", subtitle: "", img: undefined });
    setEditPreview(undefined);
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Hero Manager</h2>
        <p className="text-sm text-gray-600">Add, edit and remove hero slides</p>
      </div>

      {/* Add New Slide */}
      <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow space-y-3">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Title"
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            placeholder="Subtitle"
            className="border p-2 rounded w-full"
            required
          />
          <div>
            <label className="block text-sm mb-1">Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(ev) => handleFile(ev.target.files?.[0], setSelectedFilePreview)}
              className="text-sm w-full"
            />
          </div>
        </div>

        {selectedFilePreview && (
          <div className="mt-2 relative w-full h-40 rounded overflow-hidden">
            <Image src={selectedFilePreview} alt="preview" fill className="object-cover" />
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Add Slide
          </button>
          <button
            type="button"
            onClick={() => {
              setForm({ title: "", subtitle: "" });
              setSelectedFilePreview(undefined);
            }}
            className="px-4 py-2 rounded border"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => {
              clearAll();
              setTimeout(() => window.location.reload(), 200);
            }}
            className="ml-auto text-sm text-red-600"
          >
            Reset to Defaults
          </button>
        </div>
      </form>

      {/* Existing Slides */}
      <div>
        <h3 className="font-semibold mb-3">Existing Slides</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {views.map((v, i) => (
            <div key={i} className="bg-white p-4 rounded shadow flex flex-col">
              <div className="mb-3 w-full h-40 bg-gray-100 rounded overflow-hidden relative flex items-center justify-center">
                {v.img ? (
                  <Image src={v.img} alt={v.title} fill className="object-cover" />
                ) : (
                  <span className="text-gray-400 text-sm">No Image</span>
                )}
              </div>
              <h4 className="font-semibold">{v.title}</h4>
              <p className="text-sm text-gray-600">{v.subtitle}</p>

              <div className="flex gap-3 justify-end mt-3 flex-wrap">
                <button
                  className="text-blue-600 text-sm"
                  onClick={() => {
                    setEditingIndex(i);
                    setEditForm({
                      title: v.title,
                      subtitle: v.subtitle,
                      img: v.img,
                    });
                    setEditPreview(undefined);
                  }}
                >
                  Quick Edit
                </button>
                <button
                  className="text-red-600 text-sm"
                  onClick={() => {
                    if (confirm("Delete this slide?")) deleteHero(i);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {editingIndex !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-2">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setEditingIndex(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4">Edit Slide</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                placeholder="Title"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                value={editForm.subtitle}
                onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
                placeholder="Subtitle"
                className="border p-2 rounded w-full"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(ev) => handleFile(ev.target.files?.[0], setEditPreview)}
              />

              {(editPreview ?? editForm.img) && (
                <div className="mt-2 relative w-full h-48 rounded overflow-hidden">
                  <Image
                    src={editPreview ?? editForm.img!}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex justify-end gap-3 mt-4 flex-wrap">
                <button
                  onClick={() => setEditingIndex(null)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSave}
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




// "use client";

// import React, { useEffect, useState } from "react";
// import { useHeroStore, HeroObject } from "@/presentation/stores/heroStore";
// import Image from "next/image";
// import { X } from "lucide-react";

// export default function HeroAdminPage() {
//   const { views, addHero, updateHero, deleteHero, loadFromStorage, clearAll } =
//     useHeroStore();

//   const [form, setForm] = useState({ title: "", subtitle: "" });
//   const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(null);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);
//   const [editForm, setEditForm] = useState<{ title: string; subtitle: string; img: string | null }>({
//     title: "",
//     subtitle: "",
//     img: null,
//   });
//   const [editPreview, setEditPreview] = useState<string | null>(null);

//   // Load persisted data
//   useEffect(() => {
//     loadFromStorage();
//   }, [loadFromStorage]);

//   // Convert file to preview
//   const handleFile = (file?: File, setPreview?: (s: string | null) => void) => {
//     if (!file) return setPreview?.(null);
//     const reader = new FileReader();
//     reader.onload = () => setPreview?.(reader.result as string);
//     reader.readAsDataURL(file);
//   };

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.title.trim() || !form.subtitle.trim()) return;

//     const hero: HeroObject = {
//       title: form.title,
//       subtitle: form.subtitle,
//       img: selectedFilePreview ?? views[0]?.img ?? null,
//     };

//     addHero(hero);
//     setForm({ title: "", subtitle: "" });
//     setSelectedFilePreview(null);
//   };

//   const handleEditSave = () => {
//     if (editingIndex === null) return;

//     updateHero(editingIndex, {
//       title: editForm.title,
//       subtitle: editForm.subtitle,
//       img: editPreview ?? editForm.img,
//     });

//     setEditingIndex(null);
//     setEditForm({ title: "", subtitle: "", img: null });
//     setEditPreview(null);
//   };

//   return (
//     <div className="space-y-6 p-4">
//       {/* Header */}
//       <div>
//         <h2 className="text-2xl font-bold">Hero Manager</h2>
//         <p className="text-sm text-gray-600">Add, edit and remove hero slides</p>
//       </div>

//       {/* Add new slide */}
//       <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow space-y-3">
//         <div className="grid md:grid-cols-3 gap-3 items-center">
//           <input
//             type="text"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             placeholder="Title"
//             className="border p-2 rounded w-full"
//             required
//           />
//           <input
//             type="text"
//             value={form.subtitle}
//             onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
//             placeholder="Subtitle"
//             className="border p-2 rounded w-full"
//             required
//           />
//           <div>
//             <label className="block text-sm mb-1">Image (optional)</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(ev) => handleFile(ev.target.files?.[0], setSelectedFilePreview)}
//               className="text-sm w-full"
//             />
//           </div>
//         </div>

//         {selectedFilePreview && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-600 mb-1">Preview</p>
//             <div className="relative w-full h-40 rounded overflow-hidden">
//               <Image src={selectedFilePreview} alt="preview" fill className="object-cover" />
//             </div>
//           </div>
//         )}

//         <div className="flex flex-wrap gap-2">
//           <button
//             type="submit"
//             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
//           >
//             Add Slide
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setForm({ title: "", subtitle: "" });
//               setSelectedFilePreview(null);
//             }}
//             className="px-4 py-2 rounded border cursor-pointer"
//           >
//             Reset
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               clearAll();
//               setTimeout(() => window.location.reload(), 200);
//             }}
//             className="ml-auto text-sm text-red-600 cursor-pointer"
//           >
//             Reset to Defaults
//           </button>
//         </div>
//       </form>

//       {/* Existing slides */}
//       <div>
//         <h3 className="font-semibold mb-3">Existing Slides</h3>
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {views.map((v, i) => (
//             <div key={i} className="bg-white p-4 rounded shadow relative flex flex-col">
//               <div className="mb-3 w-full h-[160px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 {v.img ? (
//                   <Image src={v.img} alt={v.title} fill className="object-cover" />
//                 ) : (
//                   <span className="text-gray-400 text-sm">No Image</span>
//                 )}
//               </div>
//               <h4 className="font-semibold">{v.title}</h4>
//               <p className="text-sm text-gray-600">{v.subtitle}</p>

//               <div className="flex gap-3 justify-end mt-3 flex-wrap">
//                 <button
//                   className="text-blue-600 text-sm cursor-pointer"
//                   onClick={() => {
//                     setEditingIndex(i);
//                     setEditForm({
//                       title: v.title,
//                       subtitle: v.subtitle,
//                       img: v.img ?? null,
//                     });
//                     setEditPreview(null);
//                   }}
//                 >
//                   Quick Edit
//                 </button>
//                 <button
//                   className="text-red-600 text-sm cursor-pointer"
//                   onClick={() => {
//                     if (confirm("Delete this slide?")) deleteHero(i);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Edit modal */}
//       {editingIndex !== null && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-2">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//             <button
//               onClick={() => setEditingIndex(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
//             >
//               <X size={20} />
//             </button>

//             <h3 className="text-xl font-semibold mb-4">Edit Slide</h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 value={editForm.title}
//                 onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
//                 placeholder="Title"
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="text"
//                 value={editForm.subtitle}
//                 onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
//                 placeholder="Subtitle"
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(ev) => handleFile(ev.target.files?.[0], setEditPreview)}
//               />

//               {(editPreview ?? editForm.img) && (
//                 <div className="mt-2 relative w-full h-48 rounded overflow-hidden">
//                   <Image
//                     src={editPreview ?? editForm.img!}
//                     alt="Preview"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               )}

//               <div className="flex justify-end gap-3 mt-4 flex-wrap">
//                 <button
//                   onClick={() => setEditingIndex(null)}
//                   className="border px-4 py-2 rounded cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleEditSave}
//                   className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }








// "use client";

// import React, { useEffect, useState } from "react";
// import { useHeroStore, HeroObject } from "@/presentation/stores/heroStore";
// import Image from "next/image";
// import { X } from "lucide-react";

// export default function HeroAdminPage() {
//   const { views, addHero, updateHero, deleteHero, loadFromStorage, clearAll } =
//     useHeroStore();

//   const [form, setForm] = useState({ title: "", subtitle: "" });
//   const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(null);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);
//   const [editForm, setEditForm] = useState({ title: "", subtitle: "", img: "" });
//   const [editPreview, setEditPreview] = useState<string | null>(null);

//   // Load persisted data on mount
//   useEffect(() => {
//     loadFromStorage();
//   }, [loadFromStorage]);

//   // Convert file to preview
//   const handleFile = (file?: File, setPreview?: (s: string | null) => void) => {
//     if (!file) return setPreview?.(null);
//     const reader = new FileReader();
//     reader.onload = () => setPreview?.(reader.result as string);
//     reader.readAsDataURL(file);
//   };

//   // Add new hero slide
//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.title.trim() || !form.subtitle.trim()) return;

//     const hero: HeroObject = {
//       title: form.title,
//       subtitle: form.subtitle,
//       img: selectedFilePreview ?? "",
//     };

//     addHero(hero);
//     setForm({ title: "", subtitle: "" });
//     setSelectedFilePreview(null);
//   };

//   // Save edited slide
//   const handleEditSave = () => {
//     if (editingIndex === null) return;

//     updateHero(editingIndex, {
//       title: editForm.title,
//       subtitle: editForm.subtitle,
//       img: editPreview ?? editForm.img,
//     });

//     setEditingIndex(null);
//     setEditForm({ title: "", subtitle: "", img: "" });
//     setEditPreview(null);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h2 className="text-2xl font-bold">Hero Manager</h2>
//         <p className="text-sm text-gray-600">Add, edit, and remove hero slides</p>
//       </div>

//       {/* Add New Slide Form */}
//       <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow space-y-3">
//         <div className="grid md:grid-cols-3 gap-3 items-center">
//           <input
//             type="text"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             placeholder="Title"
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="text"
//             value={form.subtitle}
//             onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
//             placeholder="Subtitle"
//             className="border p-2 rounded"
//             required
//           />
//           <div>
//             <label className="block text-sm mb-1">Image (optional)</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(ev) => handleFile(ev.target.files?.[0], setSelectedFilePreview)}
//               className="text-sm"
//             />
//           </div>
//         </div>

//         {selectedFilePreview && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-600 mb-1">Preview</p>
//             <img src={selectedFilePreview} alt="preview" className="max-h-40 rounded" />
//           </div>
//         )}

//         <div className="flex gap-2">
//           <button
//             type="submit"
//             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
//           >
//             Add Slide
//           </button>

//           <button
//             type="button"
//             onClick={() => {
//               setForm({ title: "", subtitle: "" });
//               setSelectedFilePreview(null);
//             }}
//             className="px-4 py-2 rounded border cursor-pointer"
//           >
//             Reset
//           </button>

//           <button
//             type="button"
//             onClick={() => {
//               clearAll();
//               setTimeout(() => window.location.reload(), 200);
//             }}
//             className="ml-auto text-sm text-red-600 cursor-pointer"
//           >
//             Reset to Defaults
//           </button>
//         </div>
//       </form>

//       {/* Existing Slides */}
//       <div>
//         <h3 className="font-semibold mb-3">Existing Slides</h3>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {views.map((v, i) => (
//             <div key={i} className="bg-white p-4 rounded shadow relative">
//               <div className="mb-3 w-full h-[160px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 {typeof v.img === "string" ? (
//                   <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
//                 ) : (
//                   <Image src={v.img} alt={v.title} fill className="object-cover" />
//                 )}
//               </div>
//               <h4 className="font-semibold">{v.title}</h4>
//               <p className="text-sm text-gray-600">{v.subtitle}</p>

//               {/* Edit & Delete Buttons */}
//               <div className="flex gap-3 justify-end mt-3">
//                 <button
//                   className="text-blue-600 text-sm cursor-pointer z-20 "
//                   onClick={() => {
//                     setEditingIndex(i);
//                     setEditForm({
//                       title: v.title,
//                       subtitle: v.subtitle,
//                       img: typeof v.img === "string" ? v.img : "",
//                     });
//                     setEditPreview(null);
//                   }}
//                 >
//                   Quick Edit
//                 </button>

//                 <button
//                   className="text-red-600 text-sm cursor-pointer z-20 "
//                   onClick={() => {
//                     if (confirm("Delete this slide?")) deleteHero(i);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {editingIndex !== null && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px] relative">
//             <button
//               onClick={() => setEditingIndex(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
//             >
//               <X size={20} />
//             </button>

//             <h3 className="text-xl font-semibold mb-4">Edit Slide</h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 value={editForm.title}
//                 onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
//                 placeholder="Title"
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="text"
//                 value={editForm.subtitle}
//                 onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
//                 placeholder="Subtitle"
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(ev) => handleFile(ev.target.files?.[0], setEditPreview)}
//               />
//               <div className="mt-2">
//                 <p className="text-sm text-gray-600 mb-1">Preview</p>
//                 <img
//                   src={editPreview ?? editForm.img}
//                   alt="Preview"
//                   className="max-h-48 w-full object-cover rounded"
//                 />
//               </div>

//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   onClick={() => setEditingIndex(null)}
//                   className="border px-4 py-2 rounded cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleEditSave}
//                   className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import React, { useEffect, useState } from "react";
// import { useHeroStore, HeroObject } from "@/presentation/stores/heroStore";
// import Image from "next/image";
// import { X } from "lucide-react";

// export default function HeroAdminPage() {
//   const { views, addHero, updateHero, deleteHero, loadFromStorage, clearAll } =
//     useHeroStore();

//   const [form, setForm] = useState({ title: "", subtitle: "" });
//   const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(null);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);
//   const [editForm, setEditForm] = useState({ title: "", subtitle: "", img: "" });
//   const [editPreview, setEditPreview] = useState<string | null>(null);

//   // Load persisted data
//   useEffect(() => {
//     loadFromStorage();
//   }, [loadFromStorage]);

//   // Convert file to preview
//   const handleFile = (file?: File, setPreview?: (s: string | null) => void) => {
//     if (!file) return setPreview?.(null);
//     const reader = new FileReader();
//     reader.onload = () => setPreview?.(reader.result as string);
//     reader.readAsDataURL(file);
//   };

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.title.trim() || !form.subtitle.trim()) return;

//     const hero: HeroObject = {
//       title: form.title,
//       subtitle: form.subtitle,
//       img: selectedFilePreview ?? views[0]?.img ?? "",
//     };

//     addHero(hero);
//     setForm({ title: "", subtitle: "" });
//     setSelectedFilePreview(null);
//   };

//   const handleEditSave = () => {
//     if (editingIndex === null) return;

//     updateHero(editingIndex, {
//       title: editForm.title,
//       subtitle: editForm.subtitle,
//       img: editPreview ?? editForm.img,
//     });

//     setEditingIndex(null);
//     setEditForm({ title: "", subtitle: "", img: "" });
//     setEditPreview(null);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-2xl font-bold">Hero Manager</h2>
//         <p className="text-sm text-gray-600">Add, edit and remove hero slides</p>
//       </div>

//       {/* Add new slide */}
//       <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow space-y-3">
//         <div className="grid md:grid-cols-3 gap-3 items-center">
//           <input
//             type="text"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             placeholder="Title"
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="text"
//             value={form.subtitle}
//             onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
//             placeholder="Subtitle"
//             className="border p-2 rounded"
//             required
//           />

//           <div>
//             <label className="block text-sm mb-1">Image (optional)</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(ev) => {
//                 const f = ev.target.files?.[0];
//                 handleFile(f, setSelectedFilePreview);
//               }}
//               className="text-sm"
//             />
//           </div>
//         </div>

//         {selectedFilePreview && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-600 mb-1">Preview</p>
//             <img src={selectedFilePreview} alt="preview" className="max-h-40 rounded" />
//           </div>
//         )}

//         <div className="flex gap-2">
//           <button
//             type="submit"
//             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
//           >
//             Add Slide
//           </button>

//           <button
//             type="button"
//             onClick={() => {
//               setForm({ title: "", subtitle: "" });
//               setSelectedFilePreview(null);
//             }}
//             className="px-4 py-2 rounded border cursor-pointer"
//           >
//             Reset
//           </button>

//           <button
//             type="button"
//             onClick={() => {
//               clearAll();
//               setTimeout(() => window.location.reload(), 200); // fix overflow bug
//             }}
//             className="ml-auto text-sm text-red-600 cursor-pointer"
//           >
//             Reset to Defaults
//           </button>
//         </div>
//       </form>

//       {/* Slide list */}
//       <div>
//         <h3 className="font-semibold mb-3">Existing Slides</h3>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {views.map((v, i) => (
//             <div key={i} className="bg-white p-4 rounded shadow relative">
//               <div className="mb-3 w-full h-[160px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 {typeof v.img === "string" ? (
//                   <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
//                 ) : (
//                   <Image src={v.img} alt={v.title} fill className="object-cover" />
//                 )}
//               </div>
//               <h4 className="font-semibold">{v.title}</h4>
//               <p className="text-sm text-gray-600">{v.subtitle}</p>

//               <div className="flex gap-3 justify-end mt-3">
//                 <button
//                   className="text-blue-600 text-sm cursor-pointer z-20 "
//                   onClick={() => {
//                     setEditingIndex(i);
//                     setEditForm({
//                       title: v.title,
//                       subtitle: v.subtitle,
//                       img: typeof v.img === "string" ? v.img : "",
//                     });
//                     setEditPreview(null);
//                   }}
//                 >
//                   Quick Edit
//                 </button>

//                 <button
//                   className="text-red-600 text-sm cursor-pointer z-20 "
//                   onClick={() => {
//                     if (confirm("Delete this slide?")) deleteHero(i);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       {editingIndex !== null && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px] relative">
//             <button
//               onClick={() => setEditingIndex(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
//             >
//               <X size={20} />
//             </button>

//             <h3 className="text-xl font-semibold mb-4">Edit Slide</h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 value={editForm.title}
//                 onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
//                 placeholder="Title"
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="text"
//                 value={editForm.subtitle}
//                 onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
//                 placeholder="Subtitle"
//                 className="border p-2 rounded w-full"
//               />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(ev) => {
//                   const f = ev.target.files?.[0];
//                   handleFile(f, setEditPreview);
//                 }}
//               />
//               <div className="mt-2">
//                 <p className="text-sm text-gray-600 mb-1">Preview</p>
//                 <img
//                   src={editPreview ?? editForm.img}
//                   alt="Preview"
//                   className="max-h-48 w-full object-cover rounded"
//                 />
//               </div>

//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   onClick={() => setEditingIndex(null)}
//                   className="border px-4 py-2 rounded cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleEditSave}
//                   className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



















// "use client";

// import React, { useEffect, useState } from "react";
// import { useHeroStore, HeroObject } from "@/presentation/stores/heroStore";
// import Image from "next/image";

// export default function HeroAdminPage() {
//   const { views, addHero, updateHero, deleteHero, loadFromStorage, clearAll } =
//     useHeroStore();

//   // load persisted on mount
//   useEffect(() => {
//     loadFromStorage();
//   }, [loadFromStorage]);

//   const [form, setForm] = useState({ title: "", subtitle: "" });
//   const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(null);

//   // handle file change -> create data URL preview
//   const handleFile = (file?: File) => {
//     if (!file) {
//       setSelectedFilePreview(null);
//       return;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//       setSelectedFilePreview(reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.title.trim() || !form.subtitle.trim()) return;

//     const hero: HeroObject = {
//       title: form.title,
//       subtitle: form.subtitle,
//       img: selectedFilePreview ?? views[0]?.img ?? "", // dataURL or fallback
//     };

//     addHero(hero);
//     setForm({ title: "", subtitle: "" });
//     setSelectedFilePreview(null);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-2xl font-bold">Hero Manager</h2>
//         <p className="text-sm text-gray-600">Add, edit and remove hero slides</p>
//       </div>

//       <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow space-y-3">
//         <div className="grid md:grid-cols-3 gap-3 items-center">
//           <input
//             type="text"
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             placeholder="Title"
//             className="border p-2 rounded col-span-1 md:col-span-1"
//             required
//           />
//           <input
//             type="text"
//             value={form.subtitle}
//             onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
//             placeholder="Subtitle"
//             className="border p-2 rounded col-span-1 md:col-span-1"
//             required
//           />

//           <div className="col-span-1 md:col-span-1">
//             <label className="block text-sm mb-1">Image (optional)</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(ev) => {
//                 const f = ev.target.files?.[0];
//                 handleFile(f);
//               }}
//               className="text-sm"
//             />
//           </div>
//         </div>

//         {selectedFilePreview && (
//           <div className="mt-2">
//             <p className="text-sm text-gray-600 mb-1">Preview</p>
//             <img src={selectedFilePreview} alt="preview" className="max-h-40 rounded" />
//           </div>
//         )}

//         <div className="flex gap-2">
//           <button
//             type="submit"
//             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
//           >
//             Add Slide
//           </button>

//           <button
//             type="button"
//             onClick={() => {
//               setForm({ title: "", subtitle: "" });
//               setSelectedFilePreview(null);
//             }}
//             className="px-4 py-2 rounded border"
//           >
//             Reset
//           </button>

//           <button
//             type="button"
//             onClick={() => {
//               clearAll();
//             }}
//             className="ml-auto text-sm text-red-600"
//           >
//             Reset to Defaults
//           </button>
//         </div>
//       </form>

//       <div>
//         <h3 className="font-semibold mb-3">Existing Slides</h3>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {views.map((v, i) => (
//             <div key={i} className="bg-white p-4 rounded shadow">
//               {/* Use native <img> for preview in admin since v.img may be string or StaticImageData */}
//               <div className="mb-3 w-full h-[160px] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
//                 {typeof v.img === "string" ? (
//                   // dataURL or path
//                   // show using native <img> to avoid next/image optimization issues
//                   // but admin preview is fine with <img>
//                   // keep styles so it fits
//                   <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
//                 ) : (
//                   <Image src={v.img} alt={v.title} fill className="object-cover" />
//                 )}
//               </div>

//               <h4 className="font-semibold">{v.title}</h4>
//               <p className="text-sm text-gray-600">{v.subtitle}</p>

//               <div className="flex gap-3 justify-end mt-3">
//                 <button
//                   className="text-blue-600 text-sm"
//                   onClick={() => {
//                     // quick edit example: toggle "(Updated)" tag
//                     const newTitle = v.title.endsWith(" (Updated)") ? v.title.replace(" (Updated)", "") : v.title + " (Updated)";
//                     updateHero(i, { title: newTitle });
//                   }}
//                 >
//                   Quick Edit
//                 </button>

//                 <button
//                   className="text-red-600 text-sm"
//                   onClick={() => {
//                     if (confirm("Delete this slide?")) deleteHero(i);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
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
//       img: views[0].img,
//     });
//     setForm({ title: "", subtitle: "" });
//   };

//   return (
//     <div className="space-y-8">
//       {/* Header */}
//       <div>
//         <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
//           Hero Manager
//         </h2>
//         <p className="text-gray-600 text-sm md:text-base">
//           Manage your homepage hero slides here.
//         </p>
//       </div>

//       {/* Add new hero */}
//       <div className="bg-white p-4 md:p-6 rounded-lg shadow space-y-4">
//         <h3 className="text-lg md:text-xl font-semibold text-gray-700">
//           Add New Hero
//         </h3>
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
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {views.map((hero, i) => (
//           <div
//             key={i}
//             className="bg-white p-4 shadow rounded-lg relative hover:shadow-lg transition"
//           >
//             <Image
//               src={hero.img}
//               alt={hero.title}
//               width={400}
//               height={200}
//               className="rounded-lg mb-3 w-full object-cover"
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








// // "use client";

// // import { useHeroStore } from "@/presentation/stores/heroStore";
// // import Image from "next/image";
// // import React, { useState } from "react";

// // export default function Dashboard() {
// //   const { views, addHero, updateHero, deleteHero } = useHeroStore();
// //   const [form, setForm] = useState({ title: "", subtitle: "" });

// //   const handleAdd = () => {
// //     if (!form.title.trim() || !form.subtitle.trim()) return;
// //     addHero({
// //       title: form.title,
// //       subtitle: form.subtitle,
// //       img: views[0].img,
// //     });
// //     setForm({ title: "", subtitle: "" });
// //   };

// //   return (
// //     <div className="space-y-8">
// //       {/* Header */}
// //       <div>
// //         <h2 className="text-3xl font-bold mb-2 text-blue-900">Hero Manager</h2>
// //         <p className="text-gray-600">Manage your homepage hero slides here.</p>
// //       </div>

// //       {/* Add new hero */}
// //       <div className="bg-white p-6 rounded-lg shadow space-y-4">
// //         <h3 className="text-xl font-semibold text-gray-700">Add New Hero</h3>
// //         <div className="flex flex-col md:flex-row gap-3">
// //           <input
// //             type="text"
// //             value={form.title}
// //             onChange={(e) => setForm({ ...form, title: e.target.value })}
// //             placeholder="Hero title"
// //             className="border p-2 rounded flex-1"
// //           />
// //           <input
// //             type="text"
// //             value={form.subtitle}
// //             onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
// //             placeholder="Hero subtitle"
// //             className="border p-2 rounded flex-1"
// //           />
// //           <button
// //             onClick={handleAdd}
// //             className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>

// //       {/* Hero List */}
// //       <div className="grid md:grid-cols-2 gap-6">
// //         {views.map((hero, i) => (
// //           <div
// //             key={i}
// //             className="bg-white p-5 shadow rounded-lg relative hover:shadow-lg transition"
// //           >
// //             <Image
// //               src={hero.img}
// //               alt={hero.title}
// //               width={500}
// //               height={250}
// //               className="rounded-lg mb-3"
// //             />
// //             <h3 className="font-semibold text-lg">{hero.title}</h3>
// //             <p className="text-gray-600">{hero.subtitle}</p>

// //             <div className="flex justify-end gap-3 mt-4">
// //               <button
// //                 onClick={() =>
// //                   updateHero(i, { title: hero.title + " (Updated)" })
// //                 }
// //                 className="text-blue-700 font-medium hover:underline"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => deleteHero(i)}
// //                 className="text-red-600 font-medium hover:underline"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }







// // "use client";

// // import { useHeroStore } from "@/presentation/stores/heroStore";
// // import Image from "next/image";
// // import React, { useState } from "react";

// // export default function Dashboard() {
// //   const { views, addHero, updateHero, deleteHero } = useHeroStore();
// //   const [form, setForm] = useState({ title: "", subtitle: "" });

// //   const handleAdd = () => {
// //     if (!form.title.trim() || !form.subtitle.trim()) return;
// //     addHero({
// //       title: form.title,
// //       subtitle: form.subtitle,
// //       img: views[0].img, // temporary placeholder
// //     });
// //     setForm({ title: "", subtitle: "" });
// //   };

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

// //       {/* Add new hero */}
// //       <div className="mb-6 space-x-2">
// //         <input
// //           type="text"
// //           value={form.title}
// //           onChange={(e) => setForm({ ...form, title: e.target.value })}
// //           placeholder="Hero title"
// //           className="border p-2 rounded"
// //         />
// //         <input
// //           type="text"
// //           value={form.subtitle}
// //           onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
// //           placeholder="Hero subtitle"
// //           className="border p-2 rounded"
// //         />
// //         <button
// //           onClick={handleAdd}
// //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //         >
// //           Add Hero
// //         </button>
// //       </div>

// //       {/* List existing hero sections */}
// //       <div className="grid md:grid-cols-2 gap-4">
// //         {views.map((hero, i) => (
// //           <div key={i} className="bg-white p-4 shadow rounded">
// //             <Image
// //               src={hero.img}
// //               alt={hero.title}
// //               width={400}
// //               height={200}
// //               className="rounded mb-3"
// //             />
// //             <h2 className="font-semibold text-lg">{hero.title}</h2>
// //             <p className="text-gray-600">{hero.subtitle}</p>

// //             <div className="flex justify-end gap-2 mt-3">
// //               <button
// //                 onClick={() =>
// //                   updateHero(i, { title: hero.title + " (Updated)" })
// //                 }
// //                 className="text-blue-600 hover:underline"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => deleteHero(i)}
// //                 className="text-red-600 hover:underline"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



import { create } from "zustand";
import { StaticImageData } from "next/image";
import img1 from "../../../public/images/mfm-logomain.jpg";
import img2 from "../../../public/images/mfm-ijaiye-pics.png";

export type HeroImage = StaticImageData | string;

export interface HeroObject {
  title: string;
  subtitle: string;
  img: HeroImage;
}

interface HeroState {
  count: number;
  views: HeroObject[];
  next: () => void;
  prev: () => void;
   auto: () => () => void; // ✅ explicitly returns a cleanup function
  setCount: (index: number) => void;
  addHero: (hero: HeroObject) => void;
  updateHero: (index: number, updated: Partial<HeroObject>) => void;
  deleteHero: (index: number) => void;
  loadFromStorage: () => void;
  clearAll: () => void;
}

const STORAGE_KEY = "mfm_hero_store_v1";

export const useHeroStore = create<HeroState>((set, get) => ({
  count: 0,

  views: [
    {
      title: "MFM IJAIYE",
      subtitle: "Mountain of Fire and Miracles Ministries, Ijaiye Parish",
      img: img1,
    },
    {
      title: "MFM IJAIYE SECOND",
      subtitle: "Welcome to another view of the church",
      img: img2,
    },
  ],

  setCount: (index) => set({ count: index }),

  next: () =>
    set((state) => ({
      count: state.views.length
        ? (state.count + 1) % state.views.length
        : 0,
    })),

  prev: () =>
    set((state) => ({
      count:
        state.views.length === 0
          ? 0
          : (state.count - 1 + state.views.length) % state.views.length,
    })),

  auto: () => {
    if (typeof window === "undefined") return () => {}; // ✅ still always return function
    const interval = setInterval(() => {
      get().next();
    }, 5000);
    return () => clearInterval(interval);
  },

  addHero: (hero) =>
    set((state) => {
      const views = [...state.views, hero];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
      return { views };
    }),

  updateHero: (index, updated) =>
    set((state) => {
      const views = state.views.map((v, i) =>
        i === index ? { ...v, ...updated } : v
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
      return { views };
    }),

  deleteHero: (index) =>
    set((state) => {
      const views = state.views.filter((_, i) => i !== index);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
      return { views, count: Math.max(0, Math.min(state.count, views.length - 1)) };
    }),

  loadFromStorage: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        set({ views: parsed, count: 0 });
      }
    }
  },

  clearAll: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({
      views: [
        {
          title: "MFM IJAIYE",
          subtitle:
            "Mountain of Fire and Miracles Ministries, Ijaiye Parish",
          img: img1,
        },
        {
          title: "MFM IJAIYE SECOND",
          subtitle: "Welcome to another view of the church",
          img: img2,
        },
      ],
      count: 0,
    });
  },
}));





// // presentation/stores/heroStore.ts
// import { create } from "zustand";
// import { StaticImageData } from "next/image";

// import img1 from "../../../public/images/mfm-logomain.jpg";
// import img2 from "../../../public/images/mfm-ijaiye-pics.png";

// export type HeroImage = StaticImageData | string; // string will be dataURL or public path

// export interface HeroObject {
//   title: string;
//   subtitle: string;
//   img: HeroImage;
// }

// interface HeroState {
//   count: number;
//   views: HeroObject[];
//   next: () => void;
//   prev: () => void;
//   auto: () => void;
//   setCount: (index: number) => void; // ✅ added
//   // CRUD
//   addHero: (hero: HeroObject) => void;
//   updateHero: (index: number, updated: Partial<HeroObject>) => void;
//   deleteHero: (index: number) => void;

//   // persistence helpers
//   loadFromStorage: () => void;
//   clearAll: () => void;
// }

// const STORAGE_KEY = "mfm_hero_store_v1";

// export const useHeroStore = create<HeroState>((set, get) => ({
//   count: 0,
//   setCount: (index: number) => set({ count: index }),

//   views: [
//     {
//       title: "MFM IJAIYE",
//       subtitle: "Mountain of Fire and Miracles Ministries, Ijaiye Parish",
//       img: img1,
//     },
//     {
//       title: "MFM IJAIYE SECOND",
//       subtitle: "Welcome to another view of the church",
//       img: img2,
//     },
//   ],

//   next: () =>
//     set((state) => ({
//       count: state.views.length ? (state.count + 1) % state.views.length : 0,
//     })),

//   prev: () =>
//     set((state) => ({
//       count:
//         state.views.length === 0
//           ? 0
//           : (state.count - 1 + state.views.length) % state.views.length,
//     })),

//   auto: () => {
//     setInterval(() => {
//       get().next();
//     }, 5000);
//   },

//   addHero: (hero) =>
//     set((state) => {
//       const views = [...state.views, hero];
//       // persist
//       try {
//         const serializable = views.map((v) => ({
//           ...v,
//           // StaticImageData cannot be serialized; keep imported public path as string if possible
//           img: typeof v.img === "string" ? v.img : (v.img as any).src ?? v.img,
//         }));
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
//       } catch (e) {
//         console.warn("persist addHero failed", e);
//       }
//       return { views };
//     }),

//   updateHero: (index, updated) =>
//     set((state) => {
//       const views = state.views.map((v, i) => (i === index ? { ...v, ...updated } : v));
//       try {
//         const serializable = views.map((v) => ({
//           ...v,
//           img: typeof v.img === "string" ? v.img : (v.img as any).src ?? v.img,
//         }));
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
//       } catch (e) {
//         console.warn("persist updateHero failed", e);
//       }
//       return { views };
//     }),

//   deleteHero: (index) =>
//     set((state) => {
//       const views = state.views.filter((_, i) => i !== index);
//       try {
//         const serializable = views.map((v) => ({
//           ...v,
//           img: typeof v.img === "string" ? v.img : (v.img as any).src ?? v.img,
//         }));
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
//       } catch (e) {
//         console.warn("persist deleteHero failed", e);
//       }
//       // ensure count safe
//       const count = Math.max(0, Math.min(state.count, views.length - 1));
//       return { views, count };
//     }),

//   // load stored state from localStorage (call on app start in a client component)
//   loadFromStorage: () => {
//     try {
//       const raw = localStorage.getItem(STORAGE_KEY);
//       if (!raw) return;
//       const parsed = JSON.parse(raw) as Array<{ title: string; subtitle: string; img: string }>;
//       // parsed img will be string (either data URL or public path)
//       set({
//         views: parsed.map((p) => ({ title: p.title, subtitle: p.subtitle, img: p.img })),
//         count: 0,
//       });
//     } catch (e) {
//       console.warn("failed to load hero store", e);
//     }
//   },

//   clearAll: () => {
//     localStorage.removeItem(STORAGE_KEY);
//     set({
//       views: [
//         {
//           title: "MFM IJAIYE",
//           subtitle: "Mountain of Fire and Miracles Ministries, Ijaiye Parish",
//           img: img1,
//         },
//         {
//           title: "MFM IJAIYE SECOND",
//           subtitle: "Welcome to another view of the church",
//           img: img2,
//         },
//       ],
//       count: 0,
//     });
//   },
// }));



// import { create } from "zustand";
// import { StaticImageData } from "next/image";

// import img1 from "../../../public/images/mfm-logomain.jpg";
// import img2 from "../../../public/images/mfm-ijaiye-pics.png";

// export interface HeroObject {
//   title: string;
//   subtitle: string;
//   img: StaticImageData; // ✅ correct type for imported image
// }

// interface HeroState {
//   count: number;
//   views: HeroObject[];
//   next: () => void;
//   prev: () => void;
//   auto: () => void;

//    // ✅ Admin CRUD operations
//   addHero: (hero: HeroObject) => void;
//   updateHero: (index: number, updated: Partial<HeroObject>) => void;
//   deleteHero: (index: number) => void;
// }

// export const useHeroStore = create<HeroState>((set, get) => ({
//   count: 0,
//   views: [
//     {
//       title: "MFM IJAIYE",
//       subtitle: "Mountain of Fire and Miracles Ministries, Ijaiye Parish",
//       img: img1,
//     },
//     {
//       title: "MFM IJAIYE SECOND",
//       subtitle: "Welcome to another view of the church",
//       img: img2,
//     },
//   ],

//   next: () =>
//     set((state) => ({
//       count: (state.count + 1) % state.views.length,
//     })),

//   prev: () =>
//     set((state) => ({
//       count:
//         (state.count - 1 + state.views.length) % state.views.length,
//     })),

//   auto: () => {
//     setInterval(() => {
//       get().next();
//     }, 5000); // auto-switch every 5s
//   },

//    // ✅ CRUD: add new hero view
//   addHero: (hero) =>
//     set((state) => ({
//       views: [...state.views, hero],
//     })),

//   // ✅ CRUD: update a hero by index
//   updateHero: (index, updated) =>
//     set((state) => ({
//       views: state.views.map((v, i) => (i === index ? { ...v, ...updated } : v)),
//     })),

//   // ✅ CRUD: delete a hero by index
//   deleteHero: (index) =>
//     set((state) => ({
//       views: state.views.filter((_, i) => i !== index),
//     })),

// }));

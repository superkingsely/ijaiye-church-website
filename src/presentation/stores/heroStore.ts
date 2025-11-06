import { create } from "zustand";
import { StaticImageData } from "next/image";

import img1 from "../../../public/images/mfm-logomain.jpg";
import img2 from "../../../public/images/mfm-ijaiye-pics.png";

export interface HeroObject {
  title: string;
  subtitle: string;
  img: StaticImageData; // ✅ correct type for imported image
}

interface HeroState {
  count: number;
  views: HeroObject[];
  next: () => void;
  prev: () => void;
  auto: () => void;

   // ✅ Admin CRUD operations
  addHero: (hero: HeroObject) => void;
  updateHero: (index: number, updated: Partial<HeroObject>) => void;
  deleteHero: (index: number) => void;
}

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

  next: () =>
    set((state) => ({
      count: (state.count + 1) % state.views.length,
    })),

  prev: () =>
    set((state) => ({
      count:
        (state.count - 1 + state.views.length) % state.views.length,
    })),

  auto: () => {
    setInterval(() => {
      get().next();
    }, 5000); // auto-switch every 5s
  },

   // ✅ CRUD: add new hero view
  addHero: (hero) =>
    set((state) => ({
      views: [...state.views, hero],
    })),

  // ✅ CRUD: update a hero by index
  updateHero: (index, updated) =>
    set((state) => ({
      views: state.views.map((v, i) => (i === index ? { ...v, ...updated } : v)),
    })),

  // ✅ CRUD: delete a hero by index
  deleteHero: (index) =>
    set((state) => ({
      views: state.views.filter((_, i) => i !== index),
    })),

}));

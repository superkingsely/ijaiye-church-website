import { create } from "zustand";


export interface HeroState{
    title: string;
    subtitle: string;
    img: string;
}

export const useHeroStore = create(set=>{
    return {
        title: "MFM IJAIYE",
        subtitle: "Mountain of Fire and Miracles Ministries, Ijaiye Parish",
        img: "/path/to/image.jpg"
    }
});
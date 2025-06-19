import { create } from "zustand";
interface Herostate{
    count:number,
    autoSlide:boolean,
    heroh1:string[],
    herop:string[],
    herop1:string[],
    herobg:string[],
    next:()=>void,
    prev:()=>void
}
export const useHerostore=create<Herostate>((set)=>({
    count:0,
    autoSlide:false,
    heroh1:['WELCOME TO THE MOUNTAIN OF FIRE AND MIRACLES MINISTRIES',' WORSHIP WITH US TODAY YOU ARE WELCOME '],
    herop:[` "Nobody comes to the Mountain of Fire and Miracles Ministries by chance.
If you are here, God brought you here." `,` "But upon mount Zion shall be deliverance, and there shall be holiness;
and YOU shall possess their possessions." `],
    herop1:['_Dr D.K Olukoya, General Overseer MFM Worldwide',' _Obadiah 1:17'],
    herobg:['bg-hero','bg-hero1'],
    next:()=>{
        set((state)=>({ count: (state.count + 1)% state.heroh1.length }))
        console.log('from manager')
        // set((state)=>({ heroh1:  }))
    },
    prev:()=>{
        set((state)=>({ count: (state.count - 1 + state.heroh1.length )% state.heroh1.length }))

    }
}))
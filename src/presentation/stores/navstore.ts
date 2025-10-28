import { create } from "zustand";

export interface NavUrl{
    name: string;
    url?: string|undefined;
    submenu?: NavUrl[];
}

interface NavState{
    isOpen: boolean;
    toggle: () => void;
    scrolled: boolean|number;
    setScrolled: (scrolled: boolean|number) => void;
    items: NavUrl[];
   
}

export const useNavStore = create<NavState>(set=>{
    return {
        isOpen: false,
        toggle: () => set(state => {
            console.log(state,'heart',state.isOpen);
            return{ isOpen: !state.isOpen }
        }),
        scrolled: false,
        setScrolled: (scrolled: boolean|number) => set({ scrolled }),
        items: [
            {
                name: "HOME",
                url: "/"
            },
            {
                name: "WHO WE ARE",
                submenu: [
                    {
                        name: "HISTORY",
                        url: "/about"
                    },
                    {
                        name: "MISSION & VISION",
                        url: "/about"
                    },
                    {
                        name: "OUR BELIEFS",
                        url: "/about"
                    },
                    {
                        name: "ADMINISTRATION",
                        url: "/about"
                    },
                    {
                        name: "GROUPS",
                        url: "/about"
                    },
                    {
                        name: "DADDY & MUMMY G.O ",
                        url: "/about"
                    },
                ]
            },
            {
                name: "WHAT WE DO",
                submenu: [
                    {
                        name: "MINISTRIES",
                        submenu: [
                            {
                                name:'MEN OF VALOR',
                                url:'/MOV'
                            },
                            {
                                name:'TEENAGE MINISTRY',
                                url:'/MOV'
                            },
                        ]
                    },
                    {
                        name: "MFM SCHOOLS",
                        url: "/ministries"
                    },
                    {
                        name: "SPECIAL PROGRAMS",
                        url: "/ministries"
                    },
                ]
            },
            {
                name: "RESOURCES",
                submenu: [
                    {
                        name: "PMCH",
                        url: "/events"
                    },
                    {
                        name: "DOWNLOADS",
                        url: "/events"
                    },
                    {
                        name: "MUSIC VIDEOS",
                        url: "/events"
                    },
                ]
            },
            {
                name: "Contact Us",
                url: "/contact"
            },
            {
                name: "LIVE",
                url: "/live"
            },
            {
                name: "GIVE",
                url: "/contact"
            }
        ],
    }
})
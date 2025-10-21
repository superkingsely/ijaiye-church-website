import { create } from "zustand";

interface NavUrl{
    name: string;
    url: string;
    submenu?: NavUrl[];
}

interface NavState{
    isOpen: boolean;
    items: NavUrl[];
    toggle: () => void;
    activeMenu: string | null;
    setActiveMenu: (menu: string | null) => void;
}

export const useNavStore = create<NavState>(set=>{
    return {
        isOpen: false,
        items: [],
        toggle: () => set(state => ({ isOpen: !state.isOpen }))
        ,
        activeMenu: null,
        setActiveMenu: (menu) => set({ activeMenu: menu })
    }
})
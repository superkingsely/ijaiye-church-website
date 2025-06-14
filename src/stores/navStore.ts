import { create } from "zustand";

export interface Menu{
    name:string,
    path:string,
    submenu?:Menu[]|any
}

interface Navstate{
    menu:Menu[],
    isOpen:boolean,
    handleOpen:()=>void
}

export const useNavstate=create<Navstate>((set)=>({
    menu:[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Who We Are',
            path:'',
            submenu:[{
                name:'',
                path:''
            }]
        },
        {
            name:'What We Do',
            path:'',
             submenu:[{
                name:'',
                path:''
            }]
        },
        {
            name:'Resource',
            path:'',
             submenu:[{
                name:'',
                path:''
            }]
        },
        {
            name:'Contact',
            path:''
        },
        {
            name:'Live',
            path:''
        },
        {
            name:'Give',
            path:''
        },
    ],
    isOpen:false,
    handleOpen:()=>{
        set((state)=>({isOpen:!state.isOpen}))
    }
}))
import { create } from "zustand";

export interface Menu{
    name:string,
    path:string,
    submenu?:Menu[]
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
            submenu:[
                {
                name:'History',
                path:''
                },
                {
                name:'Mission and vision',
                path:''
                },
                {
                name:'Our beliefs',
                path:''
                },
                {
                name:'Administration',
                path:''
                },
                {
                name:'Groups',
                path:''
                },
                {
                name:'Daddy and mummy g.o',
                path:''
                },
        ]
        },
        {
            name:'What We Do',
            path:'',
             submenu:[
                {
                name:'Ministries',
                path:''
                },
                {
                name:'Mfm schools',
                path:''
                },
                {
                name:'Moutain top university',
                path:''
                },
                {
                name:'special programmes',
                path:''
                },
        ]
        },
        {
            name:'Resource',
            path:'',
             submenu:[
                {
                name:'pmch',
                path:''
                },
                {
                name:'Downloads',
                path:''
                },
                {
                name:'music video',
                path:''
                },
            ]
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
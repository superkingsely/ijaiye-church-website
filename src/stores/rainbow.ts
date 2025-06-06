// stores/counterStore.ts
import { create } from 'zustand'

interface Rainbowstate {
    count:number,
  colors: string[],
  increase: () => void
  decrease: () => void
  reset: () => void
}

export const useRainbowstore = create<Rainbowstate>((set) => ({
  count:0,
  colors: ['red','blue'],
  increase: () => set((state) => ({ count: (state.count + 1)%state.colors.length })),
  decrease: () => set((state) => ({ count: (state.count - 1+state.colors.length )% state.colors.length })),
  reset: () => set({ count: 0 }),
}))

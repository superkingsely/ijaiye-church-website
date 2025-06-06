// stores/counterStore.ts
import { create } from 'zustand'

interface CounterState {
  count: number,
  images:number[],
  increase: () => void
  decrease: () => void
  reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  images:[1,2,3],
  increase: () => set((state) => ({ count: (state.count + 1)%state.images.length })),
  decrease: () => set((state) => ({ count: (state.count - 1+state.images.length )% state.images.length })),
  reset: () => set({ count: 0 }),
}))

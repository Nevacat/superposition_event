import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type VisitedState = {
  visited: boolean;
};

export type VisitedAction = {
  setVisited: (visit: boolean) => void;
};

export const useVisitedStore = create<VisitedAction & VisitedState>()(
  persist(
    (set) => ({
      visited: false,
      setVisited: (visit: boolean) => set({ visited: visit }),
    }),
    {
      name: 'visited-storage',
      getStorage: () => localStorage,
    },
  ),
);

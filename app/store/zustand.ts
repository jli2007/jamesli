import { create } from "zustand";

type IntroState = {
  hasPlayed: boolean;
  setHasPlayed: () => void;
};

export const useIntroStore = create<IntroState>((set) => ({
  hasPlayed: false,
  setHasPlayed: () => set({ hasPlayed: true }),
}));
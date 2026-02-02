// Zustand store for managing application state

import { create } from "zustand";
import { Make, Model, Grade } from "./data";

interface AppState {
  isAuthenticated: boolean;
  selectedMake: Make | null;
  selectedModel: Model | null;
  selectedGrade: Grade | null;
  setAuthenticated: (value: boolean) => void;
  setSelectedMake: (make: Make | null) => void;
  setSelectedModel: (model: Model | null) => void;
  setSelectedGrade: (grade: Grade | null) => void;
  reset: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  selectedMake: null,
  selectedModel: null,
  selectedGrade: null,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
  setSelectedMake: (make) =>
    set({ selectedMake: make, selectedModel: null, selectedGrade: null }),
  setSelectedModel: (model) =>
    set({ selectedModel: model, selectedGrade: null }),
  setSelectedGrade: (grade) => set({ selectedGrade: grade }),
  reset: () =>
    set({
      isAuthenticated: false,
      selectedMake: null,
      selectedModel: null,
      selectedGrade: null,
    }),
}));

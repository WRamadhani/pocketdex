import { create } from "zustand";

interface UiState {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  // favorites: [],
  // toggleFavorite: (id) => set((state) => ({
  //   favorites: state.favorites.includes(id)
  //     ? state.favorites.filter(favId => favId !== id)
  //     : [...state.favorites, id],
  // })),
}));

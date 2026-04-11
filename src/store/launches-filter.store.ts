import type { LaunchesFilterStore } from "@/types/store.types";
import { create } from "zustand";
export const useLaunchesFilterStore = create<LaunchesFilterStore>((set) => ({
  search: "",
  filter: "all",
  currentPage: 1,

  setSearch: (value) =>
    set(() => ({
      search: value,
      currentPage: 1,
    })),

  setFilter: (value) =>
    set(() => ({
      filter: value,
      currentPage: 1,
    })),

  setCurrentPage: (value) => set(() => ({ currentPage: value })),
}));

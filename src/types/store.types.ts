import type { MissionFilter } from "./mission.types";

export type LaunchesFilterStore = {
  search: string;
  filter: MissionFilter;
  currentPage: number;
  setSearch: (value: string) => void;
  setFilter: (value: MissionFilter) => void;
  setCurrentPage: (value: number) => void;
};

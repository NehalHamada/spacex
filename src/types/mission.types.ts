import type { Launch } from "./launch.types";

export type MissionCardProps = {
  launch: Launch;
};

export type MissionListProps = {
  launches: Launch[];
};

export type MissionSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export type MissionFilter = "all" | "upcoming" | "failed" | "successful";

export type MissionFilterProps = {
  value: MissionFilter;
  onChange: (value: MissionFilter) => void;
};

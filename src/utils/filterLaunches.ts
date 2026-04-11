import type { Launch } from "@/types/launch.types";
import type { MissionFilter } from "@/types/mission.types";

type FilterLaunchesParams = {
  launches: Launch[];
  search: string;
  filter: MissionFilter;
};

export const filterLaunches = ({
  launches,
  search,
  filter,
}: FilterLaunchesParams): Launch[] => {
  let result = [...launches];
  if (search.trim()) {
    result = result.filter((launch) =>
      launch.name.toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (filter === "upcoming") {
    result = result.filter((launch) => launch.upcoming === true);
  }
  if (filter === "failed") {
    result = result.filter(
      (launch) => launch.success === false || launch.failures.length > 0,
    );
  }
  if (filter === "successful") {
    result = result.filter((launch) => launch.success);
  }
  return result;
};

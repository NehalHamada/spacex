import { useLaunchesFilterStore } from "@/store/launches-filter.store";
import { filterLaunches } from "@/utils/filterLaunches";
import { useLaunches } from "./useLaunches";
import { useMemo } from "react";

export const useFilteredLaunches = () => {
  const { data = [], isLoading, isError, error } = useLaunches();
  const { search, filter } = useLaunchesFilterStore();
  const filteredLaunches = useMemo(() => {
    return filterLaunches({
      launches: data,
      search,
      filter,
    });
  }, [data, search, filter]);

  return {
    launches: data,
    filteredLaunches,
    isLoading,
    isError,
    error,
  };
};

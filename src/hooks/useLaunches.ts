import { useQuery } from "@tanstack/react-query";
import { getLaunches } from "../services/launches.service";
import type { Launch } from "../types/launch.types";

export const useLaunches = () => {
  return useQuery<Launch[], Error>({
    queryKey: ["launches"],
    queryFn: getLaunches,
    staleTime: 1000 * 60 * 5,
  });
};

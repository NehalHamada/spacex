import { useQuery } from "@tanstack/react-query";
import { getLaunchesById } from "../services/launches.service";
import type { Launch } from "../types/launch.types";

export const useLaunchById = (id: string) => {
  return useQuery<Launch, Error>({
    queryKey: ["launches", id],
    queryFn: () => getLaunchesById(id),
    enabled: !!id,
  });
};

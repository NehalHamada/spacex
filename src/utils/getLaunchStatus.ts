import type { Launch } from "@/types/launch.types";
import type { MissionFilter } from "@/types/mission.types";

export const getLaunchStatus = (launch: Launch): MissionFilter => {
  if (launch.upcoming) return "upcoming";
  if (launch.success === true) return "successful";
  if (launch.success === false || launch.failures.length > 0) return "failed";
  return "failed";
};

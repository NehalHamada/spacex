import type { MissionCardProps } from "@/types/mission.types";
import { Badge } from "../ui/badge";
import { getLaunchStatus } from "@/utils/getLaunchStatus";

function MissionStats({ launch }: MissionCardProps) {
  const status = getLaunchStatus(launch);
  return (
    <div className="flex items-center gap-2">
      {status === "upcoming" ? (
        <Badge variant="pending">Upcoming</Badge>
      ) : status === "successful" ? (
        <Badge variant="success">Success</Badge>
      ) : (
        <Badge variant="destructive">Failed</Badge>
      )}
    </div>
  );
}

export default MissionStats;

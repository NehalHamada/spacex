import type { MissionListProps } from "@/types/mission.types";
import MissionCard from "./MissionCard";

function MissionList({ launches }: MissionListProps) {
  return (
    <div id="missions" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {launches.map((item) => (
        <MissionCard key={item.id} launch={item} />
      ))}
    </div>
  );
}

export default MissionList;

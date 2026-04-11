import type { MissionFilter, MissionFilterProps } from "@/types/mission.types";
import { Button } from "../ui/button";

const filters: { label: string; value: MissionFilter }[] = [
  { label: "All", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Failed", value: "failed" },
  { label: "Successful", value: "successful" },
];
function MissionFilters({ value, onChange }: MissionFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          type="button"
          variant={value === filter.value ? "default" : "outline"}
          onClick={() => onChange(filter.value)}>
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

export default MissionFilters;

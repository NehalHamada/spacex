import { Search } from "lucide-react";
import { Input } from "../ui/input";
import type { MissionSearchProps } from "@/types/mission.types";

function MissionSearch({ value, onChange }: MissionSearchProps) {
  return (
    <div className="relative w-full md:max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search be mission name ...."
        className="pl-9"
      />
    </div>
  );
}

export default MissionSearch;

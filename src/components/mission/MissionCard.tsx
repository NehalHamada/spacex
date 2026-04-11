import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CalendarDays, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import type { MissionCardProps } from "@/types/mission.types";
import MissionStats from "./MissionStats";
import { formatDate } from "@/utils/formatDate";

function MissionCard({ launch }: MissionCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-x-hidden transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-muted p-2">
          <img src={launch.links.patch.small ?? "/logo.png"} alt="logo.png" />
        </div>
        <div className="flex-1">
          <CardTitle>{launch.name}</CardTitle>
          <CardDescription>
            <span className="font-bold">Flight: </span>
            {launch.flight_number}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <MissionStats launch={launch} />
        <div className="flex items-center gap-2 mt-2 mb-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          {formatDate(launch.date_utc)}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {launch.details || "No details available"}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Link to={`/details/${launch.id}`}>
            <Rocket className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MissionCard;

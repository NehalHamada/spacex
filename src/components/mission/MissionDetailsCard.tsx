import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ExternalLink, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useLaunchById } from "@/hooks/useLaunchById";
import { useParams } from "react-router-dom";
import { formatDate } from "@/utils/formatDate";

function MissionDetailsCard() {
  const { id = "" } = useParams();
  const { data, isLoading, isError, error } = useLaunchById(id);
  if (isLoading) {
    return (
      <section className="space-y-6">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-105 w-full rounded-xl" />
      </section>
    );
  }
  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Failed to load mission details</AlertTitle>
        <AlertDescription>
          {error.message || "Something went wrong"}
        </AlertDescription>
      </Alert>
    );
  }
  if (!data) return <div>No Launch Found</div>;
  return (
    <section className="space-y-6 mx-auto max-w-5xl">
      <Button variant="outline">
        <ArrowLeft className="mr-2 h-4 w-8" />
        <Link to="/">Back To Missions</Link>
      </Button>
      <Card className="mt-13">
        <CardHeader className="gap-4 sm:flex-row sm:items-start">
          <div className="flex h-70 w-50 items-center justify-center rounded-xl p-3">
            <img
              src={
                data.links.patch.large ?? data.links.patch.small ?? "/logo.png"
              }
              alt={data.name}
              className="h-full w-full ms-15 object-contain"
            />
            <div className="space-y-3">
              <CardTitle className="text-3xl">{data.name}</CardTitle>
              <CardDescription>Flight: {data.flight_number}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4 w-247">
              <p className="text-sm font-medium text-muted-foreground">
                Launch Date
              </p>
              <p className="mt-2 text-base font-semibold">
                {formatDate(data.date_utc)}
              </p>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm font-medium text-muted-foreground">
              Mission Details
            </p>
            <p className="mt-2 text-sm text-foreground">
              {data.details || "No Details Available"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.links.webcast && (
              <Button asChild className="sm:p-3">
                <a href={data.links.webcast} target="_blank" rel="noreferrer">
                  Watch Webcast
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default MissionDetailsCard;

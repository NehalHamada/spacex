import type { LaunchesPerYearChartProps } from "@/types/chart.types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function LaunchesPerYearChart({ data }: LaunchesPerYearChartProps) {
  return (
    <Card id="analytics" className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle>Launches Per Year</CardTitle>
        <CardDescription>
          A quick look at SpaceX launch activity over time
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <div className="h-65 min-w-140 sm:h-75 sm:min-w-0 lg:h-85">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default LaunchesPerYearChart;

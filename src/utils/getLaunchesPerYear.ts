import type { ChartItem } from "@/types/chart.types";
import type { Launch } from "@/types/launch.types";

export const getLaunchesPerYear = (launches: Launch[]): ChartItem[] => {
  const grouped = launches.reduce<Record<string, number>>((acc, launch) => {
    const year = new Date(launch.date_utc).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = 0;
    }
    acc[year] += 1;
    return acc;
  }, {});
  return Object.entries(grouped)
    .map(([year, count]) => ({
      year,
      count,
    }))
    .sort((a, b) => Number(a.year) - Number(b.year));
};

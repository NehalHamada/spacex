import { useMemo } from "react";
import { AlertCircle } from "lucide-react";
import LaunchesPerYearChart from "@/components/charts/LaunchesPerYearChart";
import MissionFilters from "@/components/mission/MissionFilters";
import MissionList from "@/components/mission/MissionList";
import MissionSearch from "@/components/mission/MissionSearch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useFilteredLaunches } from "@/hooks/useFilteredLaunches";
import { useLaunchesFilterStore } from "@/store/launches-filter.store";
import { getLaunchesPerYear } from "@/utils/getLaunchesPerYear";
import no from "/search.png";

const ITEMS_PER_PAGE = 30;

function HomePage() {
  const { launches, filteredLaunches, isLoading, isError, error } =
    useFilteredLaunches();
  const { search, filter, currentPage, setSearch, setFilter, setCurrentPage } =
    useLaunchesFilterStore();
  const chartData = useMemo(() => getLaunchesPerYear(launches), [launches]);
  const totalPages = Math.ceil(filteredLaunches.length / ITEMS_PER_PAGE);
  const paginatedLaunches = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredLaunches.slice(startIndex, endIndex);
  }, [filteredLaunches, currentPage]);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (isLoading) {
    return (
      <section className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-4 w-96" />
        </div>
        <Skeleton className="h-80 w-full rounded-xl" />
      </section>
    );
  }
  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Failed to load launches</AlertTitle>
        <AlertDescription>
          {error?.message || "Somethimg Wrong"}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <section className="space-y-8">
      <LaunchesPerYearChart data={chartData} />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <MissionSearch value={search} onChange={setSearch} />
        <MissionFilters value={filter} onChange={setFilter} />
      </div>
      {filteredLaunches.length > 0 ? (
        <>
          <MissionList launches={paginatedLaunches} />
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === pageNumber}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(pageNumber);
                        }}>
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      ) : (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <img src={no} alt="" width={190} height={190} className="mx-auto" />
        </div>
      )}
    </section>
  );
}

export default HomePage;

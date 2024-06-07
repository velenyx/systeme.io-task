import { cn } from "~/shared/lib/utils";
import { Skeleton } from "~/shared/ui/skeleton";
import {
  ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/shared/ui/table";

interface TableSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  columnCount: number;
  rowCount?: number;
  searchableColumnCount?: number;
  filterableColumnCount?: number;
  cellWidths?: string[];
  shrinkZero?: boolean;
}

export function TableSkeleton(props: TableSkeletonProps) {
  const {
    columnCount,
    rowCount = 10,
    searchableColumnCount = 0,
    filterableColumnCount = 0,
    cellWidths = ["auto"],
    shrinkZero = false,
    className,
    ...skeletonProps
  } = props;

  return (
    <div
      className={cn("w-full space-y-2.5 overflow-auto", className)}
      {...skeletonProps}
    >
      <div className="flex w-full items-center justify-between space-x-2 overflow-auto p-1">
        <div className="flex flex-1 items-center space-x-2">
          {searchableColumnCount > 0
            ? Array.from({ length: searchableColumnCount }).map((_, i) => (
                <Skeleton key={i} className="h-7 w-40 lg:w-60" />
              ))
            : null}
          {filterableColumnCount > 0
            ? Array.from({ length: filterableColumnCount }).map((_, i) => (
                <Skeleton key={i} className="h-7 w-[4.5rem] border-dashed" />
              ))
            : null}
        </div>
      </div>
      <div className="rounded-md border">
        <ShadTable>
          <TableHeader>
            {Array.from({ length: 1 }).map((_, i) => (
              <TableRow key={i} className="hover:bg-transparent">
                {Array.from({ length: columnCount }).map((_, j) => (
                  <TableHead
                    key={j}
                    style={{
                      width: cellWidths[j],
                      minWidth: shrinkZero ? cellWidths[j] : "auto",
                    }}
                  >
                    <Skeleton className="h-6 w-full" />
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {Array.from({ length: rowCount }).map((_, i) => (
              <TableRow key={i} className="hover:bg-transparent">
                {Array.from({ length: columnCount }).map((_, j) => (
                  <TableCell
                    key={j}
                    style={{
                      width: cellWidths[j],
                      minWidth: shrinkZero ? cellWidths[j] : "auto",
                    }}
                  >
                    <Skeleton className="h-6 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </ShadTable>
      </div>
    </div>
  );
}

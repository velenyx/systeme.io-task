import { Input } from "~/shared/ui/input";
import { Button } from "~/shared/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import { TableFilter } from "~/components/table/table-filter";
import { ITable } from "~/shared/lib/hooks/use-table";

interface TableToolbarProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  table: ITable<T>;
}

export const TableToolbar = <T extends any>({
  table,
  children,
}: TableToolbarProps<T>) => {
  const isFiltered = Object.keys(table.filters).length > 0;

  return (
    <div className="flex w-full items-center justify-between space-x-2 overflow-auto p-1">
      <div className="flex flex-1 items-center space-x-2">
        {table.searchableColumns.map((field) => (
          <Input
            key={String(field.value) + "input"}
            placeholder={field.placeholder}
            value={table.filters[String(field.value)] || ""}
            onChange={(e) => table.setFilter(field.value, e.target.value)}
            className="h-8 w-40 lg:w-64"
          />
        ))}
        {table.filterableColumns.length > 0 &&
          table.filterableColumns.map((field) => (
            <TableFilter
              key={String(field.value) + "filter"}
              columnKey={String(field.value)}
              table={table}
              title={field.label}
              options={field.options ?? []}
            />
          ))}
        {isFiltered && (
          <Button
            aria-label="Reset filters"
            variant="ghost"
            className="h-8 px-2 lg:px-3"
            onClick={() => table.resetAllFilters()}
          >
            Reset
            <Cross2Icon className="ml-2 size-4" aria-hidden="true" />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};

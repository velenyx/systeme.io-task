import { Input } from "~/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/select";

export const TableToolbar = ({ table }: { table: any }) => {
  return (
    <>
      {table.searchableColumns.map((field) => (
        <Input
          key={field.value}
          placeholder={field.placeholder}
          value={table.filters[field.value] || ""}
          onChange={(e) => table.setFilter(field.value, e.target.value)}
        />
      ))}
      {table.filterableColumns.map((field) => {
        console.log(field);
        return (
          <Select
            key={field.value}
            onValueChange={(value) => table.setFilter(field.value, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      })}
      {/*<button onClick={() => table.resetFilter()}>Reset Filters</button>*/}
    </>
  );
};

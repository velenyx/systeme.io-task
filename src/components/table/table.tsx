import { ReactNode } from "react";
import { getValueByPath } from "~/shared/lib/table";
import {
  ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/shared/ui/table";

interface TableProps<T> {
  data: T[];
  columns: {
    header: string | JSX.Element;
    accessor: keyof T | ((item: T) => ReactNode);
  }[];
  children?: ReactNode;
}

function Table<T>({ data, columns, children }: TableProps<T>) {
  return (
    <div className="w-full space-y-2.5 overflow-auto">
      {children}
      <div className="rounded-md border">
        <ShadTable>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                {columns.map(({ accessor }, index) => (
                  <TableCell
                    key={index}
                    className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                  >
                    {typeof accessor === "function"
                      ? accessor(item)
                      : typeof accessor === "string"
                        ? String(getValueByPath(item, accessor))
                        : String(item[accessor])}
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

export default Table;

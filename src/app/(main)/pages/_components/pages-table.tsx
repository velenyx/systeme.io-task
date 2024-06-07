"use client";

import { useTable } from "~/shared/lib/hooks/use-table";
import Table from "~/components/table/table";
import { TableFilterField } from "~/shared/types/table";
import { TableToolbar } from "~/components/table/table-toolbar";
import { columns } from "./pages-columns";
import { Pages } from "~/entities/pages/types";

export const PagesTable = ({ pages }: { pages: Pages[] }) => {
  const filterFields: TableFilterField<Pages>[] = [
    {
      label: "Title",
      value: "title",
      placeholder: "Filter titles...",
    },
    {
      label: "Active",
      value: "active",
      options: [
        { label: "Active", value: "true" },
        { label: "Inactive", value: "false" },
      ],
    },
  ];

  const { table } = useTable({
    data: pages,
    columns: columns,
    filterFields,
  });

  return (
    <Table data={table.data} columns={table.columns}>
      <TableToolbar table={table} />
    </Table>
  );
};

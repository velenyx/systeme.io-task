"use client";

import { useTable } from "~/shared/lib/hooks/use-table";
import Table from "~/components/table/table";
import { TableFilterField } from "~/shared/types/table";
import { TableToolbar } from "~/components/table/table-toolbar";
import { columns } from "./price-plan-columns";
import { PricePlan } from "~/entities/price-plans/types";

export const PricePlanTable = ({ pricePlans }: { pricePlans: PricePlan[] }) => {
  const filterFields: TableFilterField<PricePlan>[] = [
    {
      label: "Description",
      value: "description",
      placeholder: "Filter description...",
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
    data: pricePlans,
    columns: columns,
    filterFields,
  });

  return (
    <Table data={table.data} columns={table.columns}>
      <TableToolbar table={table} />
    </Table>
  );
};

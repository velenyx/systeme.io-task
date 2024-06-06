import { Product } from "~/entities/products/types";
import { useTable } from "~/shared/lib/hooks/use-table";
import Table from "~/components/table/table";
import { TableFilterField } from "~/shared/types/table";
import { TableToolbar } from "~/components/table/table-toolbar";
import { columns } from "./products-columns";

export const ProductsTable = ({ products }: { products: Product[] }) => {
  const filterFields: TableFilterField<Product>[] = [
    {
      label: "Name",
      value: "name",
      placeholder: "Filter names...",
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
    data: products,
    columns: columns,
    filterFields,
  });

  return (
    <Table data={table.data} columns={table.columns}>
      <TableToolbar table={table} />
    </Table>
  );
};

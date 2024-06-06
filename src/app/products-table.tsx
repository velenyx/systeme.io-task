import { Product } from "~/entities/products/types";
import { useTable } from "~/shared/lib/hooks/use-table";
import Table from "~/components/table/table";
import { UpdateProductDialog } from "~/app/update-product-dialog";
import { ColumnDef, TableFilterField } from "~/shared/types/table";
import { TableToolbar } from "~/components/table/table-toolbar";

const columns: ColumnDef<Product>[] = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Active", accessor: "active" },
  { header: "Size", accessor: (item) => item.options.size },
  {
    header: "Amount",
    accessor: (item) => item.options.amount.toLocaleString(),
  },
  {
    header: "Actions",
    accessor: (product) => <UpdateProductDialog product={product} />,
  },
];

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

import { ColumnDef } from "~/shared/types/table";
import { Product } from "~/entities/products/types";
import { UpdateProductDialog } from "./update-product-dialog";

export const columns: ColumnDef<Product>[] = [
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

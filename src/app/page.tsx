import Table from "~/components/table/table";
import { getProducts } from "~/entities/products/api/get-products";

export default async function Home() {
  const products = await getProducts();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Products</h1>
      <Table
        data={products.data}
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Name", accessor: "name" },
          { header: "Active", accessor: "active" },
          { header: "Size", accessor: (item) => item.options.size },
          {
            header: "Amount",
            accessor: (item) => item.options.amount.toLocaleString(),
          },
        ]}
      />
    </section>
  );
}

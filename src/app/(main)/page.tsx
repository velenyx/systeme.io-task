import { getProducts } from "~/entities/products/api/get-products";
import { ProductsTable } from "./_components/products-table";
import { Suspense } from "react";
import { TableSkeleton } from "~/components/table/table-skeleton";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Products</h1>
      <Suspense
        fallback={
          <TableSkeleton
            columnCount={5}
            searchableColumnCount={1}
            filterableColumnCount={1}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          />
        }
      >
        {products.data.length ? (
          <ProductsTable products={products.data} />
        ) : (
          <p>No products found</p>
        )}
      </Suspense>
    </section>
  );
}

import { getProducts } from "~/entities/products/api/get-products";
import { ProductsTable } from "./_components/products-table";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Products</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {products.data.length ? (
          <ProductsTable products={products.data} />
        ) : (
          <p>No products found</p>
        )}
      </Suspense>
    </section>
  );
}

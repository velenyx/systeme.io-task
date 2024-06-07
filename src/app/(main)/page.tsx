"use client";

import { useEffect, useState } from "react";
import { getProducts } from "~/entities/products/api/get-products";
import { Product } from "~/entities/products/types";
import { ProductsTable } from "./_components/products-table";
import { TableSkeleton } from "~/components/table/table-skeleton";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch pages:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Products</h1>
      {isLoading ? (
        <TableSkeleton
          columnCount={5}
          searchableColumnCount={1}
          filterableColumnCount={1}
          cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
          shrinkZero
        />
      ) : products.length ? (
        <ProductsTable products={products} />
      ) : (
        <p>No products found</p>
      )}
    </section>
  );
}

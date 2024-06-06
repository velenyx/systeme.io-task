"use client";

import { useEffect, useState } from "react";
import { getProducts } from "~/entities/products/api/get-products";
import { Product } from "~/entities/products/types";
import { ProductsTable } from "./_components/products-table";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data.data);
    };
    fetchData();
  }, []);

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Products</h1>
      {products.length ? (
        <ProductsTable products={products} />
      ) : (
        <p>No products found</p>
      )}
    </section>
  );
}

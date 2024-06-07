"use client";

import { getPages } from "~/entities/pages/api/get-pages";
import { useEffect, useState } from "react";
import { Pages } from "~/entities/pages/types";
import { PagesTable } from "./_components/pages-table";
import { TableSkeleton } from "~/components/table/table-skeleton";

export default function PagesPage() {
  const [pages, setPages] = useState<Pages[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getPages();
        setPages(data.data);
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
      <h1 className="mb-2 text-2xl font-bold">Pages</h1>
      {isLoading ? (
        <TableSkeleton
          columnCount={5}
          searchableColumnCount={1}
          filterableColumnCount={1}
          cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
          shrinkZero
        />
      ) : pages.length ? (
        <PagesTable pages={pages} />
      ) : (
        <p>No pages found</p>
      )}
    </section>
  );
}

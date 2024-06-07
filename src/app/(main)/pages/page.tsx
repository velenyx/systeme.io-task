"use client";

import { getPages } from "~/entities/pages/api/get-pages";
import { useEffect, useState } from "react";
import { Pages } from "~/entities/pages/types";
import { PagesTable } from "./_components/pages-table";

export default function PagesPage() {
  const [pages, setPages] = useState<Pages[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPages();
      setPages(data.data);
    };
    fetchData();
  }, []);

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Pages</h1>
      {pages.length ? <PagesTable pages={pages} /> : <p>No pages found</p>}
    </section>
  );
}

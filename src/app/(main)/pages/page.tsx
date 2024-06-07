import { getPages } from "~/entities/pages/api/get-pages";
import { PagesTable } from "./_components/pages-table";
import { Suspense } from "react";
import { TableSkeleton } from "~/components/table/table-skeleton";

export const dynamic = "force-dynamic";

export default async function PagesPage() {
  const pages = await getPages();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Pages</h1>
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
        {pages.data.length ? (
          <PagesTable pages={pages.data} />
        ) : (
          <p>No pages found</p>
        )}
      </Suspense>
    </section>
  );
}

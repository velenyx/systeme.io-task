import { getPages } from "~/entities/pages/api/get-pages";
import { PagesTable } from "./_components/pages-table";
import { Suspense } from "react";

export default async function PagesPage() {
  const pages = await getPages();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Pages</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {pages.data.length ? (
          <PagesTable pages={pages.data} />
        ) : (
          <p>No pages found</p>
        )}
      </Suspense>
    </section>
  );
}

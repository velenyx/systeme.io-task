import { getPages } from "~/entities/pages/api/get-pages";
import { PagesTable } from "./_components/pages-table";

export default async function PagesPage() {
  const pages = await getPages();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Pages</h1>
      {pages.data.length ? (
        <PagesTable pages={pages.data} />
      ) : (
        <p>No pages found</p>
      )}
    </section>
  );
}

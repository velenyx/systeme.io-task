import { getPricePlans } from "~/entities/price-plans/api/get-price-plans";
import { PricePlanTable } from "./_components/price-plan-table";
import { Suspense } from "react";
import { TableSkeleton } from "~/components/table/table-skeleton";

export const dynamic = "force-dynamic";

export default async function PricePlansPage() {
  const pricePlans = await getPricePlans();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Price Plans</h1>
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
        {pricePlans.data.length ? (
          <PricePlanTable pricePlans={pricePlans.data} />
        ) : (
          <p>No price plans found</p>
        )}
      </Suspense>
    </section>
  );
}

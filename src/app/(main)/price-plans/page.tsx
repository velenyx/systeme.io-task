import { getPricePlans } from "~/entities/price-plans/api/get-price-plans";
import { PricePlanTable } from "./_components/price-plan-table";

export default async function PricePlansPage() {
  const pricePlans = await getPricePlans();

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Price Plans</h1>
      {pricePlans.data.length ? (
        <PricePlanTable pricePlans={pricePlans.data} />
      ) : (
        <p>No price plans found</p>
      )}
    </section>
  );
}

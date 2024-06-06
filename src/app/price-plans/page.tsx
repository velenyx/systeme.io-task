"use client";

import { getPricePlans } from "~/entities/price-plans/api/get-price-plans";
import { useEffect, useState } from "react";
import { PricePlan } from "~/entities/price-plans/types";
import { PricePlanTable } from "./_components/price-plan-table";

export default function PricePlansPage() {
  const [pricePlans, setPricePlans] = useState<PricePlan[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPricePlans();
      setPricePlans(data.data);
    };
    fetchData();
  }, []);

  return (
    <section className="container mt-3">
      <h1 className="mb-2 text-2xl font-bold">Price Plans</h1>
      {pricePlans.length ? (
        <PricePlanTable pricePlans={pricePlans} />
      ) : (
        <p>No price plan found</p>
      )}
    </section>
  );
}

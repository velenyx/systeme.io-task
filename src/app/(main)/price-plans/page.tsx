"use client";

import { getPricePlans } from "~/entities/price-plans/api/get-price-plans";
import { useEffect, useState } from "react";
import { PricePlan } from "~/entities/price-plans/types";
import { PricePlanTable } from "./_components/price-plan-table";
import { TableSkeleton } from "~/components/table/table-skeleton";

export default function PricePlansPage() {
  const [pricePlans, setPricePlans] = useState<PricePlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getPricePlans();
        setPricePlans(data.data);
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
      <h1 className="mb-2 text-2xl font-bold">Price Plans</h1>
      {isLoading ? (
        <TableSkeleton
          columnCount={5}
          searchableColumnCount={1}
          filterableColumnCount={1}
          cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
          shrinkZero
        />
      ) : pricePlans.length ? (
        <PricePlanTable pricePlans={pricePlans} />
      ) : (
        <p>No price plans found</p>
      )}
    </section>
  );
}

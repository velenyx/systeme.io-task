import { ColumnDef } from "~/shared/types/table";
import { PricePlan } from "~/entities/price-plans/types";
import { UpdatePricePlanDialog } from "./update-price-plan-dialog";

export const columns: ColumnDef<PricePlan>[] = [
  { header: "ID", accessor: "id" },
  { header: "Description", accessor: "description" },
  { header: "Active", accessor: "active" },
  { header: "Created At", accessor: "createdAt" },
  { header: "Removed At", accessor: "removedAt" },
  {
    header: "Actions",
    accessor: (pricePlan) => <UpdatePricePlanDialog pricePlan={pricePlan} />,
  },
];

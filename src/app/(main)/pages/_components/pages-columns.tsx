import { ColumnDef } from "~/shared/types/table";
import { Pages } from "~/entities/pages/types";
import { UpdatePageDialog } from "./update-page-dialog";

export const columns: ColumnDef<Pages>[] = [
  { header: "ID", accessor: "id" },
  { header: "Title", accessor: "title" },
  { header: "Active", accessor: "active" },
  { header: "Updated At", accessor: "updatedAt" },
  { header: "Published At", accessor: "publishedAt" },
  {
    header: "Actions",
    accessor: (page) => <UpdatePageDialog page={page} />,
  },
];

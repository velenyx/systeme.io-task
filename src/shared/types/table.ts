import { ReactNode } from "react";

export interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
}

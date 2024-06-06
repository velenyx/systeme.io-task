import { ReactNode } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface TableFilterField<TData> {
  label: string;
  value: keyof TData;
  placeholder?: string;
  options?: Option[];
}

export interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
}

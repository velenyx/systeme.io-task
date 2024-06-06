import { ReactNode } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface TableFilterField<T> {
  label: string;
  value: keyof T;
  placeholder?: string;
  options?: Option[];
}

export interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
}

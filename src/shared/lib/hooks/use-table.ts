"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { ColumnDef, TableFilterField } from "~/shared/types/table";

export interface ITable<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filters: Record<string, string>;
  setFilter: (field: keyof T | string, value: string | string[]) => void;
  resetAllFilters: () => void;
  resetFilter: (field: keyof T | string) => void;
  searchableColumns: TableFilterField<T>[];
  filterableColumns: TableFilterField<T>[];
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filterFields: TableFilterField<T>[];
}

export const useTable = <T>({
  data,
  columns,
  filterFields,
}: DataTableProps<T>) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<Record<string, string>>({});

  const { searchableColumns, filterableColumns } = React.useMemo(() => {
    return {
      searchableColumns: filterFields.filter((field) => !field.options),
      filterableColumns: filterFields.filter((field) => field.options),
    };
  }, [filterFields]);

  // Функция для установки или обновления фильтров
  const setFilter = useCallback(
    (field: keyof T | string, value: string | string[]) => {
      const newSearchParams = new URLSearchParams(searchParams);
      const valueString = Array.isArray(value) ? value.join(",") : value;

      if (valueString) {
        newSearchParams.set(String(field), valueString);
        setFilters((prev) => ({ ...prev, [field]: valueString }));
      } else {
        newSearchParams.delete(String(field));
        setFilters((prev) => {
          const newFilters = { ...prev };
          delete newFilters[field as string];
          return newFilters;
        });
      }
      router.push(`${pathname}?${newSearchParams.toString()}`);
    },
    [searchParams],
  );

  // Функция для сброса фильтра
  const resetFilter = useCallback(
    (field: keyof T | string) => {
      setFilter(field, "");
    },
    [setFilter],
  );

  const resetAllFilters = useCallback(() => {
    setFilters({});
    router.push(pathname);
  }, [router, pathname]);

  // Применение фильтров к данным
  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        filterFields?.every((field) => {
          const itemValue = item[field.value as keyof T];
          const filterValue = filters[field.value as string];

          if (!filterValue) {
            return true; // No filter applied for this field
          }

          const filterValues =
            typeof filterValue === "string"
              ? filterValue.split(",")
              : filterValue;

          return filterValues.some((fv) =>
            String(itemValue).toLowerCase().includes(fv.toLowerCase()),
          );
        }),
      ),
    [data, filterFields, filters],
  );

  return {
    table: {
      data: filteredData,
      columns,
      filters,
      setFilter,
      resetAllFilters,
      resetFilter,
      searchableColumns,
      filterableColumns,
    },
  };
};

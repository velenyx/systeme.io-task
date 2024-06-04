"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { ColumnDef } from "~/shared/types/table";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filterFields: any[];
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
    (field: keyof T | string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      value ? newSearchParams.set(field, value) : newSearchParams.delete(field);
      if (value) {
        newSearchParams.set(field, value);
        setFilters((prev) => ({ ...prev, [field]: value }));
      } else {
        newSearchParams.delete(field);
        setFilters((prev) => {
          const newFilters = { ...prev };
          delete newFilters[field];
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

  // Применение фильтров к данным
  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        filterFields?.every((field) => {
          const itemValue =
            typeof field.value === "string"
              ? item[field.value as keyof T]
              : item[field.value];
          const filterValue = filters[field.value as string];
          return filterValue
            ? String(itemValue)
                .toLowerCase()
                .includes(filterValue.toLowerCase())
            : true;
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
      resetFilter,
      searchableColumns,
      filterableColumns,
    },
  };
};

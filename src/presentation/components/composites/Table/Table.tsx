import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ChangeEvent } from "react";
import { TableBody, TableHeader, TablePaginator } from "./components";
import { Change } from "./statics";
import "./styles.css";

interface TableProps<T> {
  data: T[];
  pageSize: number;
  page: number;
  totalRecords: number;
  columns: ColumnDef<T, any>[];
  getTableRecords: (page: number, pageSize: number) => void;
}

export const Table = <T,>({
  data,
  pageSize,
  page,
  totalRecords,
  columns,
  getTableRecords,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const lastPage = Math.ceil(totalRecords / pageSize);
  const isLastPage = page === lastPage;

  const calculatePageRange = () => {
    let secondValue = page * pageSize;
    let firstValue = secondValue - pageSize + 1;
    secondValue = Math.min(secondValue, totalRecords);
    return `${firstValue} - ${secondValue} de `;
  };

  const pageRange = calculatePageRange();

  const changePage = (value: Change) => {
    const pageMapping: Record<Change, number> = {
      [Change.FIRST]: 1,
      [Change.PREVIOUS]: Math.max(page - 1, 1),
      [Change.NEXT]: Math.min(page + 1, lastPage),
      [Change.LAST]: lastPage,
    };

    const newPage = pageMapping[value];
    getTableRecords(newPage, pageSize);
  };

  const changePageSize = (event: ChangeEvent<HTMLSelectElement>) =>
    getTableRecords(1, parseInt(event.target.value));

  return (
    <>
      <div className="table-container">
        <table>
          <TableHeader groups={table.getHeaderGroups()} />
          <TableBody rows={table.getRowModel().rows} pageSize={pageSize} />
        </table>
      </div>
      <TablePaginator
        {...{
          page,
          isLastPage,
          pageSize,
          pageRange,
          totalRecords,
          changePage,
          changePageSize,
        }}
      />
    </>
  );
};

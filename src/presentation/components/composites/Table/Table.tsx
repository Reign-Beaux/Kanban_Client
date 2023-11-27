import { Button } from "@/presentation/components/composites";
import {
  IconAngleLeft,
  IconAngleRight,
  IconAnglesLeft,
  IconAnglesRight,
} from "@/presentation/components/elements";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import "./styles.css";
import { useEffect, useState } from "react";

export interface TableSettings<T> {
  data: T[];
  currentPage: number;
  totalRecords: number;
}

export const tableSettingsEmpty = <T,>() => {
  return {
    data: [] as T[],
    currentPage: 0,
    totalRecords: 0,
  } as TableSettings<T>;
};

interface TableProps<T> {
  settings: TableSettings<T>;
  columns: ColumnDef<T, any>[];
  getTableRecords: (page: number) => void;
}

enum Change {
  FIRST,
  PREVIOUS,
  NEXT,
  LAST,
}

export const Table = <T,>({
  settings: { data, currentPage, totalRecords },
  columns,
  getTableRecords,
}: TableProps<T>) => {
  const pageSizes = [10, 20, 50];
  const pageDefault = 10;
  const [pageSize, setPageSize] = useState(pageDefault);
  const [pageRange, setPageRange] = useState("0 - 0 de ");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const changePageSize = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setPageSize(parseInt(event.target.value));

  const calculatePageRange = () => {
    let secondValue = currentPage * pageSize;
    let firstValue = secondValue - pageSize + 1;
    secondValue = Math.min(secondValue, totalRecords);
    setPageRange(`${firstValue} - ${secondValue} de `);
  };

  const changePage = (value: Change) => {
    debugger;
    const lasPage = totalRecords / pageSize;
    const pageMapping: Record<Change, number> = {
      [Change.FIRST]: 1,
      [Change.PREVIOUS]: Math.max(currentPage - 1, 1),
      [Change.NEXT]: Math.min(currentPage + 1, Math.ceil(lasPage)),
      [Change.LAST]: Math.ceil(lasPage),
    };

    const newPage = pageMapping[value];
    getTableRecords(newPage);
  };

  useEffect(() => {
    console.log("modificando currentPage");
    calculatePageRange();
  }, [currentPage]);

  useEffect(() => {
    changePage(Change.FIRST);
  }, [pageSize]);

  useEffect(() => {
    console.log("entrando a table");
  }, []);

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      minWidth: header.getSize() > 150 ? `${header.getSize()}px` : `150px`,
                      maxWidth: header.getSize() > 150 ? `${header.getSize()}px` : `150px`,
                    }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
        </table>
      </div>
      <div className="paginator-container">
        <div style={{ width: "fit-content", margin: "5px" }}>
          <label htmlFor="page-sizes">Filas por página </label>
          <select
            id="page-sizes"
            value={pageSize}
            onChange={changePageSize}
            style={{ width: "50px", textAlign: "end" }}>
            {pageSizes.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div style={{ width: "fit-content", margin: "5px" }}>
          {pageRange} {totalRecords}
        </div>
        <Button isIcon onClick={() => changePage(Change.FIRST)} style={{ margin: "5px" }}>
          <IconAnglesLeft />
        </Button>
        <Button isIcon onClick={() => changePage(Change.PREVIOUS)} style={{ margin: "5px" }}>
          <IconAngleLeft />
        </Button>
        <Button isIcon onClick={() => changePage(Change.NEXT)} style={{ margin: "5px" }}>
          <IconAngleRight />
        </Button>
        <Button isIcon onClick={() => changePage(Change.LAST)} style={{ margin: "5px" }}>
          <IconAnglesRight />
        </Button>
      </div>
    </>
  );
};

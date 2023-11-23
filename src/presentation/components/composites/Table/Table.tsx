import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import "./styles.css";
import { Button } from "@/presentation/components/composites";
import {
  IconAngleLeft,
  IconAngleRight,
  IconAnglesLeft,
  IconAnglesRight,
} from "@/presentation/components/elements";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
          Filas por página{" "}
          <select id="frutas" name="frutas" style={{width: "50px", textAlign: "end"}}>
            <option value="manzana">10</option>
            <option value="platano">20</option>
            <option value="fresa">50</option>
          </select>
        </div>
        <div style={{ width: "fit-content", margin: "5px" }}>1 - 10 de 50</div>
        <Button isIcon style={{ margin: "5px" }}>
          <IconAnglesLeft />
        </Button>
        <Button isIcon style={{ margin: "5px" }}>
          <IconAngleLeft />
        </Button>
        <Button isIcon style={{ margin: "5px" }}>
          <IconAngleRight />
        </Button>
        <Button isIcon style={{ margin: "5px" }}>
          <IconAnglesRight />
        </Button>
      </div>
    </>
  );
};

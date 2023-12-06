import { Row, flexRender } from "@tanstack/react-table";

interface TableBodyProps<T> {
  rows: Row<T>[];
  pageSize: number;
}

export const TableBody = <T,>({ rows, pageSize }: TableBodyProps<T>) => {
  const emptyRecords = pageSize - rows.length;

  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
          ))}
        </tr>
      ))}
      {rows.length === 0 ? (
        <tr style={{textAlign: "center"}}>
          <td colSpan={100}>No se encontraron registros</td>
        </tr>
      ) : (
        <>
          {Array.from({ length: emptyRecords }).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td style={{ height: "27px" }}></td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  );
};

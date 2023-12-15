import { HeaderGroup, flexRender } from "@tanstack/react-table";

interface TableHeaderProps<T> {
  groups: HeaderGroup<T>[];
}

export const TableHeader = <T,>({ groups }: TableHeaderProps<T>) => {
  return (
    <thead>
      {groups.map((headerGroup) => (
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
  );
};

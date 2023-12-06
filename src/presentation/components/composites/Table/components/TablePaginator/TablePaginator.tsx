import { Button } from "@/presentation/components/composites";
import { Change } from "@/presentation/components/composites/Table/statics";
import {
  IconAngleLeft,
  IconAngleRight,
  IconAnglesLeft,
  IconAnglesRight,
} from "@/presentation/components/elements";
import "./styles.css";

interface TablePaginatorProps {
  page: number;
  isLastPage: boolean;
  pageSize: number;
  pageRange: string;
  totalRecords: number;
  changePage: (value: Change) => void;
  changePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const pageSizes = [10, 20, 50];

export const TablePaginator = ({
  page,
  isLastPage,
  pageSize,
  pageRange,
  totalRecords,
  changePage,
  changePageSize,
}: TablePaginatorProps) => {
  return (
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
      <Button
        isIcon
        disabled={page === 1}
        onClick={() => changePage(Change.FIRST)}
        style={{ margin: "5px" }}>
        <IconAnglesLeft />
      </Button>
      <Button
        isIcon
        disabled={page === 1}
        onClick={() => changePage(Change.PREVIOUS)}
        style={{ margin: "5px" }}>
        <IconAngleLeft />
      </Button>
      <Button
        isIcon
        disabled={isLastPage}
        onClick={() => changePage(Change.NEXT)}
        style={{ margin: "5px" }}>
        <IconAngleRight />
      </Button>
      <Button
        isIcon
        disabled={isLastPage}
        onClick={() => changePage(Change.LAST)}
        style={{ margin: "5px" }}>
        <IconAnglesRight />
      </Button>
    </div>
  );
};

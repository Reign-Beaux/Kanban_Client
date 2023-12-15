export interface TableSettings<T> {
  data: T[];
  filters: T;
  pageSize: number;
  page: number;
  totalRecords: number;
}

export const tableSettingsEmpty = <T>(): TableSettings<T> => {
  return {
    data: [] as T[],
    filters: null as T,
    pageSize: 0,
    page: 0,
    totalRecords: 0,
  };
};

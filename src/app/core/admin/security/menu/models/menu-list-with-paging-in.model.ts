export class MenuListWithPagingIn {
  constructor(
    public searchString?: string,
    public pageIndex?: number,
    public pageSize?: number,
    public orderByColumn?: string,
    public sortOrder?: string
  ) {
    this.searchString = searchString;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.orderByColumn = orderByColumn;
    this.sortOrder = sortOrder;
  }
}

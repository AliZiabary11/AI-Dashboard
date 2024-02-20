export class MenuTreeListIn {
  constructor(public id?: number, public parentId?: number, public searchString?: string, public pageIndex?: number, public pageSize?: number, public orderByColumn?: string, public sortOrder?: string) {
    this.id = id;
    this.parentId = parentId;
    this.searchString = searchString;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.orderByColumn = orderByColumn;
    this.sortOrder = sortOrder;
  }
}

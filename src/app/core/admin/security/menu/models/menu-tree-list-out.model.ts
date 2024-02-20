export class MenuTreeListOut {
  constructor(public id?: number, public parentId?: number, public moduleName?: string, public title?: string, public icon?: string, public data?: string, public isHide?: boolean, public orderNum?: number, public hasChild?: number, public totalCount?: number) {
    this.id = id;
    this.parentId = parentId;
    this.moduleName = moduleName;
    this.title = title;
    this.icon = icon;
    this.data = data;
    this.isHide = isHide;
    this.orderNum = orderNum;
    this.hasChild = hasChild;
    this.totalCount = totalCount;
  }
}

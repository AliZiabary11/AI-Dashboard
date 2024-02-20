import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuService, MenuListIn, MenuListWithPagingIn } from '@hp/core/admin/security/menu';
import { HpDxDataGridComponent } from '@hp/shared/base-components/hp-dx-data-grid/hp-dx-data-grid.component';
import { ColumnBase } from 'devextreme/common/grids';

@Component({
  selector: 'hp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit , AfterViewInit{

  @ViewChild('selectBox', {static: true}) selectbox?: HpDxDataGridComponent;
  @ViewChild('dataGrid', {static: true}) dataGrid?: HpDxDataGridComponent;

  public listModel: MenuListIn = {};
  public columns: ColumnBase[] = [
    { dataField: 'id', caption: 'شناسه', dataType: 'string' },
    { dataField: 'moduleName', caption: 'نام ماژول', dataType: 'string' },
    { dataField: 'title', caption: 'عنوان', dataType: 'string' },
    { dataField: 'icon', caption: 'آیکون', dataType: 'string' },
    { dataField: 'data', caption: 'دیتا', dataType: 'string' },
    { dataField: 'isHide', caption: 'آیا نمایش داده نشود', dataType: 'string' },
    { dataField: 'orderNum', caption: 'ترتیب نمایش', dataType: 'string' },
  ];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    public readonly menuService: MenuService,
  ) { }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {
    let model: MenuListWithPagingIn = { orderByColumn: 'id', sortOrder: 'desc' };
    this.selectbox?.changeDataSource(model , this.menuService.listWithPagingUrl);
    this.dataGrid?.changeDataSource(model , this.menuService.listWithPagingUrl);

  }

}

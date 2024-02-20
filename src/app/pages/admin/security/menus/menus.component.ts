import { lastValueFrom } from 'rxjs';
import { MenuDeleteIn } from '@hp/core/admin/security/menu/models/menu-delete-in';
import { AlertService } from '@hp/core/general/services/alert.service';
import { HpTreeGridComponent } from '@hp/shared/base-components/hp-tree-grid/hp-tree-grid.component';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { MenuService } from '@hp/core/admin/security/menu/services/menu.service';
import { columnsType } from '@hp/shared/base-components/hp-data-grid/hp-data-grid.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'hp-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenusComponent {
  @ViewChild('grid', { static: false }) grid?: HpTreeGridComponent;
  @ViewChild('savePanel') savePanel: any;
  search = '';
  selectedMenu!: any[];
  isGridVisible = false;
  isGridPanelVisible = false;
  public columns: columnsType[] = [
    { field: 'id', header: 'شناسه', type: 'text' },
    { field: 'moduleName', header: 'نام ماژول', type: 'text' },
    { field: 'title', header: 'عنوان', type: 'text' },
    { field: 'icon', header: 'آیکون', type: 'text' },
    { field: 'data', header: 'دیتا', type: 'text' },
    { field: 'isHide', header: 'آیا نمایش داده نشود', type: 'text' },
    { field: 'orderNum', header: 'ترتیب نمایش', type: 'text' },
  ];

  contextMenuItems: MenuItem[] = [
    {
      label: 'ویرایش',
      icon: 'pi pi-fw pi-pencil',
      command: () => this.onMenuEditClick(),
    },
    {
      label: 'حذف',
      icon: 'pi pi-fw pi-trash',
      command: () => this.onMenuDeleteClick(),
    },
  ];

  constructor(
    public readonly menuService: MenuService,
    private readonly cdr: ChangeDetectorRef,
    private readonly alertService: AlertService
  ) {}

  onMenuInsertClick() {
    this.savePanel.openPanel(false);
  }

  onMenuDeleteClick() {
    var selectedItems = this.grid?.selectedItems;
    if (selectedItems?.length == 1) {
      this.alertService.confirm(
        `حذف منو`,
        `آیا مطمئنین می خواهید منوی ${selectedItems[0].data.title} را حذف کنید؟`,
        () => this.deleteMenu(String(selectedItems![0].data.id))
      );
    } else {
      this.alertService.alert(
        'حذف منو',
        'لطفا یک مورد را برای حذف انتخاب کنید.'
      );
    }
  }

  onMenuEditClick() {
    var selectedItems = this.grid?.selectedItems;
    if (selectedItems?.length == 1) {
      this.savePanel.openPanel(true, selectedItems);
    } else {
      this.alertService.alert(
        'ویرایش منو',
        'لطفا یک مورد را برای ویرایش انتخاب کنید.'
      );
    }
  }

  onMenuRefreshClick(): void {
    this.search = '';
    this.refreshMenuGrid();
  }

  onMenuSearchClick() {
    if (this.search) {
      this.refreshMenuGrid();
    }
  }

  private refreshMenuGrid(): void {
    this.isGridVisible = false;
    this.cdr.detectChanges();
    this.isGridVisible = true;
    this.cdr.detectChanges();
  }

  async deleteMenu(id: string) {
    if (id) {
      var res = await lastValueFrom(
        this.menuService.deleteMenu(new MenuDeleteIn(id), true)
      ).finally(() => {
        this.alertService.toast();
      });
    }
  }

  onGridPanelChanged() {
    if (this.isGridPanelVisible) {
      this.isGridVisible = true;
    }
  }
}

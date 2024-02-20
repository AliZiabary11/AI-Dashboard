import { AdminLayoutService } from '@hp/core/general/services/admin.layout.service';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuService } from '@hp/core/admin/security/menu/services/menu.service';
import { MenuListIn } from '@hp/core/admin/security/menu/models/menu-list-in.model';
import { lastValueFrom } from 'rxjs';
import { ToolsService } from '../../../core/general/services/tools.service';
import { MenuListOut } from '../../../core/admin/security/menu/models/menu-list-out.model';
import { ApiResponse } from '../../../core/general';


@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSidebarComponent implements OnInit {
  model: any[] = [];
  loading: boolean = false;

  constructor(
    public layoutService: AdminLayoutService,
    private readonly menuService: MenuService,
    private readonly cdr: ChangeDetectorRef,
    private readonly toolsService: ToolsService,
  ) { }

  async ngOnInit() {
    this.showLoading();

    var res = await lastValueFrom(this.menuService.list(new MenuListIn())).finally(() => {
      this.hideLoading();
    });

    this.createMenuList(res);


  }

  private createMenuList(res: ApiResponse<MenuListOut[]>) {
    let menuTree: any[] = [];


    if (res.data?.length) {
      menuTree = res.data.map((item: any) => {
        item.label = item.title;
        delete (item.title);
        return item;
      });
      menuTree = this.toolsService.ListToTree(menuTree, 'items');
    }

    this.model = menuTree;
    this.cdr.detectChanges();


    //this.model = [
    //  {
    //    label: 'خانه',
    //    icon: 'pi pi-fw pi-chart-pie',
    //    routerLink: ['/admin'],
    //    items: [
    //      { label: 'داشبورد', icon: 'pi pi-fw pi-chart-pie', /*routerLink: ['/admin'], queryParams: 'data'*/}
    //    ]
    //  },
    //  {
    //    label: 'تست',
    //    items: [
    //      { label: 'صفحه تست', icon: 'pi pi-fw pi-box',  /* routerLink: ['/admin'], queryParams: 'test',*/  },
    //    ]
    //  },
    //];
  }

  private showLoading() {
    this.loading = true;
    this.cdr.detectChanges();
  }

  private hideLoading() {
    this.loading = false;
    this.cdr.detectChanges();
  }
}

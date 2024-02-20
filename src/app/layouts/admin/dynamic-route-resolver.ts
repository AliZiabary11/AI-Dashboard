import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MenuListIn, MenuService } from '@hp/core/admin/security/menu';
import { AdminMenuService } from '@hp/core/general/services/admin.menu.service';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicRoutingResolver implements Resolve<any> {
  constructor(
    private readonly menuService: MenuService,
    private readonly adminMenuService: AdminMenuService
    ) { 
    
  }

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<any> | Promise<any> | any> {

    // Access sub-address (segments)
    const segments: string = route.url.map(segment => segment.path)[0]; // Array of segment paths

    // Access query parameters
    const queryParams: any = route.queryParamMap;
    var params = JSON.stringify(queryParams.params); 
    var menuList = await lastValueFrom(this.menuService.list(new MenuListIn(), false));
    if (segments != null && menuList.data?.some(a => a.moduleName == segments)) {
      var menuItem: any = menuList.data?.find(a => a.moduleName == segments);
      menuItem!.urlData = params;
      this.adminMenuService.onMenuStateChange({key: menuItem!.moduleName!, item: menuItem});
    }

    return null; // Return null or appropriate data as needed
  }
}
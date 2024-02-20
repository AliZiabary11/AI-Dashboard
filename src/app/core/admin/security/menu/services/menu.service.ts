import { MenuDeleteIn } from './../models/menu-delete-in';
import { MenuSaveIn } from '../models/menu-save-in';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse, HttpService } from '@hp/core/general';
import { MenuListIn } from '../models/menu-list-in.model';
import { MenuListOut } from '../models/menu-list-out.model';
import { MenuTreeListIn } from '../models/menu-tree-list-in.model';
import { MenuTreeListOut } from '../models/menu-tree-list-out.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiUrl: string = `api/admin`;
  listUrl: string = `${this.apiUrl}/MenuList`;
  listWithPagingUrl: string = `${this.apiUrl}/MenuListWithPaging`;
  treeListWithPaging: string = `${this.apiUrl}/MenuTreeList`;

  constructor(private readonly httpService: HttpService) { }

  list(data: MenuListIn, showLoading: boolean = false): Observable<ApiResponse<MenuListOut[]>> {
    var res = new ApiResponse<MenuListOut[]>();
    res.data = [
      {icon: 'fa fa-user', title: 'Control Templates', orderNum: 1 , parentId: undefined , id: 1, isHide: false},
      {icon: 'fa fa-user', title: 'Utils', orderNum: 3 , parentId: undefined , id: 3, isHide: false},
      {icon: 'fa fa-table', title: 'Table', orderNum: 1 , parentId: 1 , id: 2, isHide: false, moduleName: 'admin-controls-table'},
      {icon: 'fa-solid fa-check-double', title: 'Validation', orderNum: 2 , parentId: 1 , id: 5, isHide: false, moduleName: 'admin-controls-validations'},
      {icon: 'fa fa-calender', title: 'AI Assistant', orderNum: 4 , parentId: 3 , id: 4, isHide: false, moduleName: 'admin-utils-gptAssistant'},
      {icon: 'fa fa-dashboard', title: 'AI Dashboard Builder', orderNum: 5 , parentId: 3 , id: 5, isHide: false, moduleName: 'admin-utils-dashboard-builder'},

    ];
    return of(res);
    // return this.httpService.post<any>(`${this.apiUrl}/MenuList`, data, showLoading);
  }

  listWithPaging(data: MenuListIn, showLoading: boolean = false): Observable<ApiResponse<MenuListOut[]>> {
    return this.httpService.post<any>(`${this.apiUrl}/MenuListWithPaging`, data, showLoading);
  }

  treeList(data: MenuTreeListIn, showLoading: boolean = false): Observable<ApiResponse<MenuTreeListOut[]>> {
    return this.httpService.post<any>(`${this.apiUrl}/MenuTreeList`, data, showLoading);
  }

  insertMenu(data: MenuSaveIn, showLoading: boolean = false): Observable<ApiResponse<any>> {
    return this.httpService.post<any>(`${this.apiUrl}/InsertMenu`, data, showLoading);
  }

  updateMenu(data: MenuSaveIn, showLoading: boolean = false): Observable<ApiResponse<any>> {
    return this.httpService.post<any>(`${this.apiUrl}/UpdateMenu`, data, showLoading);
  }

  deleteMenu(data: MenuDeleteIn, showLoading: boolean = false): Observable<ApiResponse<any>> {
    return this.httpService.post<any>(`${this.apiUrl}/DeleteMenu`, data, showLoading);
  }
}

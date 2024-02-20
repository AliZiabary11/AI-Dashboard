import { HpDxDropDownListComponent } from '@hp/shared/base-components/hp-dx-drop-down-list/hp-dx-drop-down-list.component';
import { MenuSaveIn } from '@hp/core/admin/security/menu/models/menu-save-in';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MenuService,
  MenuListWithPagingIn,
} from '@hp/core/admin/security/menu';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AlertService } from '@hp/core/general';

@Component({
  selector: 'menus-save',
  templateUrl: './menus-save.component.html',
  styleUrls: ['./menus-save.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenusSaveComponent implements OnInit, AfterViewInit {
  public activeState = true;
  saveMenuForm!: FormGroup;
  isLoading = false;
  isEditMode = false;
  header = 'منوی جدید';
  parentIdData: number = 1;
  saveLabel: string = 'ثبت منو جدید';

  @ViewChild('selectBox', { static: false })
  selectbox?: HpDxDropDownListComponent;

  get idInput() {
    return this.saveMenuForm.get('id');
  }
  get titleInput() {
    return this.saveMenuForm.get('title');
  }
  get menuModuleInput() {
    return this.saveMenuForm.get('moduleName');
  }
  get iconInput() {
    return this.saveMenuForm.get('icon');
  }
  get dataInput() {
    return this.saveMenuForm.get('data');
  }
  get isHideInput() {
    return this.saveMenuForm.get('isHide');
  }
  get parentIdInput() {
    return this.saveMenuForm.controls['parentId'];
  }
  get orderNumInput() {
    return this.saveMenuForm.get('orderNum');
  }

  constructor(
    private readonly cdr: ChangeDetectorRef,
    public readonly menuService: MenuService,
    private readonly alertService: AlertService
  ) {
    this.initialSaveMenuFrom();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialMenuParentDropDown();
  }

  private initialMenuParentDropDown() {
    let model: MenuListWithPagingIn = {
      orderByColumn: 'title',
      sortOrder: 'asc',
    };
    this.selectbox?.changeDataSource(model, this.menuService.listWithPagingUrl);
  }

  private initialSaveMenuFrom(): void {
    this.saveMenuForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      moduleName: new FormControl('', [Validators.required]),
      icon: new FormControl('', [Validators.required]),
      data: new FormControl(''),
      isHide: new FormControl(false, [Validators.required]),
      parentId: new FormControl(null),
      orderNum: new FormControl(null, [Validators.required]),
    });
  }

  public togglePanel() {
    if (this.activeState) {
      this.activeState = false;
    } else {
      this.activeState = true;
    }
    this.cdr.detectChanges();
  }

  public openPanel(isEditMode: boolean, selectedMenuItem?: any) {
    this.activeState = true;
    if (isEditMode) {
      if (selectedMenuItem) {
        this.parseEditMenuValueToForm(selectedMenuItem);
        this.header = `ویرایش منوی ${selectedMenuItem[0].data.title}`;
      }
    } else {
      this.header = 'منوی جدید';
      this.clearForm();
    }
    this.isEditMode = isEditMode;
    this.cdr.detectChanges();
  }

  public closePanel(isEditMode: boolean, selectedMenuItem?: any) {
    this.activeState = false;
    if (selectedMenuItem && isEditMode) {
      this.parseEditMenuValueToForm(selectedMenuItem);
    }
    this.isEditMode = isEditMode;
    this.cdr.detectChanges();
  }

  private parseEditMenuValueToForm(selectedMenuItem: any) {
    this.saveMenuForm.controls['id'].setValue(selectedMenuItem[0].data.id);
    this.saveMenuForm.controls['title'].setValue(
      selectedMenuItem[0].data.title
    );
    this.saveMenuForm.controls['moduleName'].setValue(
      selectedMenuItem[0].data.moduleName
    );
    this.saveMenuForm.controls['icon'].setValue(selectedMenuItem[0].data.icon);
    this.saveMenuForm.controls['data'].setValue(selectedMenuItem[0].data.data);
    this.saveMenuForm.controls['isHide'].setValue(
      selectedMenuItem[0].data.isHide
    );

    this.saveMenuForm.controls['parentId'].setValue(
      selectedMenuItem[0].data.parentId
    );
    this.saveMenuForm.controls['orderNum'].setValue(
      selectedMenuItem[0].data.orderNum
    );
  }

  onClearFormClick() {
    if (this.isEditMode) {
      this.isEditMode = false;
      this.header = 'منوی جدید';
    }
    this.clearForm();
  }

  private clearForm() {
    this.initialSaveMenuFrom();
    this.cdr.detectChanges();
  }

  onSaveClick() {
    if (this.isEditMode) {
      this.updateMenu(
        this.idInput?.value,
        this.titleInput?.value,
        this.menuModuleInput?.value,
        this.iconInput?.value,
        this.dataInput?.value,
        this.isHideInput?.value,
        this.parentIdInput?.value,
        this.orderNumInput?.value
      );
    } else {
      if (this.saveMenuForm.valid) {
        this.insertMenu(
          this.titleInput?.value,
          this.menuModuleInput?.value,
          this.iconInput?.value,
          this.dataInput?.value,
          this.isHideInput?.value,
          this.parentIdInput?.value,
          this.orderNumInput?.value
        );
      } else {
        this.saveMenuForm.markAllAsTouched();
      }
    }
  }

  private async insertMenu(
    title: string,
    menuModule: string,
    icon: string,
    data: string,
    isHide: boolean,
    parentId: number,
    orderNum: number
  ) {
    this.activeSaveButtonLoading();
    var res = await lastValueFrom(
      this.menuService.insertMenu(
        new MenuSaveIn(
          undefined,
          parentId,
          menuModule,
          title,
          icon,
          data,
          isHide,
          orderNum
        )
      )
    ).finally(() => {
      this.deActiveSaveButtonLoading();
    });

    this.clearForm();
    this.alertService.toast();
    this.cdr.detectChanges();
  }

  private async updateMenu(
    id: number,
    title: string,
    menuModule: string,
    icon: string,
    data: string,
    isHide: boolean,
    parentId: number,
    orderNum: number
  ) {
    this.activeSaveButtonLoading();
    var res = await lastValueFrom(
      this.menuService.updateMenu(
        new MenuSaveIn(
          id,
          parentId,
          menuModule,
          title,
          icon,
          data,
          isHide,
          orderNum
        )
      )
    ).finally(() => {
      this.deActiveSaveButtonLoading();
    });

    this.clearForm();
    this.isEditMode = false;
    this.header = 'منوی جدید';
    this.alertService.toast();
    this.cdr.detectChanges();
  }

  private activeSaveButtonLoading() {
    this.isLoading = true;
    this.cdr.detectChanges();
  }

  private deActiveSaveButtonLoading() {
    this.isLoading = false;
    this.cdr.detectChanges();
  }
}

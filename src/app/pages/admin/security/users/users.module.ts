import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { HpDataGridModule } from '@hp/shared/base-components';
import { HpTreeGridModule } from '@hp/shared/base-components/hp-tree-grid/hp-tree-grid.module';
import { HpDxDropDownListModule } from '@hp/shared/base-components/hp-dx-drop-down-list/hp-dx-drop-down-list.module';
import { HpDxDataGridModule } from '@hp/shared/base-components/hp-dx-data-grid/hp-dx-data-grid.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HpDataGridModule,
    HpTreeGridModule,
    HpDxDropDownListModule,
    HpDxDataGridModule,
  ]
})
export class UsersModule {
  static rootComponent = UsersComponent;
}

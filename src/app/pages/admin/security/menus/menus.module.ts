import { HpTextboxModule } from '@hp/shared/base-components/hp-textbox/hp-textbox.module';
import { TooltipModule } from 'primeng/tooltip';
import { HpButtonModule } from '@hp/shared/base-components/hp-button/hp-button.module';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';

import { MenusSaveModule } from './menus-save/menus-save.module';
import { FormsModule } from '@angular/forms';

import { MenusComponent } from './menus.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HpToolbarModule,HpTreeGridModule,HpContextmenuModule,HpDxDataGridModule } from '@hp/shared/base-components';




@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,
    HpToolbarModule,
    HpTreeGridModule,
    HpContextmenuModule,
    HpDxDataGridModule,
    HpButtonModule,
    HpTextboxModule,
    FormsModule,
    MenusSaveModule,
    AccordionModule,
    TooltipModule
  ]
})
export class MenusModule {
  static rootComponent = MenusComponent;
 }

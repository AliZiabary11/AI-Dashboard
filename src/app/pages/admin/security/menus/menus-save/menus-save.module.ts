import { DxSelectBoxModule } from 'devextreme-angular';
import { HpInputswitchModule } from '@hp/shared/base-components/hp-inputswitch/hp-inputswitch.module';
import { HpTextareaModule } from '@hp/shared/base-components/hp-textarea/hp-textarea.module';
import { HpInputnumberModule } from '@hp/shared/base-components/hp-inputnumber/hp-inputnumber.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenusSaveComponent } from './menus-save.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import {
  HpButtonModule,
  HpCheckboxModule,
  HpTextboxModule,
  HpDxDropDownListModule,
} from '@hp/shared/base-components';

@NgModule({
  declarations: [MenusSaveComponent],
  imports: [
    CommonModule,
    AccordionModule,
    ReactiveFormsModule,
    FormsModule,
    HpTextboxModule,
    DxSelectBoxModule,
    HpCheckboxModule,
    HpButtonModule,
    HpInputnumberModule,
    HpTextareaModule,
    HpInputswitchModule,
    HpDxDropDownListModule
  ],
  exports: [MenusSaveComponent],
})
export class MenusSaveModule {}

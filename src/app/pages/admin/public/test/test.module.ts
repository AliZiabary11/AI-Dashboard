import { HpToolbarModule } from './../../../../shared/base-components/hp-toolbar/hp-toolbar.module';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';
import { HpListboxModule } from '@hp/shared/base-components/hp-listbox/hp-listbox.module';
import { HpTextareaModule } from '@hp/shared/base-components/hp-textarea/hp-textarea.module';
import { HpDropdownModule } from '@hp/shared/base-components/hp-dropdown/hp-dropdown.module';
import { HpMultiselectModule } from '@hp/shared/base-components/hp-multiselect/hp-multiselect.module';
import { HpInputswitchModule } from '@hp/shared/base-components/hp-inputswitch/hp-inputswitch.module';
import { HpCheckboxModule } from '@hp/shared/base-components/hp-checkbox/hp-checkbox.module';
import { HpTextboxModule } from '@hp/shared/base-components/hp-textbox/hp-textbox.module';
import { HpInputnumberModule } from '@hp/shared/base-components/hp-inputnumber/hp-inputnumber.module';
import { HpButtonModule } from '@hp/shared/base-components/hp-button/hp-button.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { DividerModule } from 'primeng/divider';
import { HpContextmenuModule } from '@hp/shared/base-components/hp-contextmenu/hp-contextmenu.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    DividerModule,
    HpTextboxModule,
    HpButtonModule,
    HpInputnumberModule,
    HpCheckboxModule,
    HpInputswitchModule,
    HpMultiselectModule,
    HpDropdownModule,
    HpTextareaModule,
    HpListboxModule,
    HpContextmenuModule,
    HpToolbarModule,
    ContextMenuModule
  ],
})
export class TestModule {
  static rootComponent = TestComponent;
}

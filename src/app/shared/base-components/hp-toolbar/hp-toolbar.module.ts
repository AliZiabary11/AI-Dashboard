import { TooltipModule } from 'primeng/tooltip';
import { HpTextboxModule } from '@hp/shared/base-components/hp-textbox/hp-textbox.module';
import { HpButtonModule } from '@hp/shared/base-components/hp-button/hp-button.module';
import { HpToolbarComponent } from './hp-toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HpToolbarComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    HpButtonModule,
    HpTextboxModule,
    FormsModule,
    TooltipModule
  ],exports:[
    HpToolbarComponent
  ]
})
export class HpToolbarModule { }

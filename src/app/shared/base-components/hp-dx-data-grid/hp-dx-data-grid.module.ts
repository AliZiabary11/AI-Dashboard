import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { HpDxDataGridComponent } from './hp-dx-data-grid.component';
import { CheckConditionPipe } from './check-condition.pipe';
import { SafeBase64ImageProcess } from './safe-base64-image-process.pipe';
import { DigiSeparatorPipeModule } from '@hp/shared/pipes/digi-separator-pipe/digi-separator-pipe.module';
import { HpDxContextMenuModule } from '../hp-dx-context-menu/hp-dx-context-menu.module';



@NgModule({
  declarations: [HpDxDataGridComponent, CheckConditionPipe, SafeBase64ImageProcess],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DigiSeparatorPipeModule,
    DevExtremeModule,
    HpDxContextMenuModule,
  ],
  exports: [HpDxDataGridComponent, DevExtremeModule]
})
export class HpDxDataGridModule { }

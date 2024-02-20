import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MiniChangePassComponent } from './mini-change-pass.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HpTextboxModule,
  HpCheckboxModule,
  HpButtonModule,
} from '@hp/shared/base-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MiniChangePassComponent],
  imports: [
    CommonModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    HpTextboxModule,
    HpCheckboxModule,
    HpButtonModule,
  ],
  exports: [MiniChangePassComponent],
})
export class MiniChangePassModule {}

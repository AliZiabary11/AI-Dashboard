import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GptAssistantComponent } from './gpt-assistant/gpt-assistant.component';
import { HpButtonModule, HpCheckboxModule, HpDropdownModule, HpTextareaModule, HpTextboxModule } from '@hp/shared/base-components';
import { AgGridModule } from 'ag-grid-angular';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [GptAssistantComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HpTextboxModule,
    HpButtonModule,
    HpCheckboxModule,
    ChartModule,
    DialogModule,
    HpDropdownModule,
    HpTextareaModule,
    AgGridModule
  ],
  exports:[GptAssistantComponent]
})
export class GptAssistantModule { 
  static rootComponent = GptAssistantComponent;
}

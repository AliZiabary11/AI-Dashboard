import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationsComponent } from './validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HpButtonModule, HpCheckboxModule, HpDropdownModule, HpTextareaModule, HpTextboxModule } from '@hp/shared/base-components';
import { TestapaModule } from '@hp/shared/base-components/test/testapa/testapa.module';



@NgModule({
  declarations: [ValidationsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HpTextboxModule,
    HpTextareaModule,
    HpButtonModule,
    HpCheckboxModule,
    TestapaModule,
    HpDropdownModule,
    FormsModule, ReactiveFormsModule
  ],
  exports:[ValidationsComponent]
})
export class ValidationsModule {
  static rootComponent = ValidationsComponent;
 }

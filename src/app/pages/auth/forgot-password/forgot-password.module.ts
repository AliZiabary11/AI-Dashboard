import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HpTextboxModule, HpCheckboxModule, HpButtonModule } from '@hp/shared/base-components';
import {StepsModule} from 'primeng/steps';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HpTextboxModule,
    HpCheckboxModule,
    HpButtonModule,
    StepsModule,
  ]
})
export class ForgotPasswordModule { }

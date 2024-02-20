import { HpCheckboxModule } from '@hp/shared/base-components/hp-checkbox/hp-checkbox.module';
import { HpButtonModule } from '@hp/shared/base-components/hp-button/hp-button.module';
import { HpTextboxModule } from '@hp/shared/base-components/hp-textbox/hp-textbox.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HpTextboxModule,
    HpCheckboxModule,
    HpButtonModule,
    HpCheckboxModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SignInModule { }

import { HpButtonModule } from './../../../shared/base-components/hp-button/hp-button.module';
import { NotFound404Component } from './not-found404.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFound404RoutingModule } from './not-found404-routing.module';

@NgModule({
  declarations: [NotFound404Component],
  imports: [CommonModule, NotFound404RoutingModule, HpButtonModule],
})
export class NotFound404Module {}

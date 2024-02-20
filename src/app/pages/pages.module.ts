import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from './admin/public/public.module';
import { SecurityModule } from './admin/security/security.module';
import { ControlsModule } from './admin/controls/controls.module';
import { UtilsModule } from './admin/utils/utils.module';

const adminModules = [
  PublicModule,
  SecurityModule,
  ControlsModule,
  UtilsModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...adminModules,
  ]
})
export class PagesModule { }

import { MiniProfilemenuModule } from './mini-profilemenu/mini-profilemenu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTopBarComponent } from './topbar.component';
import {TooltipModule} from 'primeng/tooltip';
import { MiniChangePassModule } from '@hp/pages/admin/security/mini-change-pass/mini-change-pass.module';



@NgModule({
  declarations: [
    AdminTopBarComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    MiniProfilemenuModule,
    MiniChangePassModule
  ]
  ,exports:[
    AdminTopBarComponent
  ]
})
export class AdminTopbarModule { }

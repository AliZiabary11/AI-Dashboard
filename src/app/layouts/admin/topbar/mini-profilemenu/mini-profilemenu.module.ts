import { MiniChangePassModule } from '@hp/pages/admin/security/mini-change-pass/mini-change-pass.module';
import { MiniProfilemenuComponent } from './mini-profilemenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [MiniProfilemenuComponent],
  imports: [
    CommonModule,
    MenuModule,
    MiniChangePassModule
  ]
  ,exports:[
    MiniProfilemenuComponent
  ]
})
export class MiniProfilemenuModule { }

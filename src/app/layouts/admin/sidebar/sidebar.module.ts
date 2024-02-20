import { RouterModule } from '@angular/router';
import { AdminMenuitemComponent } from './sidebar-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';
import { HpLoadingModule } from '@hp/shared/base-components';



@NgModule({
  declarations: [AdminSidebarComponent,AdminMenuitemComponent],
  imports: [
    CommonModule,
    RouterModule,
    HpLoadingModule,
    FormsModule,
  ],
  exports:[
    AdminSidebarComponent
  ],
})
export class AdminSidebarModule { }

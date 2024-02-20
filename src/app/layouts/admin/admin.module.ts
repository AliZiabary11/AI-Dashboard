

import { AdminRoutingModule } from './admin.routing.module';



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { AdminSidebarModule } from './sidebar/sidebar.module';
import { AdminTopbarModule } from './topbar/topbar.module';
import { AdminConfigModule } from './config/config.module';
import {TabViewModule} from 'primeng/tabview';
import { DynamicTabviewComponent } from './dynamic-tabview/dynamic-tabview.component';
import { CompLoaderComponent } from './dynamic-tabview/comp-loader/comp-loader.component';
import { DashboardModule } from '../../pages/general/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AdminComponent,
    DynamicTabviewComponent,
    CompLoaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSidebarModule,
    AdminTopbarModule,
    AdminConfigModule,
    DashboardModule,
    TabViewModule,
  ]
})
export class AdminModule { }

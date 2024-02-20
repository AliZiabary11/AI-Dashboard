import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HpChartJsModule } from '@hp/shared/base-components';
import { FormsModule } from '@angular/forms';
import { HpChartHcModule } from '@hp/shared/base-components/hp-chart-hc/hp-chart-hc.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    HpChartJsModule,
    HpChartHcModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

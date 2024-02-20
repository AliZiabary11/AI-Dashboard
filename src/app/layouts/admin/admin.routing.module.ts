import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DynamicRoutingResolver } from './dynamic-route-resolver';

const routes: Routes = [
  {
    path: '**', // Use the parameter name you expect
    resolve: {
      data: DynamicRoutingResolver,
    },
    component: AdminComponent, // Replace with the actual component that corresponds to the dynamic route
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

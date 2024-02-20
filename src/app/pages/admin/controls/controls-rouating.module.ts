import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin-controls-table', loadChildren: () => import('@hp/pages/admin/controls/table/table.module').then(m => m.TableModule) },
  { path: 'admin-controls-validations', loadChildren: () => import('@hp/pages/admin/controls/validations/validations.module').then(m => m.ValidationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlsRoutingModule { }

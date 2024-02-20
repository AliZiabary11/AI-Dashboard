import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin-utils-gptAssistant', loadChildren: () => import('@hp/pages/admin/utils/gpt-assistant/gpt-assistant.module').then(m => m.GptAssistantModule) },
  { path: 'admin-utils-dashboard-builder', loadChildren: () => import('@hp/pages/admin/utils/dashboard-builder/dashboard-builder.module').then(m => m.DashboardBuilderModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }

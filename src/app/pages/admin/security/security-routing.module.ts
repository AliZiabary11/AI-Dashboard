import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin-security-users', loadChildren: () => import('@hp/pages/admin/security/users/users.module').then(m => m.UsersModule) },
  { path: 'admin-security-menus', loadChildren: () => import('@hp/pages/admin/security/menus/menus.module').then(m => m.MenusModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

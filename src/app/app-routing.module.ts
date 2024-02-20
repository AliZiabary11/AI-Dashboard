import { AuthGuard } from './core/auth/services/auth.guard';
import { AuthComponent } from './layouts/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './pages/general/not-found404/not-found404.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { startsWith } from './core/general/utilities/matcher';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./layouts/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

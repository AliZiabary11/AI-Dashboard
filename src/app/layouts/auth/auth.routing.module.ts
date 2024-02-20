import { ForgotPasswordComponent } from '@hp/pages/auth/forgot-password/forgot-password.component';
import { SignUpComponent } from '@hp/pages/auth/sign-up/sign-up.component';
import { SignInComponent } from '@hp/pages/auth/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    loadChildren: () =>
      import('./../../pages/auth/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    loadChildren: () =>
      import('./../../pages/auth/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    loadChildren: () =>
      import('./../../pages/auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

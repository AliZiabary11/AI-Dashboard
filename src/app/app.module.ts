import { ConfirmationService } from 'primeng/api';
import { NotFound404Component } from './pages/general/not-found404/not-found404.component';

import { HpLoadingModule } from './shared/base-components/hp-loading/hp-loading.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorHandler, Injector, NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  AuthInterceptor,
  GlobalExceptionHandler,
  HttpErrorInterceptor,
} from '@hp/core/general';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

export let AppInjector: Injector;

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HpLoadingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    PagesModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
    }),
    
 
  ],
  declarations: [
    AppComponent,
    NotFound404Component,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/app' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalExceptionHandler },
    ConfirmationService,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}

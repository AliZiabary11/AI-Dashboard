import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiResponse } from '../models/api-response';
import { AlertService } from '../services/alert.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private readonly alertService: AlertService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      //retry(1),
      catchError((error: HttpErrorResponse) => {

        var err = error as HttpErrorResponse;
        if (this.isInternalError(error)) {
          console.error(error);
          this.alertService.alert('Communication with the server', 'There is an error connecting to the server, please contact support');
          return throwError(error);
        }

        if (this.isCustomServerError(error)) {
          var res = error.error as ApiResponse<null>;
          this.alertService.alert('Request processing', res.errors[0]);
          return throwError(error);
        }

        if (this.isServerIsOutOfAccess(error)) {
          this.alertService.alert('Request processing', 'The server is not available. Please try again later');
          return throwError(error);
        }

        if (this.isUnAuthorizeRequest(error)) {

        }

        return throwError(error);
      })
    )

  }

  private isUnAuthorizeRequest(error: HttpErrorResponse): boolean {
    return error.status == 401 || error.status == 403;
  }

  private isServerIsOutOfAccess(error: HttpErrorResponse): boolean {
    return error.status == 0;
  }

  private isCustomServerError(error: HttpErrorResponse): boolean {
    return error.status == 400 && error.error != null;
  }

  private isInternalError(error: HttpErrorResponse): boolean {
    return error.status >= 500;
  }

}

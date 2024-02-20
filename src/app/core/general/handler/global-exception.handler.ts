import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse
} from '@angular/common/http';
import { ApiResponse } from '../models/api-response';
import { AlertService } from '../services/alert.service';

@Injectable()
export class GlobalExceptionHandler implements ErrorHandler {

  constructor(@Inject(Injector) private readonly injector: Injector) { }

  private get alertService() {
    return this.injector.get(AlertService);
  }

  handleError(error: any): void {

    console.error(error);

    if (error instanceof HttpErrorResponse) {
     
    }

  }


}

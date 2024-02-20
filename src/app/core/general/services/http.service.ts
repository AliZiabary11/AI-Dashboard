import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoadingService } from './loading.service';
import { finalize, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public apiUrl: string = "";

  constructor(private readonly http: HttpClient, private readonly loadingService: LoadingService) {
    this.apiUrl = environment.apiUrl;
  }

  post<T>(url: string, data?: any, showLoading = false): Observable<ApiResponse<T>> {
    if (showLoading)
      this.loadingService.changeState(showLoading);


    return this.http.post<ApiResponse<T>>(this.apiUrl + url, data).pipe(finalize(() => {
      if (showLoading)
        this.loadingService.changeState(false);
    }));
  }

  rawPost<T>(url: string, data?: any, showLoading = false): Observable<any> {
    if (showLoading)
      this.loadingService.changeState(showLoading);


    return this.http.post<T>(this.apiUrl + url, data).pipe(finalize(() => {
      if (showLoading)
        this.loadingService.changeState(false);
    }));
  }

  get<T>(url: string, showLoading = false): Observable<ApiResponse<T>> {
    if (showLoading)
      this.loadingService.changeState(showLoading);

    return this.http.get<ApiResponse<T>>(this.apiUrl + url).pipe(finalize(() => {
      if (showLoading)
        this.loadingService.changeState(false);
    }));
  }

  rawGet<T>(url: string, showLoading = false): Observable<any> {
    if (showLoading)
      this.loadingService.changeState(showLoading);

    return this.http.get<T>(this.apiUrl + url).pipe(finalize(() => {
      if (showLoading)
        this.loadingService.changeState(false);
    }));
  }

}

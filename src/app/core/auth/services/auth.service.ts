import { ChangePassInput } from './../models/change-pass-input';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '@hp/core/general/models/api-response';
import { HttpService } from '@hp/core/general/services/http.service';
import { SignInInput } from '../models/sign-in-input';
import { RefreshTokenInput } from '../models/refresh-token-input';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = `api/admin`;

  constructor(private readonly httpService: HttpService) { }

  signIn(data: SignInInput, showLoading: boolean = false): Observable<ApiResponse<any>> {
    return of(new ApiResponse({userId: 1 , refresh_token: '6as6f4565a4sf64' , access_token: '6asfa6sf6af'}));
    // return this.httpService.post<any>(`${this.apiUrl}/login`, data, showLoading);
  }

  refreshToken(data: RefreshTokenInput, showLoading: boolean = false): Observable<ApiResponse<any>> {
    return this.httpService.post<any>(`${this.apiUrl}/RefreshToken`, data, showLoading);
  }

  changeAuthenticatedUserPassword(data: ChangePassInput, showLoading: boolean = false): Observable<ApiResponse<any>> {
    return this.httpService.post<any>(`${this.apiUrl}/ChangeAuthenticatedUserPassword`, data, showLoading);
  }


}

import { Injectable } from '@angular/core';
import { BrowserStorageService } from './browser-storage.service';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private readonly browserStorageService: BrowserStorageService) { }

  public signOut(): void {
    this.browserStorageService.removeAllSessions();
  }

  public saveToken(token: string): void {
    this.browserStorageService.removeSession(TOKEN_KEY);
    this.browserStorageService.setSession(TOKEN_KEY, token);

    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  public getToken(): any {
    return this.browserStorageService.getSession(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    this.browserStorageService.removeSession(REFRESHTOKEN_KEY);
    this.browserStorageService.setSession(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): any {
    return this.browserStorageService.getSession(REFRESHTOKEN_KEY);
  }

  public saveUser(user: any): void {
    this.browserStorageService.removeSession(USER_KEY);
    this.browserStorageService.setSession(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = this.browserStorageService.getSession(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}

import { TokenStorageService } from './../../general/services/token-storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly tokenStorageService: TokenStorageService,
    private readonly router: Router
  ) {}
  canActivate(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): boolean {
    if (this.tokenIsSaved()) {
      return true;
    } else {
      this.gotoLoginPage();
      return false;
    }
  }

  private gotoLoginPage() {
    this.router.navigateByUrl('/auth/sign-in');
  }

  private tokenIsSaved() {
    return this.tokenStorageService.getToken();
  }
}

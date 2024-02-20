import { TokenStorageService } from './../../../core/general/services/token-storage.service';
import { PrimeNGConfig } from 'primeng/api';
import {
  AlertService,
  AlertType,
} from '@hp/core/general/services/alert.service';
import { Router } from '@angular/router';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom, Subscription } from 'rxjs';
import { AuthService } from '@hp/core/auth/services/auth.service';
import { SignInInput } from '@hp/core/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  passInputType = 'password';
  passVisible: boolean = false;
  btnSignInIcon: string = '';

  isLoading: boolean = false;

  signInForm!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly alertService: AlertService,
    private readonly authService: AuthService,
    private readonly tokenStorageService: TokenStorageService,
    private readonly cdr: ChangeDetectorRef,
    private readonly primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    if (this.tokenIsSaved()) {
      this.gotoAdminPage();
      return;
    }
    
    //ripple effect for prime ng
    this.primengConfig.ripple = true;
    this.initialSignInForm();
  }

  private gotoAdminPage() {
    this.router.navigateByUrl('/admin');
  }

  initialSignInForm() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ]),
    });
  }

  get username() {
    return this.signInForm.get('username');
  }

  get password() {
    return this.signInForm.get('password');
  }


  onSignInClick() {
    this.login();
  }

  onFormEnter() {
    this.login();
  }

  private login() {
    if (this.signInForm.invalid) {
      this.showInvalidStateToUser();
    } else {
      this.signIn(this.username?.value, this.password?.value);
    }
  }

  private async signIn(username: string, password: string) {
    this.activeSignInButtonLoadin();

    var res = await lastValueFrom(
      this.authService.signIn(new SignInInput(username, password))
    ).finally(() => {
      this.deActiveSignInButtonLoading();
    });

    this.tokenStorageService.saveUser(res.data.userId);
    this.tokenStorageService.saveToken(res.data.access_token);
    this.tokenStorageService.saveRefreshToken(res.data.refresh_token);

    this.router.navigate(['/admin']);
    this.alertService.toast(
      'Login',
      `${this.signInForm.get('username')?.value} is successfully`,
      AlertType.success
    );
  }

  private activeSignInButtonLoadin() {
    this.isLoading = true;
    this.cdr.detectChanges();
  }

  private deActiveSignInButtonLoading() {
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  private showInvalidStateToUser() {
    this.signInForm.markAllAsTouched();
    this.alertService.toast(
      'sign-in',
      'please',
      AlertType.error
    );
  }

  private tokenIsSaved() {
    return this.tokenStorageService.getToken();
  }
}

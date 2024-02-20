import { AlertService } from 'src/app/core/general';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'hp-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassStep: number = 1;
  passVisible: boolean = false;
  btnForgotPassIcon: string = '';
  isLoading: boolean = false;
  stepsItem: MenuItem[] = [
    { label: 'ایمیل' },
    { label: 'کد یکبار مصرف' },
    { label: 'رمز جدید' },
  ];

  forgotPassForm!: FormGroup;

  get email() {
    return this.forgotPassForm.get('email');
  }
  get oneTimeCode() {
    return this.forgotPassForm.get('oneTimeCode');
  }
  get newPass() {
    return this.forgotPassForm.get('newPass');
  }
  get newPassConfirm() {
    return this.forgotPassForm.get('newPassConfirm');
  }

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private router: Router,
    private readonly alertService: AlertService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //ripple effect for prime ng
    this.primengConfig.ripple = true;
    this.initialForgotPassForm();
  }

  initialForgotPassForm() {
    this.forgotPassForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      oneTimeCode: new FormControl('', [Validators.required]),
      newPass: new FormControl('', [Validators.required]),
      newPassConfirm: new FormControl('', [Validators.required]),
    });
  }

  // Change input type in step three
  showPass() {
    if (this.passVisible) {
      this.passVisible = false;
    } else {
      this.passVisible = true;
    }
  }


  confirmForgotStepOne() {
    if (this.email?.errors?.['required'] || this.email?.errors?.['email']) {
      this.email.markAsTouched();
    } else {
      this.forgotPassStep = 2;
      this.alertService.alert(
        'ارسال کد یکبار مصرف',
        ' کد یکبار مصرف برای ایمیل شما ارسال گردید.'
      );
    }
  }


  confirmForgotStepTwo() {
    if (this.oneTimeCode?.errors?.['required']) {
      this.oneTimeCode.markAsTouched();
    } else {
      this.forgotPassStep = 3;
    }
  }


  confirmForgotStepThree() {
    if (
      this.newPass?.errors?.['required'] ||
      this.newPassConfirm?.errors?.['required']
    ) {
      this.newPass?.markAsTouched();
      this.newPassConfirm?.markAsTouched();
    } else {
      this.alertService.toast('فراموشی رمز', 'رمز عبور با موفقیت تغییر یافت.');
      this.router.navigateByUrl('/auth/sign-in');
    }
  }
}

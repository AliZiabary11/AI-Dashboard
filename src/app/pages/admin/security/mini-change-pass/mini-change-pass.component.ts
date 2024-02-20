
import { AlertService, AlertType } from 'src/app/core/general';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@hp/core/auth/services/auth.service';
import { lastValueFrom } from 'rxjs';
import { ChangePassInput } from '@hp/core/auth/models/change-pass-input';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'mini-change-pass',
  templateUrl: './mini-change-pass.component.html',
  styleUrls: ['./mini-change-pass.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MiniChangePassComponent implements OnInit {
  @ViewChild('changePassIner') changePassIner!: OverlayPanel;

  @Input() container: any;


  isLoading: boolean = false;
  miniChangePassForm!: FormGroup;


  constructor(
    private readonly alertService: AlertService,
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  get oldPass() {
    return this.miniChangePassForm.get('oldPass');
  }
  get newPass() {
    return this.miniChangePassForm.get('newPass');
  }
  get newPassConfirm() {
    return this.miniChangePassForm.get('newPassConfirm');
  }

  ngOnInit(): void {
    this.initialMiniChangePassForm();
  }

  initialMiniChangePassForm() {
    this.miniChangePassForm = new FormGroup({
      oldPass: new FormControl('', [Validators.required]),
      newPass: new FormControl('', [Validators.required]),
      newPassConfirm: new FormControl('', [Validators.required]),
    });
  }

  public openMiniChangePassPanel(event: any, actualTarget: any) {
    debugger;
    this.changePassIner.toggle(event,actualTarget);
  }

  onSaveClick() {
    if (this.miniChangePassForm.valid) {
      if (this.newPass?.value == this.newPassConfirm?.value) {
        if (this.newPass?.value != this.oldPass?.value) {
          this.changePass(this.oldPass?.value, this.newPass?.value);
        } else {
          this.alertService.toast(
            'Change Password',
            'New Password And OldPassword Can"t be Same.',
            AlertType.error
          );
        }
      } else {
        this.alertService.toast(
          'Change Password',
          'New Password And The Repeat Password is not the same.',
          AlertType.error
        );
      }
    } else {
      this.miniChangePassForm.markAllAsTouched();
    }
  }

  private async changePass(oldPass: string, newPass: string) {
    this.activeChangePassButtonLoading();

    var res = await lastValueFrom(
      this.authService.changeAuthenticatedUserPassword(
        new ChangePassInput(oldPass, newPass)
      )
    ).finally(() => {
      this.deActiveChangePassButtonLoading();
    });

    this.miniChangePassForm.reset('');
    this.hideMiniChangePassPanel();
    this.alertService.toast();
    this.cdr.detectChanges();
  }

  onCloseClick(): void {
    this.hideMiniChangePassPanel();
  }

  private hideMiniChangePassPanel() {
    this.changePassIner.hide();
  }

  private activeChangePassButtonLoading() {
    this.isLoading = true;
    this.cdr.detectChanges();
  }

  private deActiveChangePassButtonLoading() {
    this.isLoading = false;
    this.cdr.detectChanges();
  }
}

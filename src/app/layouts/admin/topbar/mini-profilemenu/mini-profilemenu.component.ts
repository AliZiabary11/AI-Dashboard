import { Router } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenStorageService } from '@hp/core/general/services/token-storage.service';

@Component({
  selector: 'mini-profile-menu',
  templateUrl: './mini-profilemenu.component.html',
  styleUrls: ['./mini-profilemenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MiniProfilemenuComponent {
  @ViewChild('profileMenu') profileMenu: any;

  constructor(
    private readonly router: Router,
    private readonly tokenStorageService: TokenStorageService
  ) {}

  @Input() container: any;
  @Output() changePassClicked: EventEmitter<any> = new EventEmitter<any>;

  profileItem: MenuItem[] = [
    {
      label: 'Exit',
      icon: 'pi pi-fw  pi-power-off',
      command: () => this.signOutClick(),
    },
    {
      label: 'Change Password',
      icon: 'pi pi-fw pi-key',
      command: () => this.changePassClick(),
    },
  ];

  public openMiniProfileMenu(event: any):void {
    this.profileMenu.toggle(event);
  }
  

  private signOutClick():void {
    this.clearUserToken();
    this.gotoSignInPage();
  }

  private gotoSignInPage() {
    this.router.navigateByUrl('/auth/sign-in');
  }

  private clearUserToken() {
    this.tokenStorageService.signOut();
  }

  changePassClick(event: any = MouseEvent):void {
    this.changePassClicked.emit(event);
  }


}

import { LoadingService } from './../../core/general/services/loading.service';
import { AdminTopbarModule } from './topbar/topbar.module';
import { PrimeNGConfig } from 'primeng/api';
import {
  Component,
  OnDestroy,
  Renderer2,
  ViewChild,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AdminLayoutService } from 'src/app/core/general/services/admin.layout.service';
import { AdminSidebarComponent } from './sidebar/sidebar.component';
import { AdminTopBarComponent } from './topbar/topbar.component';
import { AdminMenuService } from '../../core/general/services/admin.menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  // ng prime 
  overlayMenuOpenSubscription?: Subscription;
  menuOutsideClickListener: any;
  profileMenuOutsideClickListener: any;
  @ViewChild(AdminSidebarComponent) appSidebar!: AdminSidebarComponent;
  @ViewChild(AdminTopBarComponent) AdminTopBarComponent!: AdminTopBarComponent;

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private readonly adminMenuService: AdminMenuService,
    public layoutService: AdminLayoutService,
    public renderer: Renderer2,
    public router: Router,
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive':
        this.layoutService.state.staticMenuDesktopInactive &&
        this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple,
    };
  }

  onMenuToggle() {
    this.layoutService.onMenuToggle();
  }
}

import { AdminLayoutService } from 'src/app/core/general/services/admin.layout.service';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DOCUMENT } from '@angular/common';
import { AlertService } from '@hp/core/general/services/alert.service';

@Component({
  selector: 'admin-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTopBarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  @ViewChild('changePassOuter') changePassOuter: any;

  elem;
  isFullScreen: boolean = false;

  constructor(
    public adminLayoutService: AdminLayoutService,
    @Inject(DOCUMENT) private document: any,
    private readonly alertService:AlertService
  ) {
    this.elem = document.documentElement;
  }

  onChangePassClick(e: any){
    this.openChangePassPanel(e);
  }

  private openChangePassPanel(event: any):void {
    this.changePassOuter.openMiniChangePassPanel(event,null);
  }

  onVertionClick():void{
    this.alertService.alert();
  }
  openFullscreen() {
    try {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
      this.isFullScreen = true;
    } catch (error) {
      console.error(error);
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    try {
      if (!document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
      this.isFullScreen = false;
    } catch (error) {
      console.error(error);
    }
  }
}

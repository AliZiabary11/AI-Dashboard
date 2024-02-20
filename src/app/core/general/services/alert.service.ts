import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private toastrService: ToastrService,
    private confirmationService: ConfirmationService
  ) {
  }

  toast(
    title: string = 'Attention',
    message: string = 'The operation done successfully .',
    alertType: AlertType = AlertType.success,
    timeOut: number = 3000
  ) {
    switch (alertType) {
      case AlertType.success:
        this.toastrService.success(message, title, {
          timeOut: timeOut,
          titleClass: 'main-font-size-1',
          messageClass: 'main-font-size-1',
        });
        break;
      case AlertType.error:
        this.toastrService.error(message, title, {
          timeOut: timeOut,
          titleClass: 'main-font-size-1',
          messageClass: 'main-font-size-1',
        });
        break;
      case AlertType.warning:
        this.toastrService.warning(message, title, {
          timeOut: timeOut,
          titleClass: 'main-font-size-1',
          messageClass: 'main-font-size-1',
        });
        break;
      case AlertType.info:
        this.toastrService.info(message, title, {
          timeOut: timeOut,
          titleClass: 'main-font-size-1',
          messageClass: 'main-font-size-1',
        });
        break;

      default:
        break;
    }
  }

  alert(
    title: string = 'Attention',
    message: string = 'The operation was successfully .',
    btnText: string = 'Noticed',
    okFunction: Function = () => {}
  ) {
    this.confirmationService.confirm({
      
      header: title,
      message: message,
      accept: okFunction,
      acceptLabel:'yes',
      acceptIcon:'',
      acceptButtonStyleClass:'p-button-success',
      rejectVisible:false
    });
  }

  confirm(
    title: string = 'Attention',
    message: string = 'The operation was successfully .',
    yesFunction: Function = () => {
      this.toast('Attention', 'The operation continued', AlertType.info);
    },
    noFunction: Function = () => {
      this.toast('Attention', 'The operation was stopped', AlertType.error);
    }
  ) {
    this.confirmationService.confirm({
      
      header: title,
      message: message,
      accept: yesFunction,
      reject: noFunction,
      acceptLabel:'yes',
      rejectLabel:'no',
      acceptIcon:'',
      rejectIcon:'',
      acceptButtonStyleClass:'p-button-success',
      rejectButtonStyleClass:'p-button-danger'
    });
  }
}

export enum AlertType {
  success,
  error,
  warning,
  info,
}

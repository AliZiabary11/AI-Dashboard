import { AlertService, AlertType } from 'src/app/core/general';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private readonly alertService: AlertService) {}

  ngOnInit(): void {}

  show() {
    this.alertService.confirm();
  }
}

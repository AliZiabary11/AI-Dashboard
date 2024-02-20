import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestapaComponent } from './testapa.component';



@NgModule({
  declarations: [TestapaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[TestapaComponent]
})
export class TestapaModule { }

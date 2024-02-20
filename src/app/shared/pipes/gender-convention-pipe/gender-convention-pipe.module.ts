import { GenderConventionPipePipe } from './gender-convention-pipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [GenderConventionPipePipe],
  imports: [
    CommonModule
  ],
  exports:[
    GenderConventionPipePipe
  ]
})
export class GenderConventionPipeModule { }

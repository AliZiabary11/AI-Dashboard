import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigiSeparatorPipePipe } from './digi-separator-pipe.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DigiSeparatorPipePipe],
  imports: [
    CommonModule,
    FormsModule,
  ],exports:[DigiSeparatorPipePipe]
})
export class DigiSeparatorPipeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule
  ],
  exports: [TableComponent]
})
export class TableModule {
  static rootComponent = TableComponent;
 }

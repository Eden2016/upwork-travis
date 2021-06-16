import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }

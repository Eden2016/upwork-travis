import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-field-dialog',
  templateUrl: './edit-field-dialog.component.html',
  styleUrls: ['./edit-field-dialog.component.scss']
})
export class EditFieldDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);


  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
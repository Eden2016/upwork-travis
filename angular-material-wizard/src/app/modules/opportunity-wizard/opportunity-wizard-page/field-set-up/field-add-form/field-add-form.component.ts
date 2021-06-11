import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';

@Component({
  selector: 'app-field-add-form',
  templateUrl: './field-add-form.component.html',
  styleUrls: ['./field-add-form.component.scss']
})
export class FieldAddFormComponent implements OnInit {
  fieldFormControl: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.fieldFormControl = this.formBuilder.group({
      fieldName: ['', Validators.required],
      fieldType: ['', Validators.required]
    })
  }

  addCustomField(): void {
    // Dispatch add Custom field action here
  }

}

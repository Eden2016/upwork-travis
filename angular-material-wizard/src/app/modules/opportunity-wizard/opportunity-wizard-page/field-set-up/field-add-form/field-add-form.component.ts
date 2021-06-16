import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as FieldActions from '../store/field.actions'

@Component({
  selector: 'app-field-add-form',
  templateUrl: './field-add-form.component.html',
  styleUrls: ['./field-add-form.component.scss']
})
export class FieldAddFormComponent implements OnInit {
  
  fieldForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.fieldForm = this.formBuilder.group({
      fieldName: ['', Validators.required],
      fieldType: ['', Validators.required]
    })
  }

  addCustomField(): void {
    if (this.fieldForm.valid) {
      this.store.dispatch(FieldActions.addField({ field: this.fieldForm.value }));
    }
  }

}

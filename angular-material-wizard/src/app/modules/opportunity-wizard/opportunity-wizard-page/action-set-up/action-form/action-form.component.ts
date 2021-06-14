import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit {

  actionForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.actionForm = this.formBuilder.group({
      actionName: ['', Validators.required],
      stage: ['', Validators.required],
      field: ['', Validators.required],
      dateType: ['', Validators.required],
      operation: ['', Validators.required],
      daysCounter: ['', Validators.required]
    })
  }

  addAction(): void {
    console.log(this.actionForm.value);
    // Dispatch Add action here
  }

}

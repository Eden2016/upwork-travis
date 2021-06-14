import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import { map } from 'rxjs/operators';
import { Field } from '../../field-set-up/store/field.model';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit, OnDestroy {

  actionForm: FormGroup;
  fieldList: Field[];

  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.getCustomFields();
    this.initializeForm();
  }

  addAction(): void {
    console.log(this.actionForm.value);
    // Dispatch Add action here
  }

  private getCustomFields(): void {
    this.subscription = this.store.select('fields')
      .pipe(map(fieldsState => fieldsState.fields))
      .subscribe((fields: Field[]) => {
        this.fieldList = fields;
        console.log(this.fieldList);
      })
  }

  private initializeForm(): void {
    this.actionForm = this.formBuilder.group({
      actionName: ['', Validators.required],
      stage: ['', Validators.required],
      field: ['', Validators.required],
      dateType: ['', Validators.required],
      operation: ['', Validators.required],
      daysCounter: ['', Validators.required]
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

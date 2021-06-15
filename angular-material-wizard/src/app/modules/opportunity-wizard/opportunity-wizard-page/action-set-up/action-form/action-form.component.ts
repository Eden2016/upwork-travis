import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as CustomActions from '../store/custom-action.actions'
import { map } from 'rxjs/operators';
import { staticOptions } from 'src/static-data/static-options';
import { Field } from '../../field-set-up/store/field.model';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit, OnDestroy {

  actionForm: FormGroup;

  fieldList: Field[] = [];
  stageList = staticOptions.stageList;
  mathOperators = staticOptions.operators.math;

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
    if (this.actionForm.valid) {
      this.store.dispatch(CustomActions.addCustomAction(
        { customAction: this.actionForm.value }
      ))
    }
  }

  private getCustomFields(): void {
    this.subscription = this.store.select('fields')
      .pipe(map(fieldsState => fieldsState.fields))
      .subscribe((fields: Field[]) => {
        this.fieldList = fields;
      })
  }

  private initializeForm(): void {
    this.actionForm = this.formBuilder.group({
      actionName: ['', Validators.required],
      dateType: ['userDate', Validators.required],
      operator: [null, Validators.required],
      daysCounter: [0, Validators.required],
      stage: ['', Validators.required],
      field: ['', Validators.required],
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

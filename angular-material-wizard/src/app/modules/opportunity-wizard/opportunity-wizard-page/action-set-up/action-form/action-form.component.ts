import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as CustomActions from '../store/custom-action.actions'
import { map } from 'rxjs/operators';
import { Field } from '../../field-set-up/store/field.model';
import { staticOptions } from 'src/static-data/static-options';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnInit, OnDestroy {

  actionForm: FormGroup;

  stageList = staticOptions.stageList;
  fieldList: Field[] = [];

  stageControl = new FormControl('', Validators.required);
  fieldControl = new FormControl(['', Validators.required]);

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
      this.store.dispatch(CustomActions.addCustomAction({ customAction: this.actionForm.value }))
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
      operation: ['', Validators.required],
      daysCounter: [0, Validators.required],
      stage: this.stageControl,
      field: this.fieldControl,
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

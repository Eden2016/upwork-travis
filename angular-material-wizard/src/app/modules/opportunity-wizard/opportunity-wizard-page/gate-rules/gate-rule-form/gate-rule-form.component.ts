import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import * as fromApp from '../../../../../store/app.reducer';
import { staticOptions } from 'src/static-data/static-options';
import { Field } from '../../field-set-up/store/field.model';
import { Store } from '@ngrx/store';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Gate } from 'src/app/modules/stage-wizard/stage-wizard-page/store/gate.model';

@Component({
  selector: 'app-gate-rule-form',
  templateUrl: './gate-rule-form.component.html',
  styleUrls: ['./gate-rule-form.component.scss']
})
export class GateRuleFormComponent implements OnInit, OnDestroy {

  gateRuleForm: FormGroup;

  fieldList: Field[] = [];
  gateList: Gate[] = [];
  logicalOperators = staticOptions.operators.logical;
  mathOperators = staticOptions.operators.math;
  stageList = staticOptions.stageList;
  daysCounter = 0;

  private onDestroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.getFormData();
    this.initializeForm();
  }

  private getFormData(): void {
    this.store.select('fields').pipe(
      takeUntil(this.onDestroy$),
      map(fieldsState => fieldsState.fields),
      switchMap((fields: Field[]) => {
        this.fieldList = fields;
        return this.store.select('gates').pipe(
          map(gatesState => gatesState.gates)
        )
      })
    ).subscribe((gates: Gate[]) => {
      this.gateList = gates;
    })
  }

  private initializeForm(): void {
    this.gateRuleForm = this.formBuilder.group({
      field: ['', Validators.required],
      logicOperator: ['equals', Validators.required],
      mathOperator: ['add', Validators.required],
      daysCounter: [0, Validators.required],
      stage: ['', Validators.required],
      gate: ['', Validators.required],
    })
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import * as fromApp from '../../../store/app.reducer';
import * as OpportunityActions from '../../opportunity-setup/opportunity-setup-page/store/opportunity-action';
import * as FieldActions from '../opportunity-wizard-page/field-set-up/store/field.actions';
import * as CustomActionActions from '../opportunity-wizard-page/action-set-up/store/custom-action.actions';
import * as GateRulesActions from '../opportunity-wizard-page/gate-rules/store/gate-rule.actions'
import { Opportunity } from '../../opportunity-setup/opportunity-setup-page/store/opportunity.model';
import { CustomAction } from './action-set-up/store/custom-action.model';
import { Field } from './field-set-up/store/field.model';
import { GateRule } from './gate-rules/store/gate.rule.model';

@Component({
  selector: 'app-opportunity-wizard',
  templateUrl: './opportunity-wizard.component.html',
  styleUrls: ['./opportunity-wizard.component.scss']
})
export class OpportunityWizardComponent implements OnInit, OnDestroy {

  opportunity: Opportunity;
  opportunityForm: FormGroup;
  opportunityIndex: number;
  fieldList: Field[];
  actions: CustomAction[];
  gateRules: GateRule[];

  private onDestroy$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getSelectedOpportunity();
    this.getOpportunityProperties();
    this.initializeForm();
  }

  saveOpportunity(): void {
    const updatedOpportunity: Opportunity = this.opportunityForm.value;
    updatedOpportunity.fields = this.fieldList;
    updatedOpportunity.actions = this.actions;
    updatedOpportunity.gateRules = this.gateRules;

    this.store.dispatch(OpportunityActions
      .updateOpportunity(
        { opportunity: updatedOpportunity, index: this.opportunityIndex }
      ));

    this.clearStoredData();
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.clearStoredData();
    this.router.navigate(['/']);
  }

  private getSelectedOpportunity(): void {
    this.route.params.pipe(
      takeUntil(this.onDestroy$),
      switchMap((params: Params) => {
        this.opportunityIndex = +params.id;
        return this.store.select('opportunities').pipe(
          map(opportunitiesState => opportunitiesState.opportunities)
        );
      })
    ).subscribe((opportunities: Opportunity[]) => {
      this.opportunity = opportunities
        .find((_, index) => index === this.opportunityIndex);
    });
  }

  private getOpportunityProperties(): void {
    this.store.select('fields').pipe(
      takeUntil(this.onDestroy$),
      map(fieldsState => fieldsState.fields),
      tap((fields: Field[]) => this.fieldList = fields),
      switchMap(() => this.store.select('gateRules').pipe(
        map(gateRuleState => gateRuleState.gateRules)
      )),
      switchMap((gateRules: GateRule[]) => {
        this.gateRules = gateRules;
        return this.store.select('customActions').pipe(
          map(actionsState => actionsState.customActions)
        );
      })
    ).subscribe((storedActions: CustomAction[]) => {
      this.actions = storedActions;
    });
  }

  private initializeForm(): void {
    this.opportunityForm = this.formBuilder.group({
      name: [this.opportunity.name, Validators.required],
      active: [false]
    });
  }

  private clearStoredData(): void {
    this.store.dispatch(FieldActions.clearFieldState());
    this.store.dispatch(CustomActionActions.clearCustomActionState());
    this.store.dispatch(GateRulesActions.clearGateRuleState());
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}

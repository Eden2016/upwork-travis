import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as OpportunityActions from '../store/opportunity-action';
import { Opportunity } from '../store/opportunity.model';

@Component({
  selector: 'app-opportunity-setup-form',
  templateUrl: './opportunity-setup-form.component.html',
  styleUrls: ['./opportunity-setup-form.component.scss']
})
export class OpportunitySetupFormComponent implements OnInit {

  opportunityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.opportunityForm = this.formBuilder.group({
      name: ['', Validators.required],
      active: [false]
    });
  }

  addOpportunity(): void {
    if (this.opportunityForm.valid) {
      const newOpportunity: Opportunity = this.opportunityForm.value;

      this.store.dispatch(OpportunityActions.addOpportunity(
        {
          opportunity: {
            ...newOpportunity,
            fields: [],
            actions: [],
            gateRules: [],
            lineItems: [],
            stageSettings: []
          }
        }
      ));
    }
  }

}

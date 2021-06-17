import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import * as fromApp from '../../../store/app.reducer';
import * as OpportunityActions from '../../opportunity-setup/opportunity-setup-page/store/opportunity-action';
import { Opportunity } from '../../opportunity-setup/opportunity-setup-page/store/opportunity.model';

@Component({
  selector: 'app-opportunity-wizard',
  templateUrl: './opportunity-wizard.component.html',
  styleUrls: ['./opportunity-wizard.component.scss']
})
export class OpportunityWizardComponent implements OnInit, OnDestroy {

  opportunity: Opportunity;
  opportunityForm: FormGroup;
  opportunityIndex: number;

  private onDestroy$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getSelectedOpportunity();
    this.initializeForm();
  }

  saveOpportunity(): void {
    console.log(this.opportunityForm.value);
    const updatedOpportunity: Opportunity = this.opportunityForm.value;

    this.store.dispatch(OpportunityActions
      .updateOpportunity(
        { opportunity: updatedOpportunity, index: this.opportunityIndex }
      ));

    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  private getSelectedOpportunity(): void {
    this.route.params.pipe(
      takeUntil(this.onDestroy$),
      switchMap((params: Params) => {
        this.opportunityIndex = +params.id;
        return this.store.select('opportunities').pipe(
          map(opportunitiesState => opportunitiesState.opportunities),
          tap((opportunities: Opportunity[]) => {
            this.opportunity = opportunities
              .find((_, index) => index === this.opportunityIndex);
          })
        );
      })
    ).subscribe();
  }

  private initializeForm(): void {
    this.opportunityForm = this.formBuilder.group({
      name: [this.opportunity.name, Validators.required],
      active: [false]
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}

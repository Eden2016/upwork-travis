import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import { ColumnDefinition } from 'src/app/shared/table/table-data.model';
import { Opportunity } from '../store/opportunity.model';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit, OnDestroy {

  opportunityList: Opportunity[];

  opportunitiesColumns: ColumnDefinition[] = [
    { key: 'name', label: 'Opportunity Name' },
    { key: 'edit', label: 'Edit', config: { isAction: true } },
    { key: 'delete', label: 'Delete', config: { isAction: true } }
  ];

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('opportunities')
      .pipe(map(opportunitiesState => opportunitiesState.opportunities))
      .subscribe((opportunities: Opportunity[]) => {
        this.opportunityList = opportunities;
      });
  }

  onEditOpportunity(index: number): void {
    console.log('Edit Pressed at index:', index);
  }

  onDeleteOpportunity(index: number): void {
    console.log('Delete Pressed at index:', index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

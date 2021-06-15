import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as CustomActionActions from '../store/custom-action.actions'
import { ColumnDefinition } from 'src/app/shared/table/table-data.model';
import { CustomAction } from '../store/custom-action.model';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit, OnDestroy {

  customActionList = [];

  customActionColumns: ColumnDefinition[] = [
    { key: 'actionName', label: 'Action Name' },
    { key: 'stage', label: 'Show Action on Stage(s)' },
    { key: 'field', label: 'Field to set' },
    { key: 'value', label: 'Value' },
    { key: 'delete', label: 'Del', config: { isAction: true } }
  ];

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('customActions')
      .pipe((map(actionsState => actionsState.customActions)))
      .subscribe((storedActions: CustomAction[]) => {
        this.prepareTableData(storedActions);
      })
  }

  onDeleteCustomAction(index: number) {
    this.store.dispatch(CustomActionActions.deleteCustomAction({ index }))
  }

  private prepareTableData(storedActions: CustomAction[]): void {
    this.customActionList = [];

    storedActions.forEach((action: CustomAction) => {
      this.customActionList.push(
        {
          actionName: action.actionName,
          stage: action.stage,
          field: action.field.fieldName,
          value: this.formatActionValue(action)
        }
      )
    })
  }

  private formatActionValue(action: CustomAction): string {
    if (action.daysCounter === 0) {
      return 'Today';
    }

    switch (action.operation) {
      case 'add':
        return `Today ${action.daysCounter} + Days`;
      case 'subtract':
        return `Today ${action.daysCounter} - Days`;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

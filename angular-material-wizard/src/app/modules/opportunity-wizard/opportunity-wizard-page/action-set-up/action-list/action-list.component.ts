import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

  @Input() actionList: CustomAction[];
  customActionList = [];

  customActionColumns: ColumnDefinition[] = [
    { key: 'actionName', label: 'Action Name' },
    { key: 'stage', label: 'Show Action on Stage(s)' },
    { key: 'field', label: 'Field to set' },
    { key: 'value', label: 'Value' },
    { key: 'delete', label: '', config: { isAction: true } }
  ];

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    if (this.actionList.length > 0) {
      this.actionList.forEach(action => {
        this.store.dispatch(CustomActionActions.addCustomAction({ customAction: action }));
      });
    }

    this.subscription = this.store
      .select('customActions')
      .pipe(map(actionsState => actionsState.customActions))
      .subscribe((storedActions: CustomAction[]) => {
        this.getFormData(storedActions);
      });
  }

  onDeleteCustomAction(index: number): void {
    this.store.dispatch(CustomActionActions.deleteCustomAction({ index }));
  }

  private getFormData(storedActions: CustomAction[]): void {
    this.customActionList = [];

    storedActions.forEach((action: CustomAction) => {
      this.customActionList.push(
        {
          actionName: action.actionName,
          stage: action.stage,
          field: action.field.fieldName,
          value: this.formatActionValue(action)
        }
      );
    });
  }

  private formatActionValue(action: CustomAction): string {
    if (action.daysCounter === 0) {
      return 'Today';
    }

    return `Today ${action.daysCounter} ${action.operator.label} Days`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

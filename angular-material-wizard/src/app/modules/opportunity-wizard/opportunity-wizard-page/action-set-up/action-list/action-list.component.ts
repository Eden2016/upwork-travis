import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer'
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
      .pipe(map(actionsState => actionsState.customActions))
      .subscribe((storedActions: CustomAction[]) => {
        console.log('Actions: ', storedActions)
      })

    // this.subscription = this.store
    //   .select('customActions')
    //   .pipe((map(actionsState => actionsState.customActions)))
    //   .subscribe((storedActions: CustomAction[]) => {

    //     console.log(storedActions);

    //     storedActions.forEach((action: CustomAction) => {
    //       this.customActionList.push(
    //         {
    //           actionName: action.actionName,
    //           stage: action.stage,
    //           field: action.field,
    //           value: this.formatActionValue(action)
    //         }
    //       )
    //     })
    //   })
  }

  onDeleteCustomAction(index: number) {
    // dispatch delete action here
  }

  private formatActionValue(action: CustomAction): string {
    console.log('Passed Action: ', action);
    return 'Today +' + action.daysCounter + 'Days'
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

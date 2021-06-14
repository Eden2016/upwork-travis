import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as GateActions from '../store/gate.actions';
import { Gate } from '../store/gate.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDefinition } from 'src/app/shared/table/table-data.model';

@Component({
  selector: 'app-gate-list',
  templateUrl: './gate-list.component.html',
  styleUrls: ['./gate-list.component.scss']
})
export class GateListComponent implements OnInit, OnDestroy {
  gateList: Gate[] = [];
  dataSource: MatTableDataSource<Gate>;
  gatesColumns: ColumnDefinition[] = [
    { key: 'gateName', label: 'Gate Name' },
    { key: 'stage', label: 'Stage' },
    { key: 'color', label: 'Color' },
    {
      key: 'delete', label: 'Del', config: {
        isAction: true,
      }
    }
  ]

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('gates')
      .pipe(map(gatesState => gatesState.gates))
      .subscribe((gates: Gate[]) => {
        this.gateList = gates;
      })
  }

  onDeleteGate(index: number): void {
    console.log(index)
    this.store.dispatch(GateActions.deleteGate({ index }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

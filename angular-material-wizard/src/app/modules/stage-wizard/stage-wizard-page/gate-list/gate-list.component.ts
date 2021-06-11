import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import { Gate } from '../store/gate.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gate-list',
  templateUrl: './gate-list.component.html',
  styleUrls: ['./gate-list.component.scss']
})
export class GateListComponent implements OnInit, OnDestroy {
  gateList: Gate[] = [];
  dataSource: MatTableDataSource<Gate>;
  displayedColumns: string[] = ['gateName', 'stage', 'color'];
  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('gates')
      .pipe(map(gatesState => gatesState.gates))
      .subscribe((gates: Gate[]) => {
        this.dataSource = new MatTableDataSource(gates);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

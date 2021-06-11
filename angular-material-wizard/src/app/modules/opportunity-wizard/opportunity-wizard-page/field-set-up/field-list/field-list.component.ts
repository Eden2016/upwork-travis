import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as FieldActions from '../store/field.actions'
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { Field } from '../store/field.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<Field>;
  displayedColumns: string[] = ['fieldName', 'fieldType', 'delAction'];
  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('fields')
      .pipe(map(gatesState => gatesState.fields))
      .subscribe((fields: Field[]) => {
        this.dataSource = new MatTableDataSource(fields);
      })
  }

  onDeleteField(index: number): void {
    this.store.dispatch(FieldActions.deleteField({ index }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

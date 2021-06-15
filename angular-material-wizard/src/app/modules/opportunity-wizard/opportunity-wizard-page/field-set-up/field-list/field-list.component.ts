import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as FieldActions from '../store/field.actions';
import { Subscription } from 'rxjs/internal/Subscription';
import { Field } from '../store/field.model';
import { map } from 'rxjs/operators';
import { ColumnDefinition } from 'src/app/shared/table/table-data.model';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit, OnDestroy {

  fieldList: Field[] = [];
  fieldsColumns: ColumnDefinition[] = [
    { key: 'fieldName', label: 'Field Name' },
    { key: 'fieldType', label: 'Field Type' },
    { key: 'delete', label: 'Del', config: { isAction: true } }
  ];

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('fields')
      .pipe(map(gatesState => gatesState.fields))
      .subscribe((fields: Field[]) => {
        this.fieldList = fields;
      })
  }

  onDeleteField(index: number): void {
    this.store.dispatch(FieldActions.deleteField({ index }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

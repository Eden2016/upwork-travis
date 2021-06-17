import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import * as FieldActions from '../store/field.actions';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';
import { ColumnDefinition } from 'src/app/shared/table/table-data.model';
import { Field } from '../store/field.model';
import { MatDialog } from '@angular/material/dialog';
import { EditFieldDialogComponent } from './edit-field-dialog/edit-field-dialog.component';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit, OnDestroy {

  @Input() fieldList: Field[];

  fieldsColumns: ColumnDefinition[] = [
    { key: 'fieldName', label: 'Field Name' },
    { key: 'fieldType', label: 'Field Type' },
    { key: 'edit', label: '', config: { isAction: true } },
    { key: 'delete', label: '', config: { isAction: true } }
  ];

  private subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.fieldList.length > 0) {
      this.fieldList.forEach(field => {
        this.store.dispatch(FieldActions.addField({ field }));
      });
    }

    this.subscription = this.store
      .select('fields')
      .pipe(map(fieldsState => fieldsState.fields))
      .subscribe((fields: Field[]) => {
        this.fieldList = fields;
      });
  }

  onEditField(index: number): void {
    const selectedField = this.fieldList[index];

    const dialogRef = this.dialog.open(EditFieldDialogComponent, {
      data: { fieldName: selectedField.fieldName }
    });

    dialogRef.afterClosed().subscribe((newName: string) => {
      if (newName) {
        const updatedField: Field = {
          fieldName: newName,
          fieldType: selectedField.fieldType
        };
        this.store.dispatch(FieldActions.editField({ field: updatedField, index }));
      }
    });
  }

  onDeleteField(index: number): void {
    this.store.dispatch(FieldActions.deleteField({ index }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

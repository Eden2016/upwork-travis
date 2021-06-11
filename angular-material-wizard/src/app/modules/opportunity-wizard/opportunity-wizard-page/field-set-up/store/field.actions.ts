import { createAction, props } from '@ngrx/store';
import { Field } from './field.model';

export const addField = createAction(
  '[Field] Add Field',
  props<{
    field: Field
  }>()
);
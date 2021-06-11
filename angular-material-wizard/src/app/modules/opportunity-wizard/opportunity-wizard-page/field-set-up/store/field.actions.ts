import { createAction, props } from '@ngrx/store';
import { Field } from './field.model';

export const addField = createAction(
  '[Field] Add Field',
  props<{
    field: Field
  }>()
);

export const deleteField = createAction(
  '[Field] Delete Field',
  props<{
    index: number
  }>()
);
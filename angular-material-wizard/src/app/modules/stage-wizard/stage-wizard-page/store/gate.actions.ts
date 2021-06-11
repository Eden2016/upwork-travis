import { createAction, props } from '@ngrx/store';
import { Gate } from './gate.model';


export const addGate = createAction(
  '[Gate] Add Gate',
  props<{
    gate: Gate
  }>()
);

export const deleteGate = createAction(
  '[Gate] Delete Gate',
  props<{
    index: number
  }>()
);

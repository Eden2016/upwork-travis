import { createAction, props } from '@ngrx/store';
import { Gate } from 'src/app/modules/models/gate.model';


export const addGate = createAction(
  '[Gate] Add Gate',
  props<{
    gate: Gate
  }>()
);